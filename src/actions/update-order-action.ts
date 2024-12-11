"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateOrder(formData: FormData) {

  const orderId = formData.get('orderId')!;
  //console.log(orderId)

try {
    await prisma.order.update({
        where:{
            id: Number(orderId)
        },
        data:{
            status:true,
            readyStatus: new Date(Date.now())
        }
    })
    revalidatePath('/admin/orders')
} catch (error) {
    console.log(error)
}
}

