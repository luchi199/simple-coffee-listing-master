import { useState, useEffect } from "react";
const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error };
}
