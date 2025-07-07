import RicesSingle from '@/components/ricesSingle';
import ProductSection, { Product } from '@/components/product';

const rices: Product[] = [
  {
    id: 1,
    name: 'Basmati Rice',
    price: '$40 USD',
    quantity: '5kg',
    image: 'https://www.thedailymeal.com/img/gallery/types-of-rice-and-how-to-cook-them/l-intro-1676410300.jpg',
  },
  {
    id: 2,
    name: 'Jasmine Rice',
    price: '$35 USD',
    quantity: '5kg',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
  {
    id: 3,
    name: 'Sona Masoori',
    price: '$30 USD',
    quantity: '5kg',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
  {
    id: 4,
    name: 'Red Rice',
    price: '$45 USD',
    quantity: '5kg',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
];

export default function RicesSinglePage() {
  return (
    <>
      <ProductSection products={rices} category="Rice Varieties" />
      <RicesSingle />
    </>
  );
}
