"use server"

import { ProductSchema } from "@/schema"
import { prisma } from "@/lib/prisma"


export  const EditProductDb = async  (data:unknown, id:number ) => {
    
const res = ProductSchema.safeParse(data)
if(!res.success){
return {
    errors: res.error.issues
}
}
await prisma.product.update({
    where: {id},
    data: res.data
}
)
}
