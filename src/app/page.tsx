import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesSection } from "@/components/ServicesSection";
import { FleetSection } from "@/components/FleetSection";
import { CoverageSection } from "@/components/CoverageSection";
import { ClientsSection } from "@/components/ClientsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ServicesSection />
        <FleetSection />
        <CoverageSection />
        <ClientsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
