import { BuyerSupplier } from "@/components/landing/BuyerSupplier";
import { CoreFeatures } from "@/components/landing/CoreFeatures";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navbar } from "@/components/landing/Navbar";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { TrustSecurity } from "@/components/landing/TrustSecurity";
import { AIIntelligence } from "@/components/landing/AIIntelligence";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <CoreFeatures />
        <HowItWorks />
        <BuyerSupplier />
        <AIIntelligence />
        <TrustSecurity />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
