'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const WHATSAPP_LINK = 'https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para montagem de móveis.';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" aria-label="Página inicial da Zaak Montagens">
          <Logo />
        </Link>
        <Button asChild>
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Pedir Orçamento
          </Link>
        </Button>
      </div>
    </header>
  );
}
