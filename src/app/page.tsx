import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import HowItWorksSection from '@/components/sections/how-it-works';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import SocialProofSection from '@/components/sections/social-proof';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <Separator className="my-4 md:my-8 bg-border opacity-20" />
        <HowItWorksSection />
        <Separator className="my-4 md:my-8 bg-border opacity-20" />
        <WhyChooseUsSection />
        <Separator className="my-4 md:my-8 bg-border opacity-20" />
        <SocialProofSection />
        <Separator className="my-4 md:my-8 bg-border opacity-20" />
        <TestimonialsSection />
        <Separator className="my-4 md:my-8 bg-border opacity-20" />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
