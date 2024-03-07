import Products from "@/containers/Products";
import { fetchProducts } from "@/funcs/fetchProducts";

export default async function Page() {
  const initialData = await fetchProducts();
  return <Products initialData={initialData} />;
}
