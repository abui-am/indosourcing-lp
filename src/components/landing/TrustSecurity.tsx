import { Lock, ShieldCheck, Users, BrainCircuit, Link2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

export function TrustSecurity() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="outline">Trust & Security</Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Proses lebih aman, lebih tertib, dan mudah diawasi
          </h2>
          <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
            Indosourcing dirancang untuk governance yang rapi: akses sesuai peran, infrastruktur Blockchain sebagai Trust Layer, dan tim ahli di lapangan.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-4 w-4 text-[hsl(var(--primary))]" />
                Role-based workspace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                Alur buyer dan supplier dipisahkan agar lebih fokus dan minim kebocoran konteks.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Link2 className="h-4 w-4 text-[hsl(var(--primary))]" />
                Blockchain Escrow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                Milestone transaksi (DP, Produksi, QC, Shipping) dicatat secara immutable di Blockchain.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                Human-in-the-loop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                Layanan ahli lapangan untuk audit fisik pabrik dan Quality Control tahap akhir.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BrainCircuit className="h-4 w-4 text-[hsl(var(--primary))]" />
                AI Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                Model AI digunakan dengan prinsip keamanan data ketat sebagai decision support.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-4">
          <div className="text-sm font-medium">LCS (Local Currency Settlement) Ready</div>
          <div className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
            Kami mendukung stabilitas makro dengan integrasi transaksi lintas batas tanpa ketergantungan penuh pada USD.
          </div>
        </div>
      </Container>
    </section>
  );
}

