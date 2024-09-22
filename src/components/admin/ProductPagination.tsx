import Link from "next/link"
import { array } from "zod";

type PageProps = {
    page: number;
    totalPage: number;
}

export const ProductPagination = ({page, totalPage}: PageProps) => {
    const pages = Array.from({length:totalPage}, (_,i)=> i + 1)
 
  return (
    <>
    <nav className="flex items-center justify-center py-4 gap-x-2">
        {
        page > 1 && (
            <Link href={`/admin/products?page=${page-1}`}>&laquo;</Link>
            )
            }
{
    pages.map((item, index)=>{
        return(
            <Link  
            key={index}
            className = {`${page === item && 'font-black'} px-3 py-2 bg-slate-400`}
            href={`/admin/products?page=${item}`}>  {item}  </Link>

        )
    })
}
{
        page < totalPage && (
            <Link href={`/admin/products?page=${page + 1}`}>&raquo;</Link>
            )
            }
  
    </nav>
    </>
  )
}
