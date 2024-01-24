import React from 'react'
import { Stack, Heading, Text, Container, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {
  return (
    <Container maxW='50%'>
      <Stack mt='6' spacing='3'>
        <Heading size='md' color='#000000'>
          <Center mb="15px">
            <img width="30%" src={producto.imagen} alt={producto.nombre} />
          </Center>
          <p>Producto: {producto.nombre}</p>
        </Heading>
        <Text color='black'>Categoría: {producto.tipo}</Text>
        <Text color='black'>Descripción: {producto.descripcion}</Text>
        <Text color='black'>Precio: ${producto.precio}</Text>
      </Stack>
      <Center mt="15px">
        
        <ItemCount producto={producto} />
      </Center>
    </Container>
  )
}

export default ItemDetail;
