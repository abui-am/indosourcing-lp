import {
  FileText,
  MessagesSquare,
  ShieldCheck,
  Timer,
  TrendingUp,
  BrainCircuit,
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
      {/* Background Map & Network (Lading Logic Style) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[hsl(var(--background))]">
        {/* Subtle Dotted Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

        {/* World Map Silhouette (Masked) */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            maskImage: `url(https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg)`,
            WebkitMaskImage: `url(https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg)`,
            maskSize: "80%",
            WebkitMaskSize: "80%",
            maskPosition: "center 40%",
            WebkitMaskPosition: "center 40%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            backgroundColor: "hsl(var(--foreground))",
          }}
        />

        {/* Trade Routes / Map Corridors */}
        <svg
          className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Network Lines / Corridors */}
          <path
            d="M 250 400 Q 450 250 750 350"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeOpacity="0.5"
            className="animate-dash-flow"
          />
          <path
            d="M 750 350 Q 900 450 1050 600"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeOpacity="0.5"
            className="animate-dash-flow"
          />
          <path
            d="M 350 500 Q 550 650 800 600"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.3"
            className="animate-dash-flow"
          />
          <path
            d="M 800 600 Q 850 400 950 300"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.3"
            className="animate-dash-flow"
          />
          <path
            d="M 150 250 Q 300 350 500 200"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="8 8"
            strokeOpacity="0.2"
            className="animate-dash-flow"
          />

          {/* Active Nodes / Ports */}
          <circle
            cx="250"
            cy="400"
            r="8"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
          />
          <circle cx="250" cy="400" r="4" fill="hsl(var(--primary))" />

          <circle
            cx="750"
            cy="350"
            r="10"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
            style={{ animationDelay: "500ms" }}
          />
          <circle cx="750" cy="350" r="5" fill="hsl(var(--primary))" />

          <circle
            cx="1050"
            cy="600"
            r="8"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
            style={{ animationDelay: "1000ms" }}
          />
          <circle cx="1050" cy="600" r="4" fill="hsl(var(--primary))" />

          <circle
            cx="350"
            cy="500"
            r="6"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
            style={{ animationDelay: "300ms" }}
          />
          <circle cx="350" cy="500" r="3" fill="hsl(var(--primary))" />

          <circle
            cx="800"
            cy="600"
            r="8"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
            style={{ animationDelay: "700ms" }}
          />
          <circle cx="800" cy="600" r="4" fill="hsl(var(--primary))" />

          <circle
            cx="950"
            cy="300"
            r="6"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
            style={{ animationDelay: "1200ms" }}
          />
          <circle cx="950" cy="300" r="3" fill="hsl(var(--primary))" />

          <circle
            cx="150"
            cy="250"
            r="4"
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            className="animate-ping"
            style={{ animationDelay: "1500ms" }}
          />
          <circle cx="150" cy="250" r="2" fill="hsl(var(--primary))" />
        </svg>

        {/* Fading Edges to blend into content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/80 via-transparent to-[hsl(var(--background))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-transparent to-[hsl(var(--background))]/50" />
      </div>

      <Container className="relative z-10 grid gap-10 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div className="flex flex-col items-start">
          <Badge variant="secondary" className="animate-fade-in-up mb-4 text-xs">
            <span className="mr-1.5 flex h-2 w-2 rounded-full bg-[hsl(var(--primary))] animate-pulse"></span>
            Managed B2B Export Marketplace
          </Badge>
          <h1 className="animate-fade-in-up text-3xl font-semibold tracking-tight md:text-5xl">
            Sourcing B2B & Ekspor Lebih Cepat dengan AI di Indosourcing
          </h1>
          <p className="animate-fade-in-up animation-delay-100 mt-4 max-w-xl text-base text-[hsl(var(--muted-foreground))] md:text-lg">
            Platform <strong>End-to-End Orchestrator</strong>. Publikasikan kebutuhan, bandingkan penawaran pemasok, dan capai deal dalam satu workflow yang didukung AI Co-Pilot dan keamanan Blockchain.
          </p>

          <div className="animate-fade-in-up animation-delay-200 mt-6 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => window.location.href = 'https://indosourcing.vercel.app/'} size="lg" className="shadow-lg shadow-[hsl(var(--primary))]/20 transition-transform hover:-translate-y-0.5">
              Daftar Sekarang
            </Button>
            <Button
              href="#how-it-works"
              size="lg"
              variant="outline"
              className="bg-background/50 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
            >
              Lihat Cara Kerja
            </Button>
          </div>

          <div className="animate-fade-in-up animation-delay-300 mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-3 py-2 backdrop-blur-sm transition-colors hover:bg-[hsl(var(--muted))]">
              <FileText className="h-4 w-4 text-[hsl(var(--primary))]" />
              <div className="text-xs font-medium">RFQ Terpusat</div>
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-3 py-2 backdrop-blur-sm transition-colors hover:bg-[hsl(var(--muted))]">
              <BrainCircuit className="h-4 w-4 text-[hsl(var(--primary))]" />
              <div className="text-xs font-medium">AI Scoring</div>
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-3 py-2 backdrop-blur-sm transition-colors hover:bg-[hsl(var(--muted))]">
              <MessagesSquare className="h-4 w-4 text-[hsl(var(--primary))]" />
              <div className="text-xs font-medium">Chat Transaksi</div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Card className="overflow-hidden border-[hsl(var(--border))]/50 bg-[hsl(var(--card))]/80 shadow-2xl backdrop-blur-sm transition-all hover:shadow-[hsl(var(--primary))]/5">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>Workspace RFQ</CardTitle>
                  <CardDescription>Status, penawaran, dan insight AI di satu tempat.</CardDescription>
                </div>
                <Badge variant="outline" className="bg-background/50 relative overflow-hidden">
                  <span className="absolute inset-0 bg-[hsl(var(--primary))]/10 animate-pulse" />
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="group rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 p-4 transition-colors hover:bg-[hsl(var(--muted))]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">RFQ • Kemasan Produk</div>
                    <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      Qty 50.000 • Lead time target 21 hari
                    </div>
                  </div>
                  <Badge variant="secondary" className="transition-transform group-hover:scale-105">Open</Badge>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-[var(--radius)] border border-[hsl(var(--border))]/50 bg-[hsl(var(--background))]/80 p-3 transition-colors hover:bg-[hsl(var(--background))]">
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">Quote masuk</div>
                    <div className="mt-1 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[hsl(var(--primary))]" />
                      <div className="text-sm font-semibold">12</div>
                    </div>
                  </div>
                  <div className="rounded-[var(--radius)] border border-[hsl(var(--border))]/50 bg-[hsl(var(--background))]/80 p-3 transition-colors hover:bg-[hsl(var(--background))]">
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">AI Credit Score</div>
                    <div className="mt-1 flex items-center gap-2">
                      <BrainCircuit className="h-4 w-4 text-[hsl(var(--primary))]" />
                      <div className="text-sm font-semibold text-green-600">Low Risk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group flex items-start gap-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-background/50 p-4 transition-colors hover:bg-[hsl(var(--muted))]/50">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))] transition-transform group-hover:scale-110" />
                  <div>
                    <div className="text-sm font-medium">Kontrol Akses</div>
                    <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      Workspace buyer dan supplier terpisah.
                    </div>
                  </div>
                </div>
                <div className="group flex items-start gap-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-background/50 p-4 transition-colors hover:bg-[hsl(var(--muted))]/50">
                  <BrainCircuit className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))] transition-transform group-hover:scale-110" />
                  <div>
                    <div className="text-sm font-medium">Digital Advisor</div>
                    <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      Saran langkah selanjutnya per transaksi.
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
