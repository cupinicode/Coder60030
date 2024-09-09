import { useState, useEffect } from "react";
import { getProductById } from "../services/products.service"

export const useProductById = (id) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => { //Capturo el error
        console.log(err); //lo muestro por consola
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { productData, loading };
};