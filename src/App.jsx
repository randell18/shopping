import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Navbar, Footer} from './components'
import {Shop, Cart} from './page'
import ShopContextProvider from './context/ShopContextProvider'

function App() {

  return (
    <div className='bg-slate-300'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
