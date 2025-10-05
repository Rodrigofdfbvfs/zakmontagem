import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-80 md:h-96">
            {aboutMeImage && (
              <Image
                src={aboutMeImage.imageUrl}
                alt={aboutMeImage.description}
                fill
                className="object-cover md:object-contain"
                data-ai-hint={aboutMeImage.imageHint}
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="text-center">
            <h2 className={cn("text-3xl md:text-4xl font-bold font-headline text-fill-image mb-6")}>Sobre Mim</h2>
            <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto">
              Olá! Sou Isaac, especialista em montagem de móveis com 7 anos de experiência. Minha paixão é transformar ambientes com precisão e agilidade. Já colaborei com grandes nomes como Magazine Luiza, Casas Bahia, MadeiraMadeira, Baianão móveis e Ubaratão, garantindo sempre um resultado impecável.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Link href="https://www.instagram.com/zakmontagem.ofc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:brightness-125 transition-all">
                <Instagram className="h-6 w-6" />
                <span className="font-medium text-sm text-fill-image">zakmontagem.ofc</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
