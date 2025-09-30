import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="relative h-[280px] w-full max-w-[280px] md:w-1/3 mx-auto rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            {aboutMeImage && (
              <Image
                src={aboutMeImage.imageUrl}
                alt={aboutMeImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutMeImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">Sobre Mim</h2>
            <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto">
              Olá! Sou Isaque, o especialista por trás da Zaak Montagens. Com mais de 5 anos de dedicação, minha paixão é transformar ambientes através de um serviço de montagem que combina precisão, agilidade e respeito pelo seu espaço. Minha missão é entregar um resultado impecável, garantindo a durabilidade e a funcionalidade que você espera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
