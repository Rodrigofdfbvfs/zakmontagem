'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const WHATSAPP_LINK = 'https://wa.me/5571984808667';

const images = [
  { id: 'ozLMR53', src: 'https://i.imgur.com/ozLMR53.jpeg', alt: 'Montagem de móvel 1' },
  { id: 'GvtSsiw', src: 'https://i.imgur.com/GvtSsiw.jpeg', alt: 'Montagem de móvel 2' },
  { id: 'cMxRW2e', src: 'https://i.imgur.com/cMxRW2e.jpeg', alt: 'Montagem de móvel 4' },
  { id: 'D86NIlw', src: 'https://i.imgur.com/D86NIlw.jpeg', alt: 'Montagem de móvel 5' },
  { id: '9hFH90D', src: 'https://i.imgur.com/9hFH90D.jpeg', alt: 'Montagem de móvel 6' },
  { id: 'sp1SoTD', src: 'https://i.imgur.com/sp1SoTD.jpeg', alt: 'Montagem de móvel 7' },
  { id: 'vHkMCiy', src: 'https://i.imgur.com/vHkMCiy.jpeg', alt: 'Montagem de móvel 8' },
  { id: 'BKm6RuQ', src: 'https://i.imgur.com/BKm6RuQ.jpeg', alt: 'Montagem de móvel 9' },
  { id: 'wxarxZg', src: 'https://i.imgur.com/wxarxZg.jpeg', alt: 'Montagem de móvel 10' },
  { id: 'GgNdXNk', src: 'https://i.imgur.com/GgNdXNk.jpeg', alt: 'Montagem de móvel 11' },
];

export default function SocialProofSection() {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-fill-image">
            Clientes satisfeitos, móveis montados com perfeição
          </h2>
          <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto">
            Confira alguns registros reais de trabalhos realizados, que comprovam a qualidade, a agilidade e o cuidado em cada montagem.
          </p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                <div className="p-1">
                  <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg shadow-lg">
                    <Image 
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted hidden md:flex" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            variant="textured"
            className="text-lg font-bold py-7 px-8"
          >
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Quero um orçamento agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
