import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'


const ItemList = ({ productos }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {productos.map((producto, i) => (
        <Item key={`lista_producto_${i}`} producto={producto} />
      ))}
    </Grid>
  )
}

export default ItemList