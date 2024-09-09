import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'


// rafc y tab :  crea esqueleto del componente, con la importacion y exportacion
export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <Home />} />
      </Routes>
    </BrowserRouter>
  )
}
