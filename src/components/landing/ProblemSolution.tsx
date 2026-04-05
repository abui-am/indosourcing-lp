import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

export function ProblemSolution() {
  return (
    <section id="solusi" className="scroll-mt-24 py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Problem → Solution</Badge>
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Dari proses manual yang lambat ke workflow yang terstruktur
          </h2>
          <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
            Indosourcing menyatukan RFQ, penawaran, dan keputusan deal agar tim procurement dan
            supplier bisa fokus pada langkah berikutnya, bukan mengejar status.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <XCircle className="h-4 w-4 text-red-500" />
                Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>Komunikasi tersebar di email/WA, sulit mencari konteks.</li>
                <li>Status quote tidak jelas, follow-up rawan terlewat.</li>
                <li>Perbandingan penawaran memakan waktu dan tidak rapi.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))]" />
                Solusi Indosourcing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>RFQ terpusat dengan format kebutuhan yang konsisten.</li>
                <li>Penawaran terstruktur: harga, MOQ, lead time, dan catatan.</li>
                <li>Keputusan lebih cepat lewat ringkasan status + chat transaksi.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3 text-sm text-[hsl(var(--muted-foreground))]">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              Flow inti: <span className="font-medium text-[hsl(var(--foreground))]">RFQ</span>
              <ArrowRight className="mx-2 inline h-4 w-4" />
              <span className="font-medium text-[hsl(var(--foreground))]">Penawaran</span>
              <ArrowRight className="mx-2 inline h-4 w-4" />
              <span className="font-medium text-[hsl(var(--foreground))]">Deal</span>
            </div>
            <div className="text-xs">
              Workspace buyer & supplier dipisahkan agar lebih fokus.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

