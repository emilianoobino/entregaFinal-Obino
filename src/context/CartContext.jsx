import { createContext, useEffect, useState } from 'react'

const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
  
  const setCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(getCartFromLocalStorage ())

    const contadorDeCart = () => {
      return cart.reduce ((acc, video) => acc + video.contador, 0);
    }

    const precioTotalCarrito = () => {
      return cart.reduce ((acc, video) => acc + video.precio * video.contador, 0)
    }
    
    const vaciarCart = () => {
      setCart([])
    }

    const eliminarProducto = (id) => {
      setCart(cart.filter((video) => video.id !== id));
    }

    useEffect(() => {
        setCartToLocalStorage(cart)
      }, [cart]);
    
      useEffect(() => {
        setCart(getCartFromLocalStorage())
      }, []);

    return(
        <CartContext.Provider value={{cart, setCart, contadorDeCart, precioTotalCarrito, vaciarCart, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider