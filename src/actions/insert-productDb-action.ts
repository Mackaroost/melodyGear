"use server"

import { ProductSchema } from "@/schema"
import { prisma } from "@/lib/prisma"


export  const CreatePorductDb = async  (data:unknown) => {
    console.log(data)
const res = ProductSchema.safeParse(data)
if(!res.success){
return {
    errors: res.error.issues
}
}
await prisma.product.create({
    data: res.data
})
}

