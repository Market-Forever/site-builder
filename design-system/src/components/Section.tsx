import { type HTMLAttributes } from "react";
import { clsx } from "clsx";

type SectionProps = HTMLAttributes<HTMLElement> & {
  surface?: boolean;
};

export function Section({ surface, className, children, ...props }: SectionProps) {
  return (
    <section
      className={clsx("py-section-y", surface && "bg-surface", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
