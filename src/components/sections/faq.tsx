import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TexturedSection } from "./textured-section";

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
    <TexturedSection imageId="faq-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-primary border-0 rounded-lg px-6 text-primary-foreground">
              <AccordionTrigger className="text-left text-lg font-bold text-primary-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-light text-primary-foreground/90 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </TexturedSection>
  );
}
