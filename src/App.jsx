import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast'
import Product from './pages/Product'
import { useSelector } from 'react-redux'

function App() {

  const toggle = useSelector(state => state.theme)

  return (
    <div className='App' style={{backgroundColor:toggle?"#212121":"white", color:toggle?"white":"black"}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
