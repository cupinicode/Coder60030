import axios from "axios";

//Desde aquí hago todas las llamadas a la API
export async function getAllProducts() {
    return await axios.get('https://dummyjson.com/product')
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/product/${id}`);
}

export async function getProductsByCategory(id) {
  return await axios.get(`https://dummyjson.com/product/category/${id}`);
}

export async function getCategories() {
  return await axios.get("https://dummyjson.com/product/categories");
}

//No se usa.  La fuente de datos es Firebase. Solo lo dejo para recordar