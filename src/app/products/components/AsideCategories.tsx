import { prisma } from "@/lib/prisma" 
import CategoriesComponents from "./CategoriesComponents"

async function getCategories() {
return await prisma.category.findMany()
}

const AsideCategories = async () => {
    const data = await getCategories()

  return (
    <aside className="p-2 bg-slate-50 w-full md:w-60 flex flex-col pt-12 md:min-h-screen">
       
            <div className="bg-slate-500 rounded-full size-16 py-4 mx-auto">

            </div>
        <div className="mb-2 p-4 mx-auto">
    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-slate-900">Bienvenido</h5>
  </div>
            <nav>
               <CategoriesComponents data = {data}/>
            </nav>


            <a className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
                <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
            </a>

        </aside>
  )
}

export default AsideCategories