import { ProductView } from 'app/components/product/ProductView/ProductView'
import { getProducts } from 'app/services/shopify/products'
import React from 'react'

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
    
  return (
    <ProductView product={product}/>
  )
}

export default ProductPage