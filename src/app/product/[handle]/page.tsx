import { ProductView } from 'app/components/product/ProductView/ProductView'
import { getProducts } from 'app/services/shopify/products'
import { redirect } from 'next/navigation'
import React from 'react'

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export async function generateMetaData({ searchParams }: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products[0]

  return {
    tittle: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if(!id){
      redirect('/store')
    }
    
  return (
    <ProductView product={product}/>
  )
}

export default ProductPage