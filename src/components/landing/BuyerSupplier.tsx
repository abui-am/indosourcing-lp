import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Container } from "./Container";

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
                  <li>Insight Credit Scoring AI untuk keputusan lebih confident.</li>
                  <li>Diskusi terpusat via chat per RFQ.</li>
                  <li>Rekomendasi Digital Advisor AI.</li>
                </ul>
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-medium">Mulai kebutuhan sourcing</div>
                  <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                    Masuk ke platform untuk membuat RFQ dan mencari supplier.
                  </div>
                  <div className="mt-4">
                    <Button 
                      className="w-full" 
                      onClick={() => window.location.href = 'https://indosourcing.vercel.app/'}
                    >
                      Daftar sebagai Buyer
                    </Button>
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
                  <li>Insight Smart Export Scoring untuk kesiapan ekspor.</li>
                  <li>Follow-up lebih cepat lewat offer request workflow.</li>
                  <li>Rekomendasi tindakan dari Digital Advisor AI.</li>
                </ul>
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-medium">Onboarding supplier</div>
                  <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                    Daftar untuk mulai mengirim penawaran ke buyer potensial.
                  </div>
                  <div className="mt-4">
                    <Button 
                      className="w-full" 
                      onClick={() => window.location.href = 'https://indosourcing.vercel.app/'}
                    >
                      Daftar sebagai Supplier
                    </Button>
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

