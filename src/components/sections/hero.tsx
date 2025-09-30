import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const WHATSAPP_LINK = 'https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para montagem de móveis.';

export default function HeroSection() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');
  const heroBgMobile = PlaceHolderImages.find(p => p.id === 'hero-background-mobile');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white overflow-hidden bg-background">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          priority
          className="object-cover fixed hidden md:block"
          data-ai-hint={heroBg.imageHint}
        />
      )}
      {heroBgMobile && (
        <Image
          src={heroBgMobile.imageUrl}
          alt={heroBgMobile.description}
          fill
          priority
          className="object-cover fixed md:hidden"
          data-ai-hint={heroBgMobile.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50 hidden md:block" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 
          className="text-2xl md:text-3xl font-bold tracking-wider drop-shadow-lg text-fill-image"
        >
          ZAAK MONTAGENS
        </h2>
        <h1 className="mt-2 text-4xl md:text-6xl font-bold font-headline leading-tight drop-shadow-lg">
          Seu móvel montado com <span className="text-fill-image">agilidade e experiência</span> em Salvador, Bahia.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light text-neutral-200 drop-shadow-md">
          Com anos de experiência e atenção aos mínimos detalhes, ofereço montagem e desmontagem de móveis com a união perfeita de cuidado e rapidez. Atendo residências e empresas, realizando ajustes em todos os tipos e marcas de móveis — do guarda-roupa ao painel de TV — para que você tenha tranquilidade, confiança e um resultado impecável, sem dor de cabeça.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            asChild
            variant="textured"
            className="text-lg font-bold py-7 px-8"
          >
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicite seu Orçamento Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
