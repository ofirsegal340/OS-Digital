import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const PlatformsBar = dynamic(() => import("@/components/PlatformsBar"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const Footer = dynamic(() => import("@/components/Footer"));

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
