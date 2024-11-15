import { getProducts } from "app/components/home/MainProducts"
import { ProductsWrapper } from "app/components/Store/ProductsWrapper/ProductsWrapper"
import { getCollections, getCollectionsProducts } from "app/services/shopify/collections"

interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default async function Category(props: CategoryProps){
    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    
    if(categories?.length){
        const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id    
        products = await getCollectionsProducts(selectedCollectionId)
    } else {
        products = await getProducts()
    }
    
    return(
        <ProductsWrapper products={products}/>
    )
}