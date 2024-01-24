import { React, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ItemCount = ({ producto }) => {

    const { cart, setCart } = useContext(CartContext)
    const [contador, setContador] = useState(0)

    const quitarProducto = () => contador > 0 && setContador(contador - 1)
    const agregarProducto = () => contador < producto.stock && setContador(contador + 1)
   
    const agregarAlCarrito = () => {
      const productoAgregado = { ...producto, contador }
      const estaEnElCarrito = cart.find((item) => item.id === producto.id)
      const newCart = [...cart];

      if (estaEnElCarrito){
        
        estaEnElCarrito.contador = estaEnElCarrito.contador + contador
        setCart(newCart)
        
      } else {
        
        setCart([...cart, productoAgregado])
        
      }
    }

    return (
        <div>
            <Button colorScheme='red' size='sm' isDisabled={!contador} onClick={quitarProducto}>-</Button>
            <Button colorScheme={contador ? 'blue' : 'gray'} size='md' mx='15px' isDisabled={!contador} onClick={agregarAlCarrito}>
                Agregar al carrito {contador ? `${contador} productos` : ''}
            </Button>
            <Button colorScheme={contador < producto.stock ? 'green' : 'gray'} size='sm' isDisabled={contador >= producto.stock} onClick={agregarProducto}>+</Button>
        </div>
    )
}

export default ItemCount
