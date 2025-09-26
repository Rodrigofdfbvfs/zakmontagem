'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TexturedSection } from './textured-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WHATSAPP_LINK = 'https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para montagem de móveis.';

const ImgurEmbed = ({ id }: { id: string }) => {
  useEffect(() => {
    const scriptId = 'imgur-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//s.imgur.com/min/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <blockquote className="imgur-embed-pub" lang="en" data-id={id}>
      <a href={`https://imgur.com/${id}`}>View post on imgur.com</a>
    </blockquote>
  );
};

export default function SocialProofSection() {
  const cardBg = PlaceHolderImages.find(p => p.id === 'card-background');
  const images = ['ozLMR53', 'GvtSsiw', 'egzXfSu'];

  return (
    <TexturedSection className="bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
          Clientes satisfeitos, móveis montados com perfeição
        </h2>
        <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto">
          Confira alguns registros reais de trabalhos realizados, que comprovam a qualidade, a agilidade e o cuidado em cada montagem.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {images.map((id) => (
          <div key={id} className="w-full h-full min-h-[300px] md:min-h-[500px] overflow-hidden rounded-lg shadow-lg">
             <ImgurEmbed id={id} />
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          size="lg"
          asChild
          className="text-lg py-7 px-8 bg-card-image"
          style={{ '--card-bg-image': `url(${cardBg?.imageUrl})` } as React.CSSProperties}
        >
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Quero um orçamento agora
          </Link>
        </Button>
      </div>
    </TexturedSection>
  );
}
