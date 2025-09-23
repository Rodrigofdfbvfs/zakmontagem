import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TexturedSection } from "./textured-section";

const galleryItems = [
  { imageId: 'gallery-1', name: 'Apartamento R&J', description: 'Quarto de casal completo.', hint: 'wardrobe bedroom' },
  { imageId: 'gallery-2', name: 'Escritório Hub', description: 'Estações de trabalho modernas.', hint: 'home office' },
  { imageId: 'gallery-3', name: 'Cozinha M&F', description: 'Armários planejados.', hint: 'kitchen cabinets' },
  { imageId: 'gallery-4', name: 'Sala de Estar', description: 'Estante e painel de TV.', hint: 'bookshelf livingroom' },
  { imageId: 'gallery-5', name: 'Quarto Infantil', description: 'Cama e cômoda com segurança.', hint: 'bed bedroom' },
  { imageId: 'gallery-6', name: 'Home Theater', description: 'Rack e painel personalizados.', hint: 'tv stand' },
];

export default function GallerySection() {
  return (
    <TexturedSection overlayOpacity="bg-black/90">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Resultados que falam por si</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => {
          const image = PlaceHolderImages.find(p => p.id === item.imageId);
          if (!image) return null;
          return (
            <div key={item.name} className="bg-black/50 border border-primary rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={image.imageUrl}
                  alt={item.description}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint={item.hint}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                <p className="text-neutral-200 font-light mt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </TexturedSection>
  );
}
