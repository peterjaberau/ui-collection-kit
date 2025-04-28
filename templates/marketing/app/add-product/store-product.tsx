import { atom } from 'jotai';

// Types
interface ProductImage {
  url: string;
  isMain?: boolean;
  file: {
    name: string;
    ext: string;
  };
  size: string;
}

interface Product {
  name: string;
  description: string;
  category: string;
  price: number | undefined;
  stock: number | undefined;
  images: ProductImage[];
}

// Initial product state
const initialProduct: Product = {
  name: '',
  description: '',
  category: '',
  price: undefined,
  stock: undefined,
  images: [],
};

export const filledProduct: Product = {
  name: 'Apple Watch S5 GPS 40MM',
  description:
    'Apple Watch Series 5 GPS brings smart features and elegant design for daily convenience.',
  category: 'Technology',
  price: 478.8,
  stock: 200,
  images: [
    {
      url: '/images/products/airpods-max-1.png',
      isMain: true,
      file: {
        name: 'airpods-max',
        ext: '.jpg',
      },
      size: '753.99 KB',
    },
    {
      url: '/images/products/apple-watch-1.png',
      file: {
        name: 'apple-watch',
        ext: '.jpg',
      },
      size: '655.45 KB',
    },
    {
      url: '/images/products/homepod-mini-1.png',
      file: {
        name: 'homepod',
        ext: '.jpg',
      },
      size: '234.55 KB',
    },
  ],
};

// Atoms
export const productAtom = atom<Product>(initialProduct);

// Derived atoms for specific fields
export const productNameAtom = atom(
  (get) => get(productAtom).name,
  (get, set, newName: string) => {
    const currentProduct = get(productAtom);
    set(productAtom, { ...currentProduct, name: newName });
  },
);

export const productDescriptionAtom = atom(
  (get) => get(productAtom).description,
  (get, set, newDescription: string) => {
    const currentProduct = get(productAtom);
    set(productAtom, { ...currentProduct, description: newDescription });
  },
);

export const productCategoryAtom = atom(
  (get) => get(productAtom).category,
  (get, set, newCaregory: string) => {
    const currentProduct = get(productAtom);
    set(productAtom, { ...currentProduct, category: newCaregory });
  },
);

export const productPriceAtom = atom(
  (get) => get(productAtom).price,
  (get, set, newPrice: number) => {
    const currentProduct = get(productAtom);
    set(productAtom, { ...currentProduct, price: newPrice });
  },
);

export const productStockAtom = atom(
  (get) => get(productAtom).stock,
  (get, set, newStock: number) => {
    const currentProduct = get(productAtom);
    set(productAtom, { ...currentProduct, stock: newStock });
  },
);

export const productImagesAtom = atom(
  (get) => get(productAtom).images,
  (get, set, newImages: ProductImage[]) => {
    const currentProduct = get(productAtom);
    set(productAtom, { ...currentProduct, images: newImages });
  },
);

// Utility atoms for product management
export const isProductInStockAtom = atom(
  (get) => (get(productStockAtom) ?? 0) > 0,
);

// Actions
export const decreaseStockAtom = atom(null, (get, set) => {
  const currentStock = get(productStockAtom) ?? 0;
  if (currentStock > 0) {
    set(productStockAtom, currentStock - 1);
  }
});

export const increaseStockAtom = atom(null, (get, set) => {
  const currentStock = get(productStockAtom) ?? 0;
  set(productStockAtom, currentStock + 1);
});
