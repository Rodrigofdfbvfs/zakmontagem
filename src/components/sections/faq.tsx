import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo leva a montagem de um móvel?",
    answer: "O tempo varia de acordo com o tipo de móvel, mas a maioria das montagens é concluída no mesmo dia, com rapidez e eficiência."
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
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-fill-image">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-none">
              <div className="bg-[url('https://i.imgur.com/Mh0zntg.png')] bg-cover bg-center border border-primary/50 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-bold text-black hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-light text-black/90 pb-4">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
