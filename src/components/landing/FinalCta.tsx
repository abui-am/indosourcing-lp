import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/Container";

export function FinalCta() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="rounded-[calc(var(--radius)+4px)] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-5 py-10 md:px-10">
          <div className="max-w-2xl">
            <div className="text-2xl font-semibold tracking-tight md:text-3xl">
              Mulai Sourcing Lebih Efisien Hari Ini
            </div>
            <div className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
              Pilih peran kamu, lalu masuk ke workflow yang lebih cepat dan terstruktur.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="#buyer" size="lg">
                Daftar sebagai Buyer
              </Button>
              <Button href="#supplier" size="lg" variant="outline">
                Daftar sebagai Supplier
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

