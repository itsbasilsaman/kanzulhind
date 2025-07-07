import ClothsSingle from '@/components/clothsSingle';
import ProductSection, { Product } from '@/components/product';

const cloths: Product[] = [
  {
    id: 1,
    name: 'Banarasi Silk Saree',
    price: '$350 USD',
    quantity: 'Single',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg',
  },
  {
    id: 2,
    name: 'Handcrafted Cotton Kurta',
    price: '$120 USD',
    quantity: 'Single',
    image: 'https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg',
  },
  {
    id: 3,
    name: 'Kanjeevaram Silk Saree',
    price: '$500 USD',
    quantity: 'Single',
    image: 'https://images.pexels.com/photos/2884868/pexels-photo-2884868.jpeg',
  },
  {
    id: 4,
    name: 'Traditional Lehenga',
    price: '$420 USD',
    quantity: 'Single',
    image: 'https://images.pexels.com/photos/2884870/pexels-photo-2884870.jpeg',
  },
];

export default function ClothsSinglePage() {
  return (
    <>
      <ProductSection products={cloths} category="Textile & Garments" />
      <ClothsSingle />
    </>
  );
}
