import CreateFormProducts from "@/components/admin/CreateFormProducts"
import AddNewProduct from '../../../../components/admin/AddNewProduct';

const CreatePoductPageAdmin = () => {
  return (
    <>
    <div className="py-4">
        <h2> Create Products</h2>
    </div>

       <AddNewProduct>
          <CreateFormProducts/>
       </AddNewProduct>

    </>
  )
}

export default CreatePoductPageAdmin