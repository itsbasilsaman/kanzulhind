import SpicesSingle from '@/components/spicesSingle';
import ProductSection, { Product } from '@/components/product';

const spices: Product[] = [
  {
    id: 1,
    name: 'Cardamom',
    price: '$25 USD',
    quantity: '250g',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Turmeric',
    price: '$10 USD',
    quantity: '500g',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
  {
    id: 3,
    name: 'Saffron',
    price: '$60 USD',
    quantity: '10g',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
  {
    id: 4,
    name: 'Black Pepper',
    price: '$15 USD',
    quantity: '250g',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
];

export default function SpicesSingleSection() {
  return (
    <>
      <ProductSection products={spices} category="Spice Categories" />
      <SpicesSingle />
    </>
  );
}
