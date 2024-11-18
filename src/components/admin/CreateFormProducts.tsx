import { prisma } from "@/lib/prisma";
import ImagenForm from "./ImagenForm";

const getCategories = async()=>{
    const data = await prisma.category.findMany()
    return data
}
  
  export default async function CreateFormProducts() {
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
          />
        </div>
  
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number" // Cambiado a tipo número
            name="price"
            className="block w-full p-3 bg-slate-100"
            placeholder="Precio Producto"
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
              key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <div> 
          <ImagenForm/>
          </div>

        </div>
      </>
    );
  }
  