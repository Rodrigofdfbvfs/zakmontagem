import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import AboutMeSection from '@/components/sections/about-me';
import ServicesSection from '@/components/sections/services';
import HowItWorksSection from '@/components/sections/how-it-works';
import WarrantyBanner from '@/components/sections/warranty-banner';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import SocialProofSection from '@/components/sections/social-proof';

const SectionDivider = ({ className }: { className?: string }) => (
  <hr className={`w-full border-t ${className || 'border-border/20'}`} />
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <HowItWorksSection />
        <div className="w-full overflow-hidden">
          <WarrantyBanner />
        </div>
        <AboutMeSection />
        <SectionDivider className="border-primary/50" />
        <WhyChooseUsSection />
        <SectionDivider className="border-primary/50" />
        <SocialProofSection />
        <SectionDivider className="border-primary/50" />
        <TestimonialsSection />
        <SectionDivider />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
