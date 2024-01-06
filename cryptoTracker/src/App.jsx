
import './App.css'
import Navbar from './assets/component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './assets/component/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './assets/component/Account/Login'
import CoinDetails from './assets/component/Market/CoinDetails'
import Wishlist from './assets/component/Market/Wishlist'

import About from './assets/component/Home/About'

function App() {
 

  return (
    <>
     <BrowserRouter>
     
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/aboutUs' element={<About />}></Route>
          <Route path='/CoinDetails/:id' element={<CoinDetails />}></Route>
         
          
         



        </Routes>

          

      </BrowserRouter>
    </>
  )
}

export default App
