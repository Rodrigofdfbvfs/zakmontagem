import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const WarrantyBanner = ({ className }: { className?: string }) => {
  const textContent = (
    <div className="flex items-center mx-6">
      <ShieldCheck className="h-5 w-5 mr-3 flex-shrink-0" />
      <span className="text-lg font-bold tracking-wider uppercase">GARANTIA DE 3 MESES</span>
    </div>
  );

  return (
    <section className={cn("bg-primary text-primary-foreground py-3 overflow-hidden", className)}>
      <div className="flex animate-marquee">
        <div className="flex min-w-full flex-shrink-0 items-center justify-around">
          {textContent}
          {textContent}
          {textContent}
          {textContent}
          {textContent}
          {textContent}
        </div>
        <div className="flex min-w-full flex-shrink-0 items-center justify-around">
          {textContent}
          {textContent}
          {textContent}
          {textContent}
          {textContent}
          {textContent}
        </div>
      </div>
    </section>
  );
};

export default WarrantyBanner;
