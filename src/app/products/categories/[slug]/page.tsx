import { prisma } from "@/lib/prisma"
import { products } from '../../../../../prisma/data/products';
import ProductsCard from "../../components/ProductsCard";

async function getProducts(category:string) {
    const data = await prisma.product.findMany({
        where:{
            category:{
                slug:category
            }
        }
    })
return data 
}

const pageSlug = async ({params}: {params:{slug:string}}) => {
    const products = await getProducts(params.slug)
    
  return (
    <div className= "mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
    <ProductsCard products={products}/>
    </div>


   
  )
}

export default pageSlug

