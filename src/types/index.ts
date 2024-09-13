import { Product, Order, OrderProduct } from '@prisma/client'
import { products } from '../../prisma/data/products';

export type CartItems = Pick <Product, 'id'| 'name'| 'price' | 'image'>&{
quantity:number,
subTotal:number;
}

export type  ModalCart = {
    open:boolean
}

export type OrderType = Order &  {
OrderProduct : (OrderProduct & {
    product: Product
})[]
}