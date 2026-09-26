# n8n workflow change: Claude-driven industry classification

Target workflow: **"20 — Client Intelligence & Project Setup"**
(id `tpr8ar6okTdQqwwL`, webhook `POST /webhook/client-intelligence`,
triggered by workflow "09 — GHL Deal Won → ERPNext Customer" on every new
client).

Not applied yet — this session's n8n MCP access is read/execute only
(`search_workflows`, `get_workflow_details`, `execute_workflow`), no
workflow-edit tool. Someone with n8n editor access needs to paste these
three node changes in directly.

## Why this approach, not a bigger keyword list

The existing `Normalise Industry` node keyword-matches the raw `industry`
string that arrives from GHL. It never looks at the rich brief the
`Claude — Generate Brief` node already produces in the same request
(company background, target audience, services, website content). Rather
than bolting more keywords onto a blind string match, have Claude classify
as one more field in the brief it's already generating — no extra API
call, and it can actually reason about what the business does instead of
pattern-matching a label. The keyword map stays, downgraded to a fallback
for when the field comes back missing or invalid.

## 1. `Build Claude Prompt` node (id `code-003`)

Insert this key into the requested JSON schema, directly after
`"brand_voice"`:

```
"industry_classification": "One value EXACTLY from this list, chosen from what the business actually does (use company background, services and website content — not just the raw industry label passed in): Healthcare | Property & Construction | E-commerce | Professional Services | Hospitality | Retail | Technology | Education | Finance | Engineering | Church | Non-Profit / Charity | App / Software | Other. A religious congregation is Church. A registered charity/non-profit that is not a congregation is Non-Profit / Charity. A B2B/procurement-style technical product or service is Technology or Engineering; a self-serve consumer/prosumer app or software product is App / Software. Use Other only if genuinely none fit — do not force a fit.",
```

Everything else in the prompt (the 8-task plan, output ordering
requirement, etc.) is unchanged.

## 2. `Parse Claude Response` node (id `code-004`)

Add one key to the `emptyBrief` object:

```js
const emptyBrief = {
  first_90_day_tasks: [],
  team_notes: '', company_background: '', industry_overview: '',
  target_audience: '', competitor_summary: '', brand_voice: '',
  industry_classification: '',
  current_digital_presence: '', quick_wins: '', risks_and_challenges: '',
  strategy_brief: '', recommended_services: '', pain_points: ''
};
```

No other change needed here — the regex-salvage fallback path already
iterates `Object.keys(emptyBrief)`, so it picks up the new key
automatically if the JSON response gets truncated.

## 3. `Normalise Industry` node (id `norm-industry-001`) — full replacement

```js
const d = $input.first().json;
const validValues = [
  'Healthcare', 'Property & Construction', 'E-commerce',
  'Professional Services', 'Hospitality', 'Retail', 'Technology',
  'Education', 'Finance', 'Engineering', 'Church',
  'Non-Profit / Charity', 'App / Software', 'Other'
];

const claudeChoice = (d.brief && d.brief.industry_classification || '').trim();
if (validValues.includes(claudeChoice)) {
  return [{ json: { ...d, industry: claudeChoice } }];
}

// Fallback: raw industry string from GHL, keyword-matched
const raw = (d.industry || '').toLowerCase();
const map = [
  ['health','Healthcare'],['medical','Healthcare'],['clinic','Healthcare'],
  ['property','Property & Construction'],['construction','Property & Construction'],
  ['ecommerce','E-commerce'],['e-commerce','E-commerce'],
  ['professional','Professional Services'],['consult','Professional Services'],
  ['legal','Professional Services'],['accountant','Professional Services'],
  ['hospitality','Hospitality'],['restaurant','Hospitality'],['hotel','Hospitality'],
  ['retail','Retail'],['fashion','Retail'],
  ['tech','Technology'],['software','Technology'],['saas','Technology'],
  ['education','Education'],['school','Education'],['training','Education'],
  ['driving','Education'],['tuition','Education'],['academy','Education'],
  ['finance','Finance'],['banking','Finance'],['insurance','Finance'],
  ['engineer','Engineering'],
  ['church','Church'],['ministry','Church'],['congregation','Church'],
  ['parish','Church'],['worship','Church'],
  ['charity','Non-Profit / Charity'],['non-profit','Non-Profit / Charity'],
  ['nonprofit','Non-Profit / Charity'],['ngo','Non-Profit / Charity'],
  ['foundation','Non-Profit / Charity']
];
let normIndustry = 'Other';
for (const [kw, val] of map) {
  if (raw.includes(kw)) { normIndustry = val; break; }
}
return [{ json: { ...d, industry: normIndustry } }];
```

Note the fallback map deliberately does not try to distinguish
App / Software from Technology — that distinction genuinely needs the
business-description context Claude has and a keyword match doesn't, so
in the fallback path (Claude's field missing/invalid) it's safer to land
ambiguous software/tech clients in the established Technology bucket than
guess wrong on App / Software.

## After applying

Test against a known case before trusting it broadly — re-run the
webhook for a church or non-profit client (or a test payload) and confirm
`custom_industry` lands correctly on the Customer record, not just that
the workflow executes without error.
