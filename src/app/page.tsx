import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import HowItWorksSection from '@/components/sections/how-it-works';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import GallerySection from '@/components/sections/gallery';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <GallerySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
