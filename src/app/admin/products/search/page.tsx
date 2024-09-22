import React from 'react'
import { products } from '../../../../../prisma/data/products';
import { prisma } from '@/lib/prisma';
import ProductTable from '@/components/admin/ProductTable';

const getSearch = async (searchTerm: string)=>{
const result = await prisma.product.findMany({
    where:{
        name:{
            contains:searchTerm,
            mode:'insensitive'
        }
    },
    include:{
        category: true
    }  
})
return result
}

const SearchResultPage = async ({searchParams}: { searchParams: {search: string }}) => {
 // console.log(searchParams.search)
  const resultProduct = await getSearch(searchParams.search)
    return (
    <>
    <h2> Resultado de Busqueda : {searchParams.search}</h2>
    
        <ProductTable data ={resultProduct}/>

    

    </>
  )
}

export default SearchResultPage