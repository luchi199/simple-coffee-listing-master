import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const { products, isLoading, error } = useProducts();

  return (
    <div className="bg-gray-800">
      {isLoading
        ? "loader goes here"
        : error
          ? "error state goes here"
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
    </div>
  );
}
