import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, CardHeader, Heading, CardBody, Stack, Image, Text, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, precioTotalCarrito, vaciarCart, eliminarProducto } = useContext(CartContext);

  const handleVaciarCart = () => {
    vaciarCart()
  }


  return (
    <div>
      
      <Card>
          <CardHeader>
              <Heading size='md'>Carrito de compras</Heading>
          </CardHeader>
          <CardBody>
            
              {
                cart.map ((video) => (
                  
                <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={video.id}
                className='cardCarrito'
                >
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={video.imagen}
                    alt='videojuegos'
                  />
                  
                    <CardBody>
                      <Heading size='md'>{video.nombre}</Heading>
                      <Text py='0.5'>
                       Precio por unidad: ${video.precio}
                      </Text>
                      <Text py='0.5'>
                       Unidades: {video.contador}
                      </Text>
                    </CardBody>

                    <CardFooter>
                      <Button variant='solid' colorScheme='red'  
                      onClick={() => eliminarProducto(video.id)} >
                        Eliminar producto
                      </Button>
                    </CardFooter>
                  
                </Card>
                ))
              }
                
          </CardBody>
      </Card>

      
      {
        cart.length > 0 ? 
        <>
            <Text fontSize='2xl' className='totalCarrito'>Precio Total: ${precioTotalCarrito()}</Text>
            <Stack direction='row' spacing={4} align='center'>
              <Button colorScheme='red' variant='solid' onClick={handleVaciarCart} >
                Vaciar Carrito
              </Button>
              <Link to={"/Cart/pedido"}>
                <Button colorScheme='green' variant='solid'>
                  Ordenar pedido
                </Button>
              </Link>
            </Stack>
        </>
      : 
      <Stack spacing={3}>
      
      <Text fontSize='2xl'>carrito vacio</Text>

      <Link to={"/"} >
        <Button colorScheme='blue' variant='solid' onClick={handleVaciarCart} >
          Ver productos
        </Button>
      </Link>
      
      </Stack>
      }

    </div>
  )
}

export default Cart