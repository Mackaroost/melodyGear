import {create} from 'zustand'
import { type CartItems } from '../types/index';
import { Product } from '@prisma/client';

interface StoreCart{
    cart:CartItems[]
    addToCart: (value: Product)=>void
}



const useCartStore = create<StoreCart>((set)=>({
    cart:[], 
    addToCart: (value)=>{ console.log(value)}
     
}))


export default useCartStore;