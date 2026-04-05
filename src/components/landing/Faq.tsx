import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { Container } from "./Container";

const faqs = [
  {
    q: "Apa itu Indosourcing?",
    a: "Indosourcing adalah marketplace B2B untuk proses sourcing end-to-end: RFQ, penawaran, hingga keputusan deal dalam satu workflow.",
  },
  {
    q: "Saya buyer. Setelah membuat RFQ, apa yang terjadi?",
    a: "Supplier akan mengirim penawaran dengan format yang seragam. Kamu bisa membandingkan, bertanya lewat chat transaksi, lalu memilih penawaran terbaik.",
  },
  {
    q: "Saya supplier. Bagaimana saya mendapatkan RFQ yang relevan?",
    a: "Kamu melengkapi profil organisasi dan kapabilitas. Sistem membantu menampilkan RFQ yang sesuai agar proses quoting lebih efisien.",
  },
  {
    q: "Apakah komunikasi dilakukan di luar platform?",
    a: "Komunikasi utama berjalan lewat trade chat berbasis konteks agar diskusi tidak tercecer dan mudah ditinjau ulang.",
  },
  {
    q: "Bagaimana Indosourcing membantu trust antara buyer dan supplier?",
    a: "Indosourcing menonjolkan profil organisasi, verifikasi, serta indikator kepercayaan untuk membantu shortlist dan keputusan yang lebih confident.",
  },
  {
    q: "Apakah alur buyer dan supplier tercampur?",
    a: "Tidak. Workspace dipisahkan berbasis role agar akses dan aktivitas lebih fokus serta governance lebih rapi.",
  },
  {
    q: "Apakah Indosourcing cocok untuk UMKM?",
    a: "Ya. Platform ini membantu supplier dari berbagai skala untuk mengakses RFQ aktif dan mengirim quote dengan format yang jelas.",
  },
  {
    q: "Bagaimana cara mulai?",
    a: "Pilih peran Buyer atau Supplier, isi email kerja, lalu tim kami akan menghubungi untuk akses awal dan onboarding.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="outline">FAQ</Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Pertanyaan yang sering ditanyakan
          </h2>
          <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] md:text-base">
            Jawaban singkat untuk membantu kamu memahami alur, manfaat, dan langkah berikutnya.
          </p>
        </div>

        <Accordion className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} title={f.q}>
              {f.a}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

