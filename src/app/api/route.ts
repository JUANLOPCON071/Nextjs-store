import { getProducts } from "app/components/home/MainProducts";

export async function GET() {
    const products = await getProducts();

    return Response.json({ products });
}