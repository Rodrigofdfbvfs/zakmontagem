import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <section className="bg-black py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-fill-image">
            Montamos todos os tipos de móveis com agilidade e cuidado
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card text-black rounded-lg shadow-lg text-center sm:text-left"
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
