import { BrainCircuit, BarChart4, Lightbulb } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

const aiFeatures = [
  {
    title: "Credit Scoring AI",
    desc: "Penilaian profil dan risiko supplier yang lebih terstruktur. Dapatkan insight objektif untuk mendukung keputusan sourcing yang aman.",
    icon: BrainCircuit,
    role: "Untuk Buyer",
  },
  {
    title: "Smart Export Scoring",
    desc: "Ukur kesiapan supplier untuk menembus pasar ekspor. Dapatkan skor dan area prioritas untuk peningkatan bisnis.",
    icon: BarChart4,
    role: "Untuk Supplier",
  },
  {
    title: "Digital Advisor AI",
    desc: "Saran langkah berikutnya secara real-time untuk buyer dan supplier selama proses deal, disesuaikan dengan konteks RFQ.",
    icon: Lightbulb,
    role: "Semua Pengguna",
  },
];

export function AIIntelligence() {
  return (
    <section id="ai-intelligence" className="scroll-mt-24 py-14 md:py-20 bg-[hsl(var(--muted))]/30">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="outline" className="border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))]">
            <BrainCircuit className="mr-1 h-3 w-3" />
            AI Intelligence
          </Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Didukung oleh Insight AI untuk Keputusan Lebih Cepat
          </h2>
          <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
            AI di Indosourcing dirancang sebagai <strong>decision support</strong>. Kami memberikan data dan rekomendasi yang actionable agar Anda bisa mengambil keputusan bisnis yang tepat dengan lebih percaya diri.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {aiFeatures.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden transition-all hover:shadow-md border-[hsl(var(--border))]/60">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5">
                <feature.icon className="h-24 w-24" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {feature.role}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}