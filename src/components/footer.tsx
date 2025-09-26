import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <footer className="relative py-8 overflow-hidden bg-background">
       {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover"
          data-ai-hint={heroBg.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4 text-center text-sm text-muted-foreground">
        © 2025 Zaak montagens – Todos os direitos reservados.
      </div>
    </footer>
  );
}
