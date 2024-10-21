import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([])

  /**
   * @description Esta funcion agrega un item al carrito
   * @param {*} product El producto a agregar
   * @param {*} qtyItem La cantidad de ese producte a agregar
   */
  const addItem = (product, qtyItem) => {
    const existingProduct = cartState.find((item) => item.id === product.id)

    if (existingProduct) {// Si el producto ya está en el carrito, actualizamos la cantidad,
        setCartState( //  sumando solo la diferencia
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyItem: item.qtyItem + 1 } // Aquí solo sumamos 1 a la cantidad existente
            : item
        )
      )
    } else { // Como el producto no está en el carrito, lo agregamos
        setCartState([...cartState, { ...product, qtyItem }]);
    }
  }

  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);
    if (existingProduct) { 
      if (existingProduct.qtyItem === 1) {   // Si la cantidad es 1, eliminamos el producto del carrito
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {        // Como la cantidad es mayor a 1, restamos 1 a la cantidad existente
        setCartState(
          cartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        )
      }
    }
  }

  const deleteItem = (product) => {
    setCartState(cartState.filter((item) => item.id !== product.id));
  }

  return (
    <CartContext.Provider
      value={{ cartState, addItem, removeItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  )
}