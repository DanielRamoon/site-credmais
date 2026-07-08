import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Advantages } from "@/components/landing/Advantages";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Simulation } from "@/components/landing/Simulation";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <TargetAudience />
        <HowItWorks />
        <Simulation />
        <Testimonials />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
