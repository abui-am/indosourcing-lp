import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export function Accordion({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-3", className)} {...props} />;
}

export function AccordionItem({
  className,
  title,
  children,
}: {
  className?: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <details
      className={cn(
        "group rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-transform group-open:rotate-180" />
      </summary>
      <div className="pt-3 text-sm text-[hsl(var(--muted-foreground))]">
        {children}
      </div>
    </details>
  );
}

