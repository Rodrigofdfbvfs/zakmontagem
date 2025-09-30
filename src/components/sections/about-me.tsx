import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TexturedSection } from "./textured-section";
import { cn } from '@/lib/utils';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <TexturedSection className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-6">Sobre Mim</h2>
            <p className="text-lg text-neutral-300 font-light mb-4">
              Olá, sou o Isaque, mais conhecido como Zaak, o especialista por trás da Zaak Montagens. Com mais de 10 anos de experiência, transformo a complexa tarefa de montar móveis em uma experiência tranquila e satisfatória para você.
            </p>
            <p className="text-lg text-neutral-300 font-light mb-4">
              Para mim, cada parafuso apertado e cada porta alinhada é um compromisso com a qualidade. Sou apaixonado por marcenaria e design, e essa paixão se reflete no cuidado que tenho com cada peça, seja ela um simples criado-mudo ou um complexo armário planejado.
            </p>
            <p className="text-lg text-neutral-300 font-light">
              Meu objetivo é garantir que seu espaço fique exatamente como você sonhou, com móveis montados de forma segura, funcional e esteticamente perfeita.
            </p>
          </div>
        </div>
    </TexturedSection>
  );
}
