# Page Design Spec — Landing Page Indosourcing (Desktop-first)

## Global Styles
- Layout grid: max-width 1120–1200px, center container, padding horizontal 24px desktop / 16px mobile.
- Typography: base 16px; heading scale 48/36/24; line-height 1.2–1.6.
- Colors (shadcn-like): background netral terang, surface card putih, border abu tipis, teks utama gelap; aksen brand untuk tombol primer.
- Buttons: radius 10–12px, tinggi 40–44px, hover darken + subtle shadow; fokus dengan ring.
- Links: underline on hover, warna aksen.

## Meta Information
- Title: “Indosourcing — Sourcing Partner untuk Buyer & Supplier”
- Description: Ringkasan 1 kalimat tentang Indosourcing dan CTA untuk Buyer/Supplier.
- Open Graph: title/description sama, type website.

## Page Layout
- Sistem: kombinasi CSS Grid (untuk section cards) + Flexbox (navbar, CTA row).
- Pola: stacked sections dari atas ke bawah; tiap section punya heading + subcopy + konten (cards/steps).
- Responsif: desktop 2–3 kolom untuk card; tablet 2 kolom; mobile 1 kolom. Spacing section 72–96px desktop, 48–64px mobile.

## Page Structure & Components

### 1) Header / Navbar (sticky optional)
- Kiri: Logo Indosourcing.
- Tengah: menu anchor: Solusi, Proses, Buyer, Supplier, FAQ.
- Kanan: tombol CTA (primary) yang scroll ke pilihan Buyer/Supplier.
- State: border-bottom tipis; saat scroll bisa menambah background blur ringan.

### 2) Hero (Above the fold)
- Layout 2 kolom desktop:
  - Kiri: H1 kuat (1 baris), subcopy 1–2 baris.
  - Bawah subcopy: dua tombol sejajar:
    - Primary: “Saya Buyer”
    - Secondary/outline: “Saya Supplier”
  - Bullet singkat 3 poin (trust/value) di bawah CTA.
- Kanan: ilustrasi/visual placeholder (card mock / image) dengan border + shadow halus.

### 3) Value Proposition (Solusi)
- Heading + deskripsi singkat.
- Grid cards 3 kolom desktop (icon + judul + 2–3 baris copy).

### 4) Social Proof / Trust
- Baris logo partner placeholder atau trust badges.
- Panel highlight (callout) untuk pernyataan kualitas/proses (tanpa klaim angka spesifik jika belum ada).

### 5) Capability / Solution Overview
- Cards 2–3 kolom: kategori layanan/kapabilitas.
- Tiap card: judul, ringkasan, 3 bullet.

### 6) How It Works (Proses)
- Stepper 3–5 langkah (angka besar + judul + deskripsi 1 kalimat).
- Alternatif desktop: timeline horizontal; mobile: vertikal.

### 7) Section Buyer
- Anchor id: #buyer.
- Layout 2 kolom: copy + list manfaat buyer (kiri) dan panel CTA (kanan).
- Panel CTA: judul “Untuk Buyer”, ringkasan 1 kalimat, tombol primary “Mulai kebutuhan sourcing” (aksi lanjutan buyer), teks kecil penjelasan next step.

### 8) Section Supplier
- Anchor id: #supplier.
- Layout mirip buyer untuk konsistensi.
- Panel CTA: tombol primary “Daftar sebagai supplier” (aksi lanjutan supplier), teks kecil penjelasan next step.

### 9) FAQ
- Accordion shadcn-like (single open / multiple open ditentukan saat implementasi).
- 6–10 item, copy ringkas, fokus ke pertanyaan inti.

### 10) Footer
- Kolom: brand + deskripsi singkat; navigasi anchor; kontak & legal.
- Bottom bar: copyright.

## Interaction & Motion
- Smooth scroll untuk anchor.
- Hover states konsisten (card shadow naik sedikit, border accent tipis).
- Transisi 150–200ms ease-out.
