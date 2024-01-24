import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import Form from './components/Form'
import CartProvider from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoria" element={<ItemListContainer />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path='/Cart/pedido' element={<Form />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App