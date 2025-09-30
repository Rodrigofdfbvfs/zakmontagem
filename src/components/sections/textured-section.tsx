import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
  bgImage?: ImagePlaceholder;
  showOverlay?: boolean;
}

export const TexturedSection: FC<TexturedSectionProps> = ({ children, className, bgImage, showOverlay = true }) => {
  const defaultBg = PlaceHolderImages.find(p => p.id === 'card-background');
  const image = bgImage || defaultBg;

  return (
    <div className={cn('relative', className)}>
       {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover z-0 opacity-20"
          data-ai-hint={image.imageHint}
        />
      )}
      {showOverlay && <div className="absolute inset-0 bg-black/50 z-10" />}
      <div className="relative container mx-auto px-4 py-20 sm:py-28 z-20">
        {children}
      </div>
    </div>
  );
};
