import Masonry from 'react-masonry-css';

import { productsData } from './data';
import { ProductCard } from './product-card';

const breakpointColumnsObj = {
  default: 4,
  1360: 3,
  764: 2,
  500: 1,
};

export default function ProductsList() {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='-ml-6 flex'
        columnClassName='pl-6 bg-clip-padding flex flex-col gap-6 justify-start'
      >
        {productsData.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </Masonry>
    </>
  );
}
