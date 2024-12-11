import EditProductForm from "@/components/admin/EditProductForm"
import CreateFormProducts from "@/components/admin/FormProducts"
import { prisma } from "@/lib/prisma"


const obtenerId = async (id:number)=>{
  const productFind = await prisma.product.findUnique({
    where: {
      id: id
    },
  })
return productFind
}

const EditProductsPage = async ({ params }: { params: { id: string } }) => {
  const product = await obtenerId(+params.id);
return(
  <>
  <EditProductForm>
  <CreateFormProducts product={product}/>
  </EditProductForm>
  </>
)
}


export default EditProductsPage