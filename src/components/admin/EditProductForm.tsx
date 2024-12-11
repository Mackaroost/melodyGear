"use client"

import { ProductSchema } from '@/schema'
import { toast } from 'sonner'
import { useParams } from 'next/navigation'
import { EditProductDb } from '@/actions/edit-productDb'
const EditProductForm =  ({children}: {children: React.ReactNode}) => {
    const params = useParams()
    const id = +params.id!
    //console.log(typeof(id))
    
    const handleCreate = async (formData:FormData)=>{
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image')
        }
        const results = ProductSchema.safeParse(data)
        if(!results.success){
            results.error.issues.forEach((item)=>{
                console.log(item.message)
                toast.error(item.message)
            }) 
            return
        }
        const response = await EditProductDb(results.data, id)

        if(response?.errors){
            response.errors.forEach((item)=>{
                console.log(item)
                console.log(item.message)
                toast.error(item.message)
            }) 
            return
        }
        toast.success('Producto actualizado exitosamente')
    }


  return (
    <div className='p-4 space-y-4 container mx-auto bg-slate-500'>
        <form 
        className='space-y-5'
        action={handleCreate}>

        {children}
            <input type="submit" className='space-y-2 bg-sky-500 text-white text-lg' value= 'Editar Product' />
        </form>



    </div>
  )
}

export default EditProductForm