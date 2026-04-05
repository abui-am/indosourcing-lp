import {
  FileText,
  MessageSquareText,
  ShieldCheck,
  SquareStack,
  Workflow,
  BrainCircuit,
  BarChart4,
  Lightbulb,
  Link2,
  Wallet,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

const items = [
  {
    title: "RFQ terpusat",
    desc: "Buat dan kelola RFQ dengan spesifikasi teknis (Tech Pack) yang siap diproduksi.",
    icon: FileText,
  },
  {
    title: "Quote terstruktur",
    desc: "Supplier mengirim penawaran dengan detail harga, MOQ, dan lead time.",
    icon: SquareStack,
  },
  {
    title: "Blockchain Trust Layer",
    desc: "Catat setiap tahap transaksi secara immutable sebagai Escrow yang aman berbasis smart contract.",
    icon: Link2,
  },
  {
    title: "Credit Scoring AI",
    desc: "Evaluasi profil dan risiko supplier lebih cepat dengan bantuan skor AI.",
    icon: BrainCircuit,
  },
  {
    title: "Smart Export Scoring",
    desc: "Skor kesiapan ekspor UMKM (NIB, Halal/ISO) beserta rekomendasi area peningkatan.",
    icon: BarChart4,
  },
  {
    title: "Digital Advisor AI",
    desc: "NLP untuk pemetaan RFQ ke HS Code dan strategi negosiasi di setiap tahap sourcing.",
    icon: Lightbulb,
  },
  {
    title: "Smart Financing & LCS",
    desc: "Akses modal kerja UMKM dan Local Currency Settlement untuk stabilitas transaksi lintas batas.",
    icon: Wallet,
  },
  {
    title: "Sourcing Agent & QC",
    desc: "Dukungan Human-in-the-loop untuk audit pabrik dan Quality Control proyek berskala besar.",
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

