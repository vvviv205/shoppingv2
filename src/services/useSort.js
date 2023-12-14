import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function useSort() {
  let products = useLoaderData();
  const [sortBy, setSortBy] = useState("new");

  if (sortBy === "new") {
    products = products.sort((a, b) => b.id - a.id);
  }
  if (sortBy === "a-z") {
    products = products.slice().sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortBy === "z-a") {
    products = products.slice().sort((a, b) => b.title.localeCompare(a.title));
  }
  if (sortBy === "rate")
    products = products.sort((a, b) => b.rating - a.rating);
  if (sortBy === "inc") {
    products = products.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "dec") {
    products = products.sort((a, b) => a.price - b.price);
  }
  return [products, sortBy, setSortBy];
}
