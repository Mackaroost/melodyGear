"use client";
import useStoreCartView from "@/store/storeUiCart";
import storeCart from "@/store/storeCart";
import ProductCartDetails from "./ProductCartDetails";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useMemo } from "react";
import FormOrder from "./FormOrder";

const CartComponent = () => {
  const open = useStoreCartView((state) => state.open);
  const setOpen = useStoreCartView((state) => state.setOpen);
  const orderCart = storeCart((state) => state.cart);
  const total = useMemo(
    () => orderCart.reduce((total, item) => total + item.quantity * item.price, 0),
    [orderCart]
  );
  const formView = useStoreCartView((state) => state.openForm);
  const setFormView = useStoreCartView((state) => state.setOpenForm);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormView = () => {
    setFormView(true);
  };

  return (
    <>
      {open && (
        <aside className="md:fixed md:right-0 top-0 md:h-full bg-gray-800 p-4 md:w-96 flex flex-col">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-lg font-bold text-zinc-50 mx-auto">My shop</h2>
            <button type="button" onClick={handleClose}>
              <XCircleIcon className="text-white h-8 w-8" />
            </button>
          </div>
          <div>
            {orderCart.map((item) => (
              <div key={item.id}>
                <ProductCartDetails item={item} />
              </div>
            ))}
            {total !== 0 && (
              <div>
                <p className="font-bold text-white">Total: {total}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleFormView}
            className="space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 my-2"
            type="button"
          >
            Iniciar Compra
          </button>
          {formView && <FormOrder />}
        </aside>
      )}
    </>
  );
};

export default CartComponent;
