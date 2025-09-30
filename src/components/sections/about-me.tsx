import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TexturedSection } from "./textured-section";
import { cn } from '@/lib/utils';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <TexturedSection className="bg-black">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="relative h-[450px] w-full max-w-sm md:w-1/2 mx-auto rounded-lg overflow-hidden shadow-lg flex-shrink-0">
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
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-6">Sobre Mim</h2>
            <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto md:mx-0">
              Olá! Sou Isaque, montador de móveis com mais de 5 anos de experiência em Salvador. Minha missão é oferecer um serviço que une agilidade e perfeição, garantindo que seus móveis fiquem exatamente como você imaginou.
            </p>
          </div>
        </div>
    </TexturedSection>
  );
}
