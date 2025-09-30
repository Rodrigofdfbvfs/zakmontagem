import { CheckCircle2 } from "lucide-react";
import { TexturedSection } from "./textured-section";

const benefits = [
  {
    title: "Pontualidade real",
    description: "Chego no horário combinado, sem atrasos.",
  },
  {
    title: "Cuidado com seu espaço",
    description: "Protejo piso e ambiente, deixando tudo organizado ao final.",
  },
  {
    title: "Experiência comprovada",
    description: "Anos de prática com diferentes marcas e modelos de móveis.",
  },
  {
    title: "Garantia do serviço",
    description: "Se algo não ficar perfeito, retorno sem custo para ajustar.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <TexturedSection className="bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Por que escolher meu serviço?</h2>
        <p className="mt-4 text-lg text-neutral-300 font-light">Compromisso com qualidade, segurança e praticidade em cada montagem.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                <p className="text-neutral-300 font-light mt-1">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TexturedSection>
  );
}
