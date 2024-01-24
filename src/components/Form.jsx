import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Text, Heading, FormControl, FormLabel, Input, FormHelperText, Button } from '@chakra-ui/react';


const Form = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const { cart } = useContext(CartContext)


    const db = getFirestore()

    const handleSubmit = (e) => {
        
        e.preventDefault();

        addDoc(ordersCollection, order).then(({id}) => 
            setOrderId(id))
        }
              
    const order = {
       cliente: { nombre, email},
       items: cart,
    }

    const ordersCollection = collection(db, "orden")
     
  return (

    <div>

        <Heading noOfLines={1}>
        Complete el formulario
        </Heading>

        <FormControl isRequired>
            <form action="" onSubmit={handleSubmit}>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <FormHelperText>Nunca compartiremos tus datos.</FormHelperText>

                <Button type='submit' colorScheme='green' size='md'>
                    Enviar
                </Button>
            </form>
        </FormControl>

        <Text>Tu Orden Id es: {orderId}</Text>
    </div>

  )
}

export default Form