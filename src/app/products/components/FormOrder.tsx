'use client'
import { actionCreateOrder} from "../../../../prisma/actions/create-order-action"
import { schemaOrder } from "@/schema";
import{toast} from 'sonner'

const FormOrder = () => {

  async function handleSubmit(formData:FormData){
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const telephone = Number(formData.get('telephone'));

      if (!name || !email || isNaN(telephone)) {
        console.log('Invalid input data');
      }
    
      const dataClient = {
        name,
        email,
        telephone,
      };
      
      //const results = schemaOrder.safeParse(dataClient)
      //console.log(results)
      const response = await actionCreateOrder(dataClient)
      if(response?.errors){
        response.errors.forEach(element => {
          toast.error(element.message)
        });
      }
    }

  return (
    <form
    action={handleSubmit} 
    className=" mt-3 w-full rounded-md  py-4 flex flex-col items-center justify-center"
    >

        <input 
        className=" p-1 text-center"
        type="text"
        placeholder='Name'
        name= 'name'
      
        
        
        
        />
         <input 
         className="my-3 p-1  text-center"
         type="email"
        placeholder='Email'
        name='email'
        
        />
         <input 
         className="p-1  text-center"
         type="number"
        placeholder='Telephone'
        name= 'telephone'
        
        />

            <input 
            className = "space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 my-2"
            type="submit"
            value= "Generar Orden"/>


    </form>
  )
}

export default FormOrder