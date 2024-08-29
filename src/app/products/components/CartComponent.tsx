"use client";
import useStoreCartView from "@/store/storeUiCart";
import storeCart from "@/store/storeCart";
import ProductCartDetails from "./ProductCartDetails";
import {XCircleIcon} from '@heroicons/react/24/solid'



const CartComponent = () => {
  const open = useStoreCartView((state) => state.open);
  const setOpen = useStoreCartView((state) => state.setOpen);
  const orderCart = storeCart((state)=> state.cart)
  //console.log(orderCart)

  return (
    <>
      {open && (
        <aside className="md:fixed md:right-0 top-0 md:h-full bg-gray-800 p-4 md:w-96 flex flex-col">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-lg font-bold text-zinc-50 mx-auto">My shop</h2>
            <button
            type = 'button'
              onClick={() => setOpen(false)}
            >
             <XCircleIcon className="text-white h-8 w-8"/>
            </button>
          </div>
          <div>
            {
              orderCart.map((item)=>{
                return(
                  <ProductCartDetails
                  key = {item.id}
                  item = {item}/>
                )
              })

            }


          </div>
       
        </aside>
      )}
    </>
  );
};

export default CartComponent;
