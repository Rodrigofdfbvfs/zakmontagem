import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WHATSAPP_LINK = 'https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para montagem de móveis.';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-white -mt-20 pt-20">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wider drop-shadow-lg">
          ZAAK MONTAGENS
        </h2>
        <h1 className="mt-2 text-4xl md:text-6xl font-bold font-headline leading-tight drop-shadow-lg">
          Seu móvel montado com <span className="text-primary">agilidade e experiência</span> em Salvador, Bahia.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light text-neutral-200 drop-shadow-md">
          Com anos de experiência e atenção aos mínimos detalhes, ofereço montagem e desmontagem de móveis com a união perfeita de cuidado e rapidez. Atendo residências e empresas, realizando ajustes em todos os tipos e marcas de móveis — do guarda-roupa ao painel de TV — para que você tenha tranquilidade, confiança e um resultado impecável, sem dor de cabeça.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="text-lg py-7 px-8">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicite seu Orçamento Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
