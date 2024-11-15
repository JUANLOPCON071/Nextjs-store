import { env } from "app/config/env"
import { shopifyUrls } from "app/services/shopify/urls"

export const getProducts = async () => {
    try {
      const response = await fetch(shopifyUrls.products.all,{
        headers: new Headers({
          'x-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
      })
      const {products} = await response.json()
      return products
    } catch (error) {
      console.log(error);
      
    }
  }