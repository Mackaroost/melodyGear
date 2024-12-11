import { prisma } from "@/lib/prisma";
import ImagenForm from "./ImagenForm";
import { Product } from "@prisma/client";


 type typeProductForm  = {
  product?: Product
}
const getCategories = async()=>{
    const data = await prisma.category.findMany()
    return data
}

  
  export default async function CreateFormProducts({product}:typeProductForm) {
    //console.log(categories);
    const categories = await getCategories()
    return (
      <>
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="name">
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="block w-full p-3 bg-slate-100"
            placeholder="Nombre Producto"
            defaultValue={product?.name}
          />
        </div>
  
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            name="price"
            type = "number"
            className="block w-full p-3 bg-slate-100"
            placeholder="Precio Producto"
            defaultValue={product?.price}

          />
        </div>
  
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="categoryId">
            Categoría:
          </label>
          <select
            className="block w-full p-3 bg-slate-100"
            name="categoryId"
          >
            <option  value="">-- Seleccione --</option>
            {categories.map((item) => (
              <option 
              className="max-w-48 mx-auto"
            defaultValue={product?.categoryId}
            key={item.id} value={item.id}  >
                {item.name}
              </option>
            ))}
          </select>

          <div> 
          <ImagenForm imagen = {product?.image}/>
          </div>

        </div>
      </>
    );
  }
  