import React from "react";
import { getCategories } from "../services/products.service";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    getCategories()
      .then((response) => {
        //console.log(response) Me fijo cómo me llega la información
        setCategory(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { category };
};