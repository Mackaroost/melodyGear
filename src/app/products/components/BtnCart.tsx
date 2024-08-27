"use client"
import useStoreCartView from "@/store/storeUiCart";
import storeCart from  "@/store/storeCart"
import { Product } from '@prisma/client';
import { products } from '../../../../prisma/data/products';


interface BtnCartProps{
products: Product[]
}


const BtnCart = ({products}: BtnCartProps) => {
  console.log(products)
    const setOpen = useStoreCartView((state) => state.setOpen);
    const addOder = storeCart((state)=> state.addToCart)
    const handleClick = (products : any) => {
      setOpen(true)
      addOder(products)
      
      }
  return (
    <button 
    onClick={ ()=> handleClick(products)}
    
    className="text-sm">Add to cart
    </button>
  )
}

export default BtnCart