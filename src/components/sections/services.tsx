import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { title: "Móveis convencionais", description: "Montagem de todos os tipos de móveis residenciais e de escritório." },
  { title: "Mudanças", description: "Desmontagem e montagem dos seus móveis no novo endereço com segurança." },
  { title: "Instalação de Suporte de TV", description: "Fixação de TVs em painéis e paredes com total segurança." },
  { title: "Instalação de Cortinas", description: "Instalação de todos os tipos de cortinas e persianas." },
  { title: "Ajuste e Reforço", description: "Reparos, ajustes e reforço para garantir a durabilidade dos seus móveis." },
  { title: "Outros Serviços", description: "Instalação de prateleiras, varais e outros pequenos reparos." },
];

export default function ServicesSection() {
  return (
    <section className="bg-black py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-fill-image">
            Serviços completos para sua casa e escritório
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card text-black rounded-lg shadow-lg text-center sm:text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="font-bold font-headline text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-black/90 font-light pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
