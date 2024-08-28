import {create} from 'zustand'
import { type CartItems } from '../types/index';
import { Product } from '@prisma/client';

interface StoreCart{
    cart:CartItems[]
    addToCart: (value: Product)=>void
}



const useCartStore = create<StoreCart>((set)=>({
    cart:[], 
    addToCart:(value)=>{
        const{ categoryId, ...data} = value
        set((state)=>(
            {cart:[...state.cart, {
                ...data,
                quantity:1,
                subTotal: 1 * value.price
            }]
        }))
    }    
}))


export default useCartStore;