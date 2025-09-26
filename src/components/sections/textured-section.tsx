import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
  useImage?: boolean;
}

export const TexturedSection: FC<TexturedSectionProps> = ({ children, className, useImage }) => {
  const sectionBg = useImage ? PlaceHolderImages.find(p => p.id === 'wood-texture') : null;
  return (
    <div className={cn('relative bg-background', className)}>
      {sectionBg && (
        <Image
          src={sectionBg.imageUrl}
          alt={sectionBg.description}
          fill
          className="object-cover"
          data-ai-hint={sectionBg.imageHint}
        />
      )}
      {useImage && <div className="absolute inset-0 bg-black/60" />}
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};
