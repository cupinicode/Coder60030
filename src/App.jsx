import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi E-Commerce"/>
  </ChakraProvider>  )
}

export default App
