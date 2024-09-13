import ProductTable from "@/app/products/components/admin/ProductTable"
import { prisma } from "@/lib/prisma"
import { products } from '../../../../prisma/data/products';

const getProducts = async()=>{
  const data = await prisma.product.findMany({
    include: {
        category:true
    }
  })
return data
}
const AdminProductsPage = async () => {
const products = await getProducts()
//console.log(products)
  return (
    <>
    <div>
        <h2>Administras tus Productos</h2>
    </div>

    <ProductTable data = {products}/>

    </>
  )
}

export default AdminProductsPage