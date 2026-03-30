import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformsBar from "@/components/PlatformsBar";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PlatformsBar />
        <ServicesSection />
        <StatsSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
