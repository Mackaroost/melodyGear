import { Product } from '@prisma/client'

export type CartItems = Pick <Product, 'id'| 'name'| 'price'>&{
quantity:number,
subTotal:number;
}

export type  ModalCart = {
    open:boolean
}