import { Category } from "@prisma/client"
import Image from "next/image"


type DataProps = {
    data:Category[]
}

const CategoriesComponents = ({data}: DataProps) => {
    //console.log(data)
  return (
    <div>
        {
            data.map((item)=>{
                return(
          < div key={item.id} 
          className="flex gap-4 items-center py-2.5 px-4  rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto w-full" > 
          <div className="w-10 h-10 relative"  >
            <Image 

            fill
            src={`/imagenes/${item.slug}.svg`} alt={item.name}
            />
          </div>
          <p>{item.name}</p>
          </div>

                )
            })

           
            
        }

    </div>
  )
}

export default CategoriesComponents