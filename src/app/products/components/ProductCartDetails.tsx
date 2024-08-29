import { CartItems } from "@/types"
import {XCircleIcon,MinusIcon,PlusIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';


interface ItemProps{
    item:  CartItems
}

const ProductCartDetails = ({item}:ItemProps) => {
  return (
    <div className="space-y-1 p-4">
      <div className="space-y-4 flex border justify-between border-slate-100">
          <Image
            src={`/${item.image}`}
            alt={item.name}
            width={100}
            height={100}
            className="border border-slate-100 ">
          </Image>
        <div className="flex-col justify-center border border-slate-100">
            <p className="text-sm text-white text-center font-ligth">{item.name} </p>
            <p className="text-sm text-center font-ligth text-gray-700 py-2"> ${item.price}</p>
          <div className="flex items-center  gap-3 px-2 py-2 bg-gray-100 w-fit mx-auto rounded-lg">
            <button type="button" onClick={() => {}}>
              <MinusIcon className="h-4 w-4" />
            </button>
            <p className="text-sm font-black ">{item.quantity}</p>
            <button type="button" onClick={() => {}}>
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex-col justify-center items-center border border-slate-100">
          <div>
          <button >Close</button>
          </div>
            <p className="text-sm text-center font-black text-gray-700 pt-4"> ${item.subTotal}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCartDetails