import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TexturedSection } from "./textured-section";

const services = [
  { title: "Guarda-roupas", description: "Montagem e desmontagem de todos os modelos e marcas." },
  { title: "Painéis de TV e racks", description: "Fixação segura e alinhamento perfeito." },
  { title: "Camas e cômodas", description: "Montagem estável e duradoura." },
  { title: "Armários de cozinha", description: "Aéreos, balcões e planejados." },
  { title: "Escritório e home office", description: "Mesas, cadeiras, prateleiras e estações de trabalho." },
  { title: "Outros móveis", description: "Estantes, sapateiras, mesas de centro e muito mais." },
];

export default function ServicesSection() {
  return (
    <TexturedSection imageId="services-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
          Montamos todos os tipos de móveis com agilidade e cuidado
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="bg-card/80 border-primary border rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-primary font-bold font-headline text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-neutral-200 font-light pt-2">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </TexturedSection>
  );
}
