import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Container } from "./Container";

function LeadForm({
  role,
  cta,
}: {
  role: "buyer" | "supplier";
  cta: string;
}) {
  const [status, setStatus] = React.useState<"idle" | "sent">("idle");
  const [email, setEmail] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setStatus("sent");
      }}
      className="space-y-3"
    >
      <div className="space-y-1">
        <div className="text-xs font-medium">Email kerja</div>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          type="email"
          required
          placeholder="nama@perusahaan.com"
        />
      </div>
      <Button type="submit" className="w-full">
        {cta}
      </Button>
      {status === "sent" ? (
        <div className="text-xs text-[hsl(var(--muted-foreground))]">
          Terima kasih. Kami akan menghubungi kamu terkait onboarding {role}.
        </div>
      ) : (
        <div className="text-xs text-[hsl(var(--muted-foreground))]">
          Dengan mengirim email, kamu setuju dihubungi untuk demo/onboarding.
        </div>
      )}
    </form>
  );
}

export function BuyerSupplier() {
  return (
    <section id="get-started" className="scroll-mt-24 py-14 md:py-20">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          <div id="buyer" className="scroll-mt-24">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Untuk Buyer</CardTitle>
                <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                  Dapatkan penawaran relevan lebih cepat dengan tracking status yang jelas.
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <li>Bandingkan penawaran dengan format yang konsisten.</li>
                  <li>Ringkasan status quote untuk mempercepat keputusan.</li>
                  <li>Diskusi terpusat via chat transaksi.</li>
                  <li>Trust signal organisasi untuk shortlist yang lebih confident.</li>
                </ul>
                <div>
                  <div className="text-sm font-medium">Mulai kebutuhan sourcing</div>
                  <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                    Kirim email untuk akses awal dan panduan pembuatan RFQ.
                  </div>
                  <div className="mt-3">
                    <LeadForm role="buyer" cta="Daftar sebagai Buyer" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div id="supplier" className="scroll-mt-24">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Untuk Supplier</CardTitle>
                <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                  Akses RFQ aktif, submit quote rapi, dan tingkatkan peluang deal.
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <li>Lihat RFQ yang relevan dengan kapabilitas bisnis kamu.</li>
                  <li>Submit quote dengan detail yang jelas dan mudah ditinjau.</li>
                  <li>Follow-up lebih cepat lewat offer request workflow.</li>
                  <li>Bangun kepercayaan lewat profil dan verifikasi organisasi.</li>
                </ul>
                <div>
                  <div className="text-sm font-medium">Onboarding supplier</div>
                  <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                    Kirim email untuk aktivasi akun dan verifikasi profil.
                  </div>
                  <div className="mt-3">
                    <LeadForm role="supplier" cta="Daftar sebagai Supplier" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-4 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-medium">Butuh demo untuk tim?</div>
            <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
              Cocok untuk procurement, pemilik bisnis, produsen, distributor, dan UMKM.
            </div>
          </div>
          <Button href="#faq" variant="outline">
            Lihat FAQ
          </Button>
        </div>
      </Container>
    </section>
  );
}

