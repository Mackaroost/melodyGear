import { CartItems } from "@/types"
import {XCircleIcon,MinusIcon,PlusIcon } from '@heroicons/react/24/solid'

interface ItemProps{
    item:  CartItems
}

const ProductCartDetails = ({item}:ItemProps) => {
  return (
    <div className="space-y-1 p-4">
    <div className="space-y-4 flex items-center">
      <div className="">
          <p className="text-base font-bold">{item.name} </p>
      </div>
      <div className="flex-col">
        <div>
      <p className="text-lg text-white font-black">
          {item.price}
      </p>
      </div>
      <div className="flex gap-3 px-4 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            type="button"
            onClick={() => {}}
          >
              <MinusIcon className="h-6 w-6"/>
          </button>
  
          <p className="text-base font-black ">
            {item.quantity}
          </p>
  
          <button
             type="button"
             onClick={() => {}}
          >
              <PlusIcon className="h-6 w-6"/>
          </button>
      </div>
      </div>
    <div className="flex-col">
      <button>Close</button>
      <div >
        <p className="text-base font-black text-gray-700">
          Subtotal: {''}
           <span className="font-normal"> 
  
            </span>
        </p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCartDetails