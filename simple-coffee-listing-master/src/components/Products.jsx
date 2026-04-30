import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import Loader from "./ui/Loader";
import Error from "./ui/Error";

export default function Products() {
  const { products, isLoading, error } = useProducts();

  return (
    <div className="flex flex-wrap bg-gray-800 w-full">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
