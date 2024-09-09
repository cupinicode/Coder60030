//import { useState } from 'react'
//import { ChakraProvider } from '@chakra-ui/react'
//import NavBar from './components/NavBar/NavBar'
//import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import { MainRouter } from './routes'

//function App() {
  //return (
  //  <ChakraProvider>
    //  <MainRouter />
  //  </ChakraProvider>  )
//}

//export default App


import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layout/MainLayout";
import { MainRouter } from "./routes";

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;