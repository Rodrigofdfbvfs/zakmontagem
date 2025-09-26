import { Award, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TexturedSection } from "./textured-section";

const benefits = [
  {
    icon: <Clock className="w-10 h-10 text-primary-foreground" />,
    title: "Pontualidade real",
    description: "Chego no horário combinado, sem atrasos.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary-foreground" />,
    title: "Cuidado com seu espaço",
    description: "Protejo piso e ambiente, deixando tudo organizado ao final.",
  },
  {
    icon: <Award className="w-10 h-10 text-primary-foreground" />,
    title: "Experiência comprovada",
    description: "Anos de prática com diferentes marcas e modelos de móveis.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary-foreground" />,
    title: "Garantia do serviço",
    description: "Se algo não ficar perfeito, retorno sem custo para ajustar.",
  },
];

export default function WhyChooseUsSection() {
  const cardBg = PlaceHolderImages.find(p => p.id === 'card-background');
  return (
    <TexturedSection>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Por que escolher meu serviço?</h2>
        <p className="mt-4 text-lg text-neutral-300 font-light">Compromisso com qualidade, segurança e praticidade em cada montagem.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-card-image border-0 rounded-lg text-center p-6 flex flex-col items-center shadow-lg hover:shadow-yellow-300/20 transition-all duration-300 transform hover:-translate-y-1"
            style={{ '--card-bg-image': `url(${cardBg?.imageUrl})` } as React.CSSProperties}
          >
            {benefit.icon}
            <h3 className="text-black font-bold text-xl mt-4">{benefit.title}</h3>
            <p className="text-primary-foreground/90 font-light mt-2 flex-grow">{benefit.description}</p>
          </div>
        ))}
      </div>
    </TexturedSection>
  );
}
