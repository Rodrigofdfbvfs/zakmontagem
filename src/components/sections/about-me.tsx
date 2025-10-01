import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative h-[240px] w-full max-w-[240px] md:w-1/4 mx-auto rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            {aboutMeImage && (
              <Image
                src={aboutMeImage.imageUrl}
                alt={aboutMeImage.description}
                width={240}
                height={240}
                className="object-cover"
                data-ai-hint={aboutMeImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:w-3/4">
            <h2 className={cn("text-3xl md:text-4xl font-bold font-headline text-fill-image mb-6")}>Sobre Mim</h2>
            <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto">
              Olá! Sou Isaque, especialista em montagem de móveis com 7 anos de experiência. Minha paixão é transformar ambientes com precisão e agilidade. Já colaborei com grandes nomes como Magazine Luiza, Casas Bahia, MadeiraMadeira, Lojas Baianão e Insinuante, garantindo sempre um resultado impecável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
