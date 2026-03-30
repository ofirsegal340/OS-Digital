import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformsBar from "@/components/PlatformsBar";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
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
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
