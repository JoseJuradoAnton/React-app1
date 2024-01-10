import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Bebidas from './components/Bebidas'
import Navbar from './components/navbar'

import CategoriaProvider from './context/CategoriaContext'
import RecetasProvider from './context/RecetasContext'


// API https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
function App() {

  return (
    <CategoriaProvider>
      <RecetasProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bebidas' element={<Bebidas />} />
        </Routes>

      </RecetasProvider>
    </CategoriaProvider >
  )
}

export default App
