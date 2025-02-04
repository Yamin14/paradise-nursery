
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-page' element={<ProductPage />} />
        <Route path='/cart-page' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
