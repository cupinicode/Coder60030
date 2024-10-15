import React from "react";
import { getCategories } from "../services/products.service";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    const productsCollection = collection(db, "categories");
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [])    

  return { category };
};