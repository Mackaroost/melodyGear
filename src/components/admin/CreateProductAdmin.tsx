import Link from "next/link"


const CreateProductAdmin = () => {
  return (
    <div>
        <Link
        href={'/admin/products/new'}
         className="bg-sky-500 text-white text-lg px-2"> Crear Producto</Link>
      
    </div>
  )
}

export default CreateProductAdmin