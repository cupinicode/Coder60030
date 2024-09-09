import React from 'react'
import { getAllProducts } from '../services/products.service'

export const useProducts = () => {
  const [products, setProducts] = React.useState([]) //Inicializo el array de productos (vacio)
  const [loading, setLoading] = React.useState(true) //Para mostrar mientras se estan cargando los arts

  React.useEffect( ()=>{ //Recibe una funcion anonima y un array de dependencias (vacio)
    getAllProducts().then( (response)=> { //Toda la data viene en el response
        console.log(response.data.products) //Para ver el formato de la data que viene de la API
        setProducts(response.data.products)
    } ).catch( (error)=> { //Capturo el error, si hubo
        console.log(error) //Muestro el error por consola
    } ).finally( ()=>setLoading(false) )
  }, [] )  

  return {products, loading} // Retorno los estados
}
