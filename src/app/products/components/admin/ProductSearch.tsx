
"use client"
import { schemaFormSearch } from "@/schema"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const ProductSearch = () => {
    const router = useRouter()
    const handleSearch = (formData:FormData)=>{
        
        const data = {
          search: formData.get('search')
        }
        
        const result = schemaFormSearch.safeParse(data)
        if(!result.success){
            result.error.issues.forEach((item)=> {
                return(
                    toast.error(item.message)
                )
            })
               return 
        }
        router.push(`products/search/?search=${result.data.search}`)
    }
    return (
    <div className="pt-4">
    <form 
    action={handleSearch}
    className="flex items-center gap-x-2">
      <input type="text" name="search"/>
      <input
      className="bg-sky-500 text-white text-lg px-2"
      type="submit" value="Search" />
    </form>
  </div>
  )
}

export default ProductSearch