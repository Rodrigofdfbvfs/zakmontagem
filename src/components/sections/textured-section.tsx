import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
}

export const TexturedSection: FC<TexturedSectionProps> = ({ children, className }) => {
  return (
    <div className={cn('relative bg-background', className)}>
      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        {children}
      </div>
    </div>
  );
};
