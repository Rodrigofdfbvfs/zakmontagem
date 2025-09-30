import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
}

export const TexturedSection: FC<TexturedSectionProps> = ({ children, className }) => {
  const cardBg = PlaceHolderImages.find(p => p.id === 'card-background');

  return (
    <div className={cn('relative', className)}>
       {cardBg && (
        <Image
          src={cardBg.imageUrl}
          alt={cardBg.description}
          fill
          className="object-cover z-0 opacity-20"
          data-ai-hint={cardBg.imageHint}
        />
      )}
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};