import {
  FileText,
  MessagesSquare,
  ShieldCheck,
  Timer,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Container } from "./Container";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[hsl(var(--primary))]/15 blur-3xl" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />
      </div>

      <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Sourcing B2B Lebih Cepat dengan Indosourcing
          </h1>
          <p className="mt-4 max-w-xl text-base text-[hsl(var(--muted-foreground))] md:text-lg">
            Publikasikan kebutuhan, bandingkan penawaran pemasok, dan capai deal dalam satu
            workflow.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="#buyer" size="lg">
              Saya Buyer
            </Button>
            <Button href="#supplier" size="lg" variant="outline">
              Saya Supplier
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-3 py-2">
              <FileText className="h-4 w-4 text-[hsl(var(--primary))]" />
              <div className="text-xs font-medium">RFQ terpusat</div>
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-3 py-2">
              <TrendingUp className="h-4 w-4 text-[hsl(var(--primary))]" />
              <div className="text-xs font-medium">Quote terstruktur</div>
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-3 py-2">
              <MessagesSquare className="h-4 w-4 text-[hsl(var(--primary))]" />
              <div className="text-xs font-medium">Chat transaksi</div>
            </div>
          </div>
        </div>

        <div>
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>Workspace RFQ</CardTitle>
                  <CardDescription>Semua status dan penawaran di satu tempat.</CardDescription>
                </div>
                <Badge variant="outline">Live</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">RFQ • Kemasan Produk</div>
                    <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      Qty 50.000 • Lead time target 21 hari
                    </div>
                  </div>
                  <Badge variant="secondary">Open</Badge>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-[var(--radius)] bg-[hsl(var(--background))] p-3">
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Quote masuk
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[hsl(var(--primary))]" />
                      <div className="text-sm font-semibold">12</div>
                    </div>
                  </div>
                  <div className="rounded-[var(--radius)] bg-[hsl(var(--background))] p-3">
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      Estimasi respon
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Timer className="h-4 w-4 text-[hsl(var(--primary))]" />
                      <div className="text-sm font-semibold">≤ 48 jam</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-[var(--radius)] border border-[hsl(var(--border))] p-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))]" />
                  <div>
                    <div className="text-sm font-medium">Kontrol akses berbasis role</div>
                    <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      Workspace buyer dan supplier terpisah.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[var(--radius)] border border-[hsl(var(--border))] p-4">
                  <MessagesSquare className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))]" />
                  <div>
                    <div className="text-sm font-medium">Chat berbasis konteks</div>
                    <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      Diskusi menempel ke RFQ/Quote terkait.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

