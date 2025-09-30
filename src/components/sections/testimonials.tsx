'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TexturedSection } from "./textured-section";

const testimonials = [
  { name: "Ana P.", text: "“Serviço rápido e caprichado. Meu guarda-roupa ficou perfeito, sem falhas.”" },
  { name: "Carlos R.", text: "“Montagem do escritório sem bagunça, no prazo e com muito cuidado.”" },
  { name: "Júlia M.", text: "“Profissional atencioso, explicou tudo e deixou os móveis alinhados certinho.”" },
  { name: "Rogério L.", text: "“Desmontou e montou meus móveis na mudança sem nenhum problema. Recomendo!”" },
  { name: "Mariana F.", text: "“Ótimo atendimento, qualidade e preço justo. Voltarei a contratar.”" },
];

export default function TestimonialsSection() {
  const cardBg = PlaceHolderImages.find(p => p.id === 'card-background');
  return (
    <TexturedSection className="bg-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">O que meus clientes dizem</h2>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card
                    className="bg-black text-white h-full flex flex-col justify-center border-neutral-800"
                  >
                    <CardHeader>
                      <CardTitle className="font-bold">{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-white/90 font-light italic">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted" />
        </Carousel>
    </TexturedSection>
  );
}
