import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WHATSAPP_LINK = 'https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para montagem de móveis.';

const steps = [
  { number: "1", title: "Solicite seu orçamento", description: "Envie fotos ou lista dos móveis pelo WhatsApp. Responderei rápido com valores e disponibilidade." },
  { number: "2", title: "Agendamento", description: "Definimos dia e horário que funcionem para você, com pontualidade garantida." },
  { number: "3", title: "Montagem segura", description: "Ferramentas profissionais, cuidado com seu imóvel e atenção aos detalhes." },
  { number: "4", title: "Conferência e garantia", description: "Alinhamento e nivelamento final. Se algo precisar de ajuste, retorno sem custo." },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Como funciona</h2>
          <p className="mt-4 text-lg text-neutral-300 font-light">Processo simples, rápido e sem dor de cabeça.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <Card key={step.number} className="bg-background border-primary text-center transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                </div>
                <CardTitle className="text-white font-bold text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300 font-light">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild className="text-lg py-7 px-8">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Pedir orçamento agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
