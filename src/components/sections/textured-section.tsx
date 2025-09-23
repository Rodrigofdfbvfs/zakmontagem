import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
  overlayOpacity?: string;
}

export const TexturedSection: FC<TexturedSectionProps> = ({ children, className, overlayOpacity = 'bg-black/80' }) => {
  const woodTexture = PlaceHolderImages.find(p => p.id === 'wood-texture');

  return (
    <div className={cn('relative', className)}>
      {woodTexture && (
        <Image
          src={woodTexture.imageUrl}
          alt="Textura de madeira escura"
          fill
          className="object-cover"
          data-ai-hint={woodTexture.imageHint}
        />
      )}
      <div className={cn('absolute inset-0', overlayOpacity)}></div>
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};
