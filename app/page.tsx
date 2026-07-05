import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const PlatformsBar = dynamic(() => import("@/components/PlatformsBar"));
const PainSection = dynamic(() => import("@/components/PainSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const OfferSection = dynamic(() => import("@/components/OfferSection"));
const FitCheckCompact = dynamic(() => import("@/components/FitCheckCompact"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const ObjectionSection = dynamic(() => import("@/components/ObjectionSection"));
const QualificationSection = dynamic(
  () => import("@/components/QualificationSection")
);
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
    "סוכנות שיווק דיגיטלי לעסקים קטנים ובינוניים — קידום ממומן, ניהול סושיאל, בניית אתרים ודפי נחיתה ושיווק 360",
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
    "ניהול סושיאל",
    "בניית אתרים ודפי נחיתה",
    "שיווק 360",
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
        <PainSection />
        <ServicesSection />
        <div className="section-divider" />
        <div className="section-elevated">
          <OfferSection />
          <div id="fit-check-1" className="pb-16 md:pb-24">
            <FitCheckCompact location="after_offer" />
          </div>
        </div>
        <div className="section-divider" />
        <ProcessSection />
        <div className="section-divider" />
        <ObjectionSection />
        <QualificationSection />
        <div className="section-divider" />
        <div className="section-elevated">
          <AboutSection />
        </div>
        <div className="section-divider" />
        <StatsSection />
        <div className="section-divider" />
        <FAQSection />
        <div className="section-divider" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
