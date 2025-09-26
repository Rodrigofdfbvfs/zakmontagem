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
  const bgImage = imageId ? PlaceHolderImages.find(p => p.id === imageId) : undefined;

  return (
    <div className={cn('relative bg-background', className)}>
      {bgImage && (
        <>
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover"
            data-ai-hint={bgImage.imageHint}
          />
        </>
      )}
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};
