import React from 'react'
import { Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const { contadorDeCart } = useContext(CartContext)
  
  return (
    <Link to="/cart">
      <div className="carrito">
        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
          <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Badge fontSize='0.5em' variant='solid' colorScheme='red' borderRadius='50%' px='6px' position='absolute' top='-10px' right='-10px'>{contadorDeCart ()}</Badge>

      </div>
    </Link>
  )
}

export default CartWidget
