"use client"
import useStoreCartView from "@/store/storeUiCart";
import storeCart from  "@/store/storeCart"
import { Product } from '@prisma/client';
import { products } from '../../../../prisma/data/products';


interface BtnCartProps{
products: Product
}


const BtnCart = ({products}: BtnCartProps) => {

    const setOpen = useStoreCartView((state) => state.setOpen);
    const addOrder = storeCart((state)=> state.addToCart)

    const handleClick = () => {
      setOpen(true)
      addOrder(products)
      
      }
  return (
    <button 
    onClick={handleClick}
    
    className="text-sm">Add to cart
    </button>
  )
}

export default BtnCart