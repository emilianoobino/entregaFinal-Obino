import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
    <GridItem w='100%'>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='#000000'>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>Producto: {producto.nombre}</p>
            </Heading>
            <Text color='black'>Categoría: {producto.tipo}</Text>
          </Stack>
        </CardBody>
        <CardFooter justify='center' className='buttonVer'>
          <Link to={`/item/${producto.id}`} >
            <Button colorScheme='#000000'>Ver más</Button>
          </Link>
        </CardFooter>
        <Divider />
      </Card>
    </GridItem>
  )
}

export default Item