'use server';

import { schemaOrder } from "@/schema";
import {toast} from 'sonner'

export async function actionCreateOrder (data: unknown) {
 //console.log('creando desde el server')

 const results = schemaOrder.safeParse(data)
 console.log(results.success)
 if(!results.success){
   return {
    errors: results.error.issues
   }
  }else{
    
  }

 
 try{
console.log(results.data)
 }catch(error){
console.log(error)
 }

}
  

