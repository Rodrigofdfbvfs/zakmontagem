import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TexturedSection } from "./textured-section";
import Image from "next/image";

const faqs = [
  {
    question: "Quanto tempo leva a montagem de um móvel?",
    answer: "O tempo varia de acordo com o tipo de móvel, mas a maioria das montagens é concluída no mesmo dia, com rapidez e eficiência."
  },
  {
    question: "Vocês desmontam e montam móveis em mudanças?",
    answer: "Sim. Faço desmontagem e montagem no novo local, garantindo a integridade do seu móvel durante o processo."
  },
  {
    question: "Atendem todos os tipos de móveis e marcas?",
    answer: "Sim. Tenho experiência em montagem de móveis residenciais e corporativos, de todas as marcas e modelos, dos mais simples aos mais complexos."
  },
  {
    question: "E se algum móvel precisar de ajustes?",
    answer: "Faço todos os ajustes de alinhamento e nivelamento no final da montagem. Caso algo precise ser revisado posteriormente, ofereço garantia e retorno sem custo adicional."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento pode ser feito ao final do serviço em dinheiro, PIX ou cartão de crédito/débito, de forma prática e segura."
  }
];

export default function FaqSection() {
  const cardBg = PlaceHolderImages.find(p => p.id === 'card-background');

  return (
    <TexturedSection className="bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-none">
              <div className="bg-card border rounded-lg px-6 relative overflow-hidden">
                {cardBg && (
                  <Image
                    src={cardBg.imageUrl}
                    alt={cardBg.description}
                    fill
                    className="object-cover z-0"
                    data-ai-hint={cardBg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20">
                  <AccordionTrigger className="text-left text-lg font-bold text-card-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-light text-card-foreground/90 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </TexturedSection>
  );
}
