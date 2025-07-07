import AntiqueSingle from '@/components/antiqueSingle';
import ProductSection, { Product } from '@/components/product';

const furniture: Product[] = [
  {
    id: 1,
    name: 'Victorian Mahogany Chair',
    price: '$1,250 USD',
    quantity: 'Single',
    image: 'https://i.pinimg.com/originals/94/60/fe/9460fec4b6dbe61daf37fff67f59e053.jpg',
    era: 'Late 19th Century'
  },
  {
    id: 2,
    name: 'Art Deco Side Table',
    price: '$895 USD',
    quantity: 'Single',
    image: 'https://rosewood.pk/wp-content/uploads/2022/11/WhatsApp-Image-2021-07-31-at-12.50.44-PM1.jpeg',
    era: '1920s'
  },
  {
    id: 3,
    name: 'Antique Writing Desk',
    price: '$2,300 USD',
    quantity: 'Single',
    image: 'https://www.theredcollectiononline.com/blog/wp-content/uploads/2022/07/cropped-redh129.jpg',
    era: 'Early 20th Century'
  },
  {
    id: 4,
    name: 'Renaissance Chest',
    price: '$3,500 USD',
    quantity: 'Single',
    image:  'http://www.theredcollectiononline.com/blog/wp-content/uploads/2023/01/cropped-redh217.jpg',
    era: '16th Century Reproduction'
  },
];

const collectibles: Product[] = [
  {
    id: 5,
    name: 'Porcelain Figurine Set',
    price: '$450 USD',
    quantity: 'Set of 3',
    image: 'https://c8.alamy.com/comp/T41GXE/antique-collectibles-on-display-in-an-antique-store-T41GXE.jpg',
    era: 'Victorian Era'
  },
  {
    id: 6,
    name: 'Antique Pocket Watch',
    price: '$675 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=400&q=80',
    era: '1890s'
  },
  {
    id: 7,
    name: 'Vintage Perfume Bottles',
    price: '$320 USD',
    quantity: 'Set of 5',
    image: 'https://images.unsplash.com/photo-1588514912908-8f5891714f8d?auto=format&fit=crop&w=400&q=80',
    era: 'Art Nouveau'
  },
  {
    id: 8,
    name: 'Brass Telescope',
    price: '$1,100 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=400&q=80',
    era: 'Early 1800s'
  },
];

const decor: Product[] = [
  {
    id: 9,
    name: 'Tiffany Style Lamp',
    price: '$2,800 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=400&q=80',
    era: '1920s Reproduction'
  },
  {
    id: 10,
    name: 'Gilded Mirror',
    price: '$1,750 USD',
    quantity: 'Single',
    image: 'https://followtheyellowbrickhome.com/wp-content/uploads/2021/02/Spring-Antique-SIdeboard-scaled.jpg',
    era: 'Louis XIV Style'
  },
  {
    id: 11,
    name: 'Chinese Blue Willow Plates',
    price: '$380 USD',
    quantity: 'Set of 6',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80',
    era: 'Early 1900s'
  },
  {
    id: 12,
    name: 'Victorian Oil Painting',
    price: '$1,950 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=400&q=80',
    era: '1880s'
  },
];

export default function AntiqueSinglePage() {
  return (
    <>
      <ProductSection products={furniture} category="Furniture Antique" />
      <ProductSection products={collectibles} category="Collectibles Antique" />
      <ProductSection products={decor} category="Decor Antiques" />
      <AntiqueSingle />
    </>
  );
}
