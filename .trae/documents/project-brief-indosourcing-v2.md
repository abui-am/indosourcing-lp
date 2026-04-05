# Project Brief: IndoSourcing - Managed B2B Export Marketplace

## 1. Context & Vision
IndoSourcing adalah platform **Managed B2B Marketplace** yang dirancang untuk mengakselerasi ekspor UMKM Indonesia ke pasar global. Berbeda dengan marketplace pasif (seperti Alibaba), IndoSourcing bertindak sebagai **End-to-End Orchestrator** yang menggabungkan:
- Kecanggihan AI (sebagai Co-Pilot)
- Transparansi Blockchain (sebagai Trust Layer)
- Layanan konsultasi manusia (Sourcing Agent)

Tujuannya adalah untuk menjamin kualitas dan keamanan transaksi. Platform ini ditujukan untuk **Hackathon Bank Indonesia (DIGDAYA) 2026**, sehingga sangat selaras dengan agenda:
- Digitalisasi
- Inklusi Keuangan
- Stabilitas Makro (LCS/Local Currency Settlement)

---

## 2. Dual-Sided Value Proposition
AI harus melayani dua entitas utama dengan kebutuhan yang berbeda:

### A. For Global Buyers (The Sourcing Co-Pilot)
- **Procurement Intelligence:** Membantu buyer menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis (Tech Pack) yang siap diproduksi.
- **Supplier Shortlisting:** Melakukan kurasi otomatis UMKM Indonesia dalam 48 jam berdasarkan data performa riil (On-time rate, Defect rate).
- **Supply Chain Tools:** Kalkulator cerdas untuk *Lead Time*, *Reorder Point*, dan *Safety Stock* guna optimasi inventaris di negara tujuan.
- **Managed Services:** Akses ke *Sourcing Agent* dan *OEM Procurement Consulting* untuk proyek Private Label skala besar.

### B. For Indonesian SMEs/Sellers (The Export Advisor)
- **Export Readiness Scoring:** Audit digital terhadap legalitas (NIB), sertifikasi (Halal/ISO), dan kapasitas produksi.
- **Automated Documentation:** Pembuatan otomatis dokumen ekspor (Invoice, Packing List, Certificate of Origin).
- **Negotiation Advisor:** Panduan strategi negosiasi dan kalkulasi HPP ekspor agar kompetitif namun tetap profitabel.
- **Smart Financing:** Akses modal kerja tanpa agunan fisik melalui integrasi skor AI dan data transaksi ke perbankan (Himbara/BPD).

---

## 3. Technical Architecture (The 4 Pillars)

### Pilar 1: AI Engine (The Brain)
- **Tech:** NLP (Natural Language Processing) untuk pemetaan RFQ ke HS Code.
- **Function:** Otomasi matchmaking, kalkulasi logistik, dan asisten konsultasi 24/7.

### Pilar 2: Blockchain Infrastructure (The Trust Layer)
- **Tech:** Milestone-based Smart Contracts (Anchor data ke Solana/Lisk).
- **Function:** Mencatat setiap tahap transaksi (DP, Produksi, QC, Shipping) secara immutable. Bertindak sebagai Escrow yang aman bagi buyer dan seller.

### Pilar 3: Managed Services (The Human-in-the-loop)
- **Function:** Tim ahli lapangan untuk audit fisik pabrik, Quality Control (QC) tahap akhir, dan negosiasi kontrak strategis. Ini adalah pembeda utama dari marketplace murni.

### Pilar 4: Financial Integration (The Liquidity Bridge)
- **Function:** Mengonversi data Blockchain dan skor AI menjadi *Alternative Credit Score*. Integrasi dengan API Bank Indonesia untuk mendukung **Local Currency Settlement (LCS)**—transaksi tanpa ketergantungan USD.

---

## 4. Business Model & Sustainability
- **Transaction Fee:** Komisi dari nilai transaksi sukses.
- **Consulting/Sourcing Fee:** Layanan ahli untuk proyek kustomisasi (OEM).
- **Financing Referral Fee:** Pendapatan dari mitra perbankan atas penyaluran kredit yang tervalidasi.
- **SaaS Premium Tools:** Langganan alat kalkulator rantai pasok bagi buyer global.

---

## 5. Strategic Roadmap
1. **Phase 1 (AI & Discovery):** Peluncuran AI Advisor, alat kalkulasi stok, dan kurasi database UMKM.
2. **Phase 2 (Trust & Management):** Aktivasi pelacakan produksi berbasis Blockchain dan layanan Sourcing Agent fisik.
3. **Phase 3 (Financial Inclusion):** Integrasi penuh LCS Bank Indonesia dan penyaluran Pre-export Financing.
4. **Phase 4 (Scale & Aggregation):** *Demand Aggregation* untuk menggabungkan pesanan kecil dari berbagai buyer global guna efisiensi biaya logistik kontainer.

---

## 6. Specific Instructions for AI Task
- **Tone:** Profesional, Visionary, Modern (Web 2.5), namun tetap grounded (peduli pada UMKM).
- **Key Focus:** Tekankan pada *Integritas Data* dan *Keamanan Transaksi*.
- **Product Categories (Indonesia Specific):** Kopi, Furniture, Tekstil/Garment, Produk Organik, dan Kerajinan Tangan.

---

## 7. Instruksi Tambahan (AI Prompts Reference)

Gunakan instruksi di bawah ini ketika mendelegasikan tugas lanjutan ke AI (Coding/Design):

> **Prompt untuk AI Koding (Backend/Database):**
> "Based on the 4 pillars above, please generate the database schema for 'transactions' and 'milestones' that would be anchored to the blockchain."

> **Prompt untuk AI Desain (UI/UX):**
> "Create a UI/UX wireframe for the Global Buyer dashboard featuring the 'Lead Time Calculator' and 'Factory Performance Score'."
