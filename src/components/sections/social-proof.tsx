'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/557184808667?text=Olá! Gostaria de um orçamento para montagem de móveis.';

const images = [
  { id: 'ozLMR53', src: 'https://i.imgur.com/ozLMR53.jpeg', alt: 'Montagem de móvel 1' },
  { id: 'GvtSsiw', src: 'https://i.imgur.com/GvtSsiw.jpeg', alt: 'Montagem de móvel 2' },
  { id: 'egzXfSu', src: 'https://i.imgur.com/egzXfSu.jpeg', alt: 'Montagem de móvel 3' },
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
        <div className="flex justify-center items-center gap-4 py-8">
          {images.map((image) => (
            <div key={image.id} className="relative h-[280px] w-[200px] overflow-hidden rounded-lg shadow-lg">
               <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
               />
            </div>
          ))}
        </div>

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
