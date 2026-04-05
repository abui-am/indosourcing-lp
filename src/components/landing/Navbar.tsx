import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "./Container";

const links = [
  { href: "#solusi", label: "Solusi" },
  { href: "#fitur", label: "Fitur" },
  { href: "#proses", label: "Proses" },
  { href: "#buyer", label: "Buyer" },
  { href: "#supplier", label: "Supplier" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          <img src="/Indosourcing.png" alt="Indosourcing Logo" className="h-8 w-auto object-contain" />
          <div className="leading-none hidden sm:block">
            <div className="text-sm font-bold text-[hsl(var(--primary))]">Indosourcing</div>
            <div className="text-xs text-[hsl(var(--muted-foreground))]">
              Marketplace B2B
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-[hsl(var(--muted-foreground))] no-underline hover:text-[hsl(var(--foreground))]",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#get-started" size="sm" className="hidden sm:inline-flex">
            Daftar Sekarang
          </Button>
          <Button
            href="#get-started"
            size="sm"
            variant="outline"
            className="sm:hidden"
          >
            Mulai
          </Button>
        </div>
      </Container>
    </div>
  );
}

