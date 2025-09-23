'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  { name: "Ana P.", text: "“Serviço rápido e caprichado. Meu guarda-roupa ficou perfeito, sem falhas.”" },
  { name: "Carlos R.", text: "“Montagem do escritório sem bagunça, no prazo e com muito cuidado.”" },
  { name: "Júlia M.", text: "“Profissional atencioso, explicou tudo e deixou os móveis alinhados certinho.”" },
  { name: "Rogério L.", text: "“Desmontou e montou meus móveis na mudança sem nenhum problema. Recomendo!”" },
  { name: "Mariana F.", text: "“Ótimo atendimento, qualidade e preço justo. Voltarei a contratar.”" },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
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
                  <Card className="bg-background border-primary h-full flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="text-primary font-bold">{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-neutral-200 font-light italic">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted" />
        </Carousel>
      </div>
    </section>
  );
}
