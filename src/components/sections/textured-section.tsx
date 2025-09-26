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
  return (
    <div className={cn('relative bg-background', className)}>
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};
