import { z } from 'zod';

export const schemaOrder = z.object({
  name: z.string().min(1, 'Error, add name'),
  email: z.string().email('Error, invalid email format').min(1, 'Error, add email'),
  telephone: z.number().positive('Error, add a valid telephone number').min(1, 'Error, add telephone'),
  total: z.number().positive('Error, invalid total amount').min(1, 'Error en la orden'),
  orderCart: z.array(
    z.object({
      id: z.number().min(1, 'Error, invalid item ID'),
      name: z.string().min(1, 'Error, item name is required'),
      subTotal: z.number().positive('Error, invalid subTotal amount').min(1, 'Error in subTotal'),
      quantity: z.number().positive('Error, quantity must be positive').min(1, 'Error, invalid quantity'),
    })
  ),
});

export const schemaFormSearch = z.object({
  search: z.string().trim().min(1, {message:'Debe completar los datos'})
})