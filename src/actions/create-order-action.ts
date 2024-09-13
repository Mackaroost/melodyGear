'use server';

import { prisma } from "@/lib/prisma";
import { schemaOrder } from "@/schema";
import { toast } from 'sonner' 

export async function actionCreateOrder(data: unknown) {
  // console.log('creando desde el server') // Commented out for production

  const results = schemaOrder.safeParse(data);
  console.log(results.success);

  if (!results.success) {
    return {
      errors: results.error.issues,
    };
  }

  try {
    await prisma.order.create({
      data:{
        name: results.data.name,
        email: results.data.email,
        telephone: results.data.telephone,
        total: results.data.total,
        OrderProduct: {
          create: results.data.orderCart.map((item) => ({
            productId: item.id,
            quantity: item.quantity
          })),
        },
        status: false,
      },
    });
      

  } catch (error) {
    console.log(error);
  }
}