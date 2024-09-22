

import ProductTable from "@/app/products/components/admin/ProductTable";
import { prisma } from "@/lib/prisma";
import { products } from "../../../../prisma/data/products"; // No se necesita si no lo estás usando
import { ProductPagination } from "@/app/products/components/admin/ProductPagination";
import { redirect } from "next/navigation";
import { schemaFormSearch } from "@/schema";
import { toast } from "sonner";
import ProductSearch from "@/app/products/components/admin/ProductSearch";

const getAllProduct = async () => {
  try {
    return await prisma.product.count();
  } catch (error) {
    console.error("Error al obtener el conteo de productos:", error);
    return 0; // Retorna 0 en caso de error
  }
};

const getProducts = async (pageActual: number, pageSize: number) => {
  try {
    const skip = (pageActual - 1) * pageSize;
    const data = await prisma.product.findMany({
      take: pageSize,
      skip,
      include: {
        category: true,
      },
    });
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return []; // Retorna un array vacío en caso de error
  }
};

const AdminProductsPage = async ({ searchParams }: { searchParams: { page: string } }) => {
  const pageActual = Math.max(1, Number(searchParams.page) || 1); 
  const pageSize = 10;

  if (pageActual < 0 ) return redirect('/admin/products')

  const [products, totalProduct] = await Promise.all([
    getProducts(pageActual, pageSize),
    getAllProduct(),
  ]);
  
  console.log(totalProduct);
  const totalPage = Math.ceil(totalProduct / pageSize);
  console.log(totalPage);

  if (pageActual > totalPage ) return redirect('/admin/products')



  return (
    <>
      <div>
        <h2>Administras tus Productos</h2>
      </div>
      <ProductSearch/>
      <ProductTable data={products} />
      <ProductPagination page={pageActual} totalPage={totalPage} />
    </>
  );
};

export default AdminProductsPage;
