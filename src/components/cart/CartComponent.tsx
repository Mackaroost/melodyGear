"use client";
import { useRef } from "react"; 
import useStoreCartView from "@/store/storeUiCart";
import storeCart from "@/store/storeCart";
import ProductCartDetails from "./ProductCartDetails";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useMemo } from "react";
import { toast } from "sonner";
import { schemaOrder } from "@/schema";
import { actionCreateOrder } from "../../actions/create-order-action"; 
import useCartStore from "@/store/storeCart";

const CartComponent = () => {
  const open = useStoreCartView((state) => state.open);
  const setOpen = useStoreCartView((state) => state.setOpen);
  const orderCart = storeCart((state) => state.cart);
  const total = useMemo(
    () => orderCart.reduce((total, item) => total + item.quantity * item.price, 0),
    [orderCart]
  );
  const clearCart = useCartStore((state) => state.clearCart);
  const formView = useStoreCartView((state) => state.openForm);
  const setFormView = useStoreCartView((state) => state.setOpenForm);
  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setOpen(false);
    setFormView(false);
  };

  const handleFormView = () => {
    setFormView(true);
  };

  async function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const telephone = Number(formData.get("telephone"));

    if (!name || !email || isNaN(telephone)) {
      console.log("Invalid input data");
      return; 
    }

    const dataClient = {
      name,
      email,
      telephone,
      total,
      orderCart,
    };

    const results = schemaOrder.safeParse(dataClient);
    if (!results.success) {
      results.error.issues.forEach((item) => {
        toast.error(item.message);
      });
      return; 
    }

    const response = await actionCreateOrder(dataClient);
    if (response?.errors) {
      response.errors.forEach((element) => {
        toast.error(element.message);
      });
    } else {
      toast.success("Order created successfully!");
      clearCart(); 
      // Resetea el formulario
      if (formRef.current) {
        formRef.current.reset();
        setOpen(false);
      }
    }
  }

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
          {formView && (
            <form
              ref={formRef} 
              action={handleSubmit}
              className="mt-3 w-full rounded-md py-4 flex flex-col items-center justify-center"
            >
              <input className="p-1 text-center" type="text" placeholder="Name" name="name" />
              <input className="my-3 p-1 text-center" type="email" placeholder="Email" name="email" />
              <input
                className="p-1 text-center"
                type="number"
                placeholder="Telephone"
                name="telephone"
              />
              <input
                className="space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 my-2"
                type="submit"
                value="Generar Orden"
              />
            </form>
          )}
        </aside>
      )}
    </>
  );
};

export default CartComponent;
