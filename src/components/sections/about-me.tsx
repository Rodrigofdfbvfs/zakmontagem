import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TexturedSection } from "./textured-section";
import { cn } from '@/lib/utils';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <TexturedSection className="bg-black">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-6">Sobre Mim</h2>
          </div>
          <div className="relative h-[450px] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
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
        </div>
    </TexturedSection>
  );
}
