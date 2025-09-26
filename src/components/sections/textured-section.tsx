import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
  imageId?: string;
}

export const TexturedSection: FC<TexturedSectionProps> = ({ children, className, imageId }) => {
  const sectionBg = imageId ? PlaceHolderImages.find(p => p.id === imageId) : null;
  
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
      {imageId && <div className="absolute inset-0 bg-black/60" />}
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};
