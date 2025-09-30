import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutMeSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-20 sm:py-28">
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
            <p className="mt-4 text-xl text-neutral-300 font-light max-w-3xl mx-auto md:mx-0">
              Olá! Sou Isaque, o especialista por trás da Zaak Montagens. Com mais de 5 anos de dedicação ao universo dos móveis em Salvador, minha paixão é transformar ambientes através de um serviço de montagem que combina precisão técnica, agilidade e um profundo respeito pelo seu espaço. Ao longo da minha carreira, já trabalhei com centenas de projetos, desde a montagem de um simples criado-mudo até a instalação completa de cozinhas planejadas e complexos guarda-roupas. Minha missão vai além de apenas montar: eu me comprometo a entregar um resultado impecável, com cada peça ajustada à perfeição, garantindo a durabilidade e a funcionalidade que você espera. Conte comigo para uma experiência tranquila, profissional e com a garantia de um trabalho bem-feito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
