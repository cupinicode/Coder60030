import React, { useState, useEffect } from "react";
import { getProductById } from "../services/products.service"

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data)
        //console.log(res.data)
      })
      .catch((err) => { //Capturo el error
        console.log(err); //lo muestro por consola
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { product, loading };
};


