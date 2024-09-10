
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Item } from '../pages'
import { NavBar } from '../components'


// rafc y tab :  crea esqueleto del componente, con la importacion y exportacion
export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' element = { <Home />} />
        <Route path = '/item/:id' element = { <Item />} />
      </Routes>
    </BrowserRouter>
  )
}
