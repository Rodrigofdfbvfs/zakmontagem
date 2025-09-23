import { Cube } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Cube className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold tracking-tight text-white font-headline">
        Zaak Montagens
      </span>
    </div>
  );
}
