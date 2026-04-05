import { Lock, ShieldCheck, Users } from "lucide-react";

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
            Indosourcing dirancang untuk governance yang rapi: akses sesuai peran, data transaksi
            terstruktur, dan komunikasi berada di konteks yang benar.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                <Lock className="h-4 w-4 text-[hsl(var(--primary))]" />
                Data governance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                Informasi RFQ, quote, dan keputusan tersimpan rapi untuk audit internal.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                Trust signals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">
                Profil organisasi, verifikasi, dan indikator kepercayaan mendukung shortlist.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-4">
          <div className="text-sm font-medium">Bahasa bisnis, bukan jargon teknis</div>
          <div className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
            Kamu mendapatkan transparansi proses, kontrol akses, dan komunikasi yang tertata tanpa
            mempersulit pengguna.
          </div>
        </div>
      </Container>
    </section>
  );
}

