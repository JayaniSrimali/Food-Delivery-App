// eslint-disable-next-line no-unused-vars
import React from 'react'
import  Navbar from './Componets/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Routes, Route } from'react-router-dom'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
      </Routes>
      
    </div>
  )
}

export default App
