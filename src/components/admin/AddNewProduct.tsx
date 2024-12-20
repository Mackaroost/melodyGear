"use client"
import { CreatePorductDb } from '@/actions/insert-productDb-action'
import { ProductSchema } from '@/schema'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
const AddNewProduct =  ({children}: {children: React.ReactNode}) => {
    const router = useRouter()
    
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
        const response = await CreatePorductDb(results.data)
        if(response?.errors){
            response.errors.forEach((item)=>{
                console.log(item)
                console.log(item.message)
                toast.error(item.message)
            }) 
            return
        }
        toast.success('Producto Creado exitosamen')
    }


  return (
    <div className='p-4 space-y-4 container mx-auto bg-slate-400'>
        <form 
        className='space-y-5'
        action={handleCreate}>

        {children}
        <div className = 'flex justify-center gap-x-5 items-center'>
            <input type="submit" className='space-y-2 bg-sky-500 text-white font-bold py-2 px-4 rounded inline-flex items-center' value= 'Create Product' />
            <button type="button" className='space-y-2 bg-sky-500 text-white font-bold py-2 px-4 rounded inline-flex items-center' onClick={() => router.push('/admin/products')}> Volver </button>
            </div>
        </form>
    </div>
  )
}

export default AddNewProduct