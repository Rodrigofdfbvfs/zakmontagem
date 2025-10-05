import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Move, Wrench } from "lucide-react";

const disassemblyServices = [
  {
    icon: <Move className="h-12 w-12 text-black" />,
    title: "Mudanças Residenciais e Comerciais",
    description: "Desmontamos seus móveis com cuidado e técnica para que cheguem intactos ao novo endereço. Embalamos as peças e parafusos para uma montagem perfeita depois."
  },
  {
    icon: <Wrench className="h-12 w-12 text-black" />,
    title: "Reformas de Ambientes",
    description: "Precisa tirar os móveis para pintar ou reformar o cômodo? Fazemos a desmontagem e, quando a obra acabar, montamos tudo de volta, deixando o ambiente renovado."
  },
];

export default function DisassemblySection() {
  return (
    <section className="bg-black py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-fill-image">
            Desmontagem para Mudanças e Reformas
          </h2>
          <p className="mt-4 text-lg text-neutral-300 font-light max-w-3xl mx-auto">
            Facilitamos sua mudança ou reforma com um serviço de desmontagem profissional e seguro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {disassemblyServices.map((service) => (
            <Card
              key={service.title}
              className="text-black rounded-lg shadow-lg text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="flex flex-col items-center gap-4">
                {service.icon}
                <CardTitle className="font-bold font-headline text-2xl text-black">{service.title}</CardTitle>
                <CardDescription className="text-black/90 font-light pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
