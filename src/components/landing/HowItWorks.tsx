import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

const steps = [
  {
    n: "01",
    title: "Buyer membuat RFQ",
    desc: "Tulis kebutuhan, spesifikasi, kuantitas, dan target lead time.",
  },
  {
    n: "02",
    title: "Supplier mengirim penawaran",
    desc: "Kirim quote dengan detail harga, MOQ, lead time, dan catatan.",
  },
  {
    n: "03",
    title: "Buyer review & deal",
    desc: "Review dengan dukungan AI scoring, diskusi via chat per RFQ, lalu putuskan deal.",
  },
];

export function HowItWorks() {
  return (
    <section id="proses" className="scroll-mt-24 py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="outline">Cara Kerja</Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            3 langkah sederhana untuk sourcing yang lebih efisien
          </h2>
          <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
            Dari kebutuhan hingga keputusan deal, semua status bisa dilacak dengan bantuan AI intelligence tanpa komunikasi yang tercecer.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-base">{s.title}</CardTitle>
                  <div className="text-sm font-semibold text-[hsl(var(--muted-foreground))]">
                    {s.n}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

