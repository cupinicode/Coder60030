import React from "react";
import { ItemListContainer } from "../components";
import { useProducts } from "../hooks/useProducts";

export const Home = () => {

  const { products, loading } = useProducts(); //desestructuro los datos del Custom Hook

  return <ItemListContainer products={products} />;
};