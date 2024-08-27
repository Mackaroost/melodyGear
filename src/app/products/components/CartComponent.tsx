"use client";
import useStoreCartView from "@/store/storeUiCart";
import useCartStore from "@/store/storeCart";

const CartComponent = () => {
  const open = useStoreCartView((state) => state.open);
  const setOpen = useStoreCartView((state) => state.setOpen);
const element  = useCartStore((state)=>state.cart)
console.log(element)

  return (
    <>
      {open && (
        <aside className="md:fixed md:right-0 top-0 md:h-full bg-gray-800 p-4 md:w-96 flex flex-col">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-lg font-bold text-zinc-50 mx-auto">My shop</h2>
            <button
              className="text-zinc-50 text-xl"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <h2 className="text-white">Product Details</h2>
          {/* Aquí puedes añadir las características del producto */}
        </aside>
      )}
    </>
  );
};

export default CartComponent;
