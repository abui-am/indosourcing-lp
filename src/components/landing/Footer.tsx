import { Separator } from "@/components/ui/separator";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4 no-underline">
              <img src="/Indosourcing.png" alt="Indosourcing Logo" className="h-8 w-auto object-contain" />
              <div className="leading-none">
                <div className="text-sm font-bold text-[hsl(var(--primary))]">Indosourcing</div>
              </div>
            </a>
            <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
              Marketplace B2B untuk sourcing yang cepat, terstruktur, dan aman.
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Navigasi</div>
            <div className="mt-2 grid gap-2 text-sm">
              <a className="no-underline hover:underline" href="#solusi">
                Solusi
              </a>
              <a className="no-underline hover:underline" href="#fitur">
                Fitur
              </a>
              <a className="no-underline hover:underline" href="#proses">
                Proses
              </a>
              <a className="no-underline hover:underline" href="#faq">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Kontak</div>
            <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
              Email: hello@indosourcing.co
            </div>
            <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
              Untuk partner institusi, tulis subjek “Partnership”.
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-xs text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Indosourcing. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

