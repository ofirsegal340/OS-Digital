import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const PlatformsBar = dynamic(() => import("@/components/PlatformsBar"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const OfferSection = dynamic(() => import("@/components/OfferSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
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
      <div className="aurora-bg pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <PlatformsBar />
        <ServicesSection />
        <div className="section-divider" />
        <div className="section-elevated">
          <OfferSection />
        </div>
        <div className="section-divider" />
        <ProcessSection />
        <div className="section-divider" />
        <StatsSection />
        <div className="section-divider" />
        <div className="section-elevated">
          <AboutSection />
        </div>
        <div className="section-divider" />
        <FAQSection />
        <div className="section-divider" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
