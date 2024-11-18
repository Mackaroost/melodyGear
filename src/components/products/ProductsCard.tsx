"use client";
import { Product } from "@prisma/client";
import useStoreCartView from "@/store/storeUiCart";
import storeCart from "@/store/storeCart";
import Image from "next/image";

type ProductProps = {
  products: Product[];
};

const ProductsCard = ({ products }: ProductProps) => {
  const setOpen = useStoreCartView((state) => state.setOpen);
  const addOrder = storeCart((state) => state.addToCart);

  const handleClick = (item: Product) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setOpen(true);
    addOrder(item);
  };

  return (
    <>
      {products.map((item) => {
        return (
          <article
            key={item.id}
            className=" flex flex-col justify-center items-center rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
           >  
            <div className="w-full h-64 mt-4 relative overflow-hidden rounded-xl">
              <Image
                src={`/productos/${item.image}.jpg`}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
            <div className="mt-1 p-2 flex flex-col justify-center items-center gap-y-1 ">
              <h2 className="text-slate-700">{item.name}</h2>
                <p className="text-lg font-bold text-blue-500">
                  ${item.price}
                </p>
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <button
                    onClick={handleClick(item)}
                    className="text-sm"
                  >
                    Add to cart
                  </button>
                 </div>
              </div>
          </article>
        );
      })}
    </>
  );
};

export default ProductsCard;
