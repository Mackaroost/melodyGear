
"use client"
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type DataProps = {
  data: Category[];
};

const CategoriesComponents = ({ data }: DataProps) => {
  //console.log(data)
  const params = useParams()
  //console.log(params)
  return (
    <>
      {data.map((item) => { 
        return (
          <Link key={item.id} href={`/products/categories/${item.slug}`}>
            <div className=
            {`flex gap-4 items-center py-2.5 px-4 my-1  rounded transition duration-200 hover:bg-gradient-to-r ${item.slug === params.slug ? 'bg-cyan-500 text-white' : '' } mt-auto hover:from-cyan-500 hover:to-cyan-500 hover:text-white w-full`}>
              <div className="w-10 h-10 relative">
                <Image
                  fill
                  src={`/imagenes/${item.slug}.svg`}
                  alt={item.name}
                />
              </div>
              <p>{item.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CategoriesComponents;
