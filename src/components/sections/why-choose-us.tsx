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

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className="flex-shrink-0 mt-1"
  >
    <defs>
      <pattern
        id="image"
        patternUnits="userSpaceOnUse"
        width="24"
        height="24"
      >
        <image
          href="https://i.imgur.com/Mh0zntg.png"
          x="0"
          y="0"
          width="24"
          height="24"
        />
      </pattern>
    </defs>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="url(#image)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="url(#image)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export default function WhyChooseUsSection() {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-fill-image">Por que escolher meu serviço?</h2>
          <p className="mt-4 text-lg text-neutral-300 font-light">Compromisso com qualidade, segurança e praticidade em cada montagem.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-neutral-300 font-light mt-1">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
