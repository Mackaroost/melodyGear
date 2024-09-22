"use client"
import { ProductSchema } from '@/schema'
import CreateFormProducts from './CreateFormProducts'
import { toast } from 'sonner'
const AddNewProduct =  ({children}: {children: React.ReactNode}) => {
    
    const handleCreate = (formData:FormData)=>{
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            caregoryId: formData.get('categoryId')
        }
        const results = ProductSchema.safeParse(data)
        if(!results.success){
            results.error.issues.forEach((item)=>{
                toast.error(item.message)
            }) 
            return
        }
        console.log(results.data)
    }


  return (
    <div className='p-4 space-y-4 container mx-auto bg-slate-500'>
        <form 
        className='space-y-5'
        action={handleCreate}>

        {children}

            <input type="submit" className='space-y-2 bg-sky-500 text-white text-lg' value= 'Create Product' />
        </form>



    </div>
  )
}

export default AddNewProduct