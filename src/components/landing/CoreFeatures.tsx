import {
  FileText,
  MessageSquareText,
  ShieldCheck,
  SquareStack,
  Workflow,
  BrainCircuit,
  BarChart4,
  Lightbulb,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

const items = [
  {
    title: "RFQ terpusat",
    desc: "Buat dan kelola RFQ dengan kebutuhan yang jelas dan konsisten.",
    icon: FileText,
  },
  {
    title: "Quote terstruktur",
    desc: "Supplier mengirim penawaran dengan detail harga, MOQ, dan lead time.",
    icon: SquareStack,
  },
  {
    title: "Offer request workflow",
    desc: "Tindak lanjut transaksi lebih rapi lewat alur permintaan penawaran.",
    icon: Workflow,
  },
  {
    title: "Credit Scoring AI",
    desc: "Evaluasi profil dan risiko supplier lebih cepat dengan bantuan skor AI.",
    icon: BrainCircuit,
  },
  {
    title: "Smart Export Scoring",
    desc: "Skor kesiapan ekspor supplier beserta rekomendasi area peningkatan.",
    icon: BarChart4,
  },
  {
    title: "Digital Advisor AI",
    desc: "Saran dan rekomendasi langkah berikutnya di setiap tahap sourcing.",
    icon: Lightbulb,
  },
  {
    title: "Trade chat kontekstual",
    desc: "Diskusi menempel pada RFQ/Quote untuk menghindari miskomunikasi.",
    icon: MessageSquareText,
  },
  {
    title: "Trust signal organisasi",
    desc: "Profil, verifikasi, dan indikator kepercayaan untuk keputusan lebih confident.",
    icon: ShieldCheck,
  },
];

export function CoreFeatures() {
  return (
    <section id="fitur" className="scroll-mt-24 py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="outline">Fitur Inti</Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Semua kebutuhan sourcing, end-to-end di satu platform
          </h2>
          <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
            Bukan sekadar daftar fitur. Ini alur kerja yang diperkuat AI untuk mempercepat keputusan dan membuat proses lebih transparan.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Card key={it.title} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <it.icon className="h-4 w-4 text-[hsl(var(--primary))]" />
                  {it.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

