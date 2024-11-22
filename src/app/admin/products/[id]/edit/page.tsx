import { prisma } from "@/lib/prisma"
import Image from "next/image"
const getCategories = async()=>{
  const data = await prisma.category.findMany()
  return data
}
const obtenerId = async (id:number)=>{
  const productFind = await prisma.product.findUnique({
    where: {
      id: id
    },
  })
return productFind
}

const EditaProducts = async ({ params }: { params: { id: string } }) => {
  const product = await obtenerId(Number(params.id));
  const categories = await getCategories();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="text-slate-800 font-semibold" htmlFor="name">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="block w-full p-3 bg-slate-100 rounded border border-slate-300 focus:outline-none focus:ring focus:ring-sky-300"
              placeholder="Nombre Producto"
              defaultValue={product?.name}
            />
          </div>

          {/* Precio */}
          <div className="space-y-2">
            <label className="text-slate-800 font-semibold" htmlFor="price">
              Precio:
            </label>
            <input
              id="price"
              type="number"
              name="price"
              className="block w-full p-3 bg-slate-100 rounded border border-slate-300 focus:outline-none focus:ring focus:ring-sky-300"
              placeholder="Precio Producto"
              defaultValue={product?.price}
            />
          </div>

          {/* Categoría */}
          <div className="space-y-2">
            <label className="text-slate-800 font-semibold" htmlFor="categoryId">
              Categoría:
            </label>
            <select
              className="block w-full p-3 bg-slate-100 rounded border border-slate-300 focus:outline-none focus:ring focus:ring-sky-300"
              name="categoryId"
              defaultValue={product?.categoryId}
            >
              <option value="">-- Seleccione --</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Imagen */}
          <div className="space-y-2">
            <label className="text-slate-800 font-semibold">Imagen:</label>
            <div className="w-full h-64 mt-4 relative overflow-hidden bg-white border border-slate-300 rounded">
              <Image
                src={`/productos/${product?.image}.jpg`}
                alt={`${product?.name}`}
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>
          </div>
        </div>

        {/* Botón de Enviar */}
        <div className="mt-8 flex justify-center">
          <input
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded shadow cursor-pointer transition-all duration-300"
            defaultValue="Editar Producto"
          />
        </div>
      </div>
    </>
  );
};



export default EditaProducts