import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Download />
    </main>
  );
}
