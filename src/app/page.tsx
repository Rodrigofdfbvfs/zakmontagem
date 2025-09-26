import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import HowItWorksSection from '@/components/sections/how-it-works';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import SocialProofSection from '@/components/sections/social-proof';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <SocialProofSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
