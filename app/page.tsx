import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const PlatformsBar = dynamic(() => import("@/components/PlatformsBar"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const Footer = dynamic(() => import("@/components/Footer"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OS Digital",
  description:
    "סוכנות קידום ממומן לעסקים קטנים ובינוניים — קמפיינים בפייסבוק, גוגל, אינסטגרם וטיקטוק",
  url: "https://osdigitalagency.com",
  telephone: "+972584594488",
  areaServed: {
    "@type": "Country",
    name: "Israel",
  },
  serviceType: [
    "קידום ממומן",
    "פרסום בפייסבוק",
    "פרסום בגוגל",
    "פרסום באינסטגרם",
    "פרסום בטיקטוק",
  ],
  sameAs: ["https://instagram.com/os__digital"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <PlatformsBar />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
