import React from 'react'
import logo from '../assets/shopping.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../store/ThemeSlice'

const Header = () => {
  const loc = useLocation();

  const products = useSelector(state => state.product)

  const toggle = useSelector(state => state.theme)
  const themeDIspatch = useDispatch();
  // console.log(toggle)
  // console.log(products)


  return (
    <nav style={{backgroundColor:toggle?"black":"floralwhite"}}>
      <div className="navContainer">
        <div className="logo">
          <NavLink to={'/'} style={{color:toggle?"floralwhite":"black"}}  ><img style={{filter:toggle?"drop-shadow(0 0 .625rem white)":"", backgroundColor:toggle?"floralwhite":"", borderRadius:toggle?"50%":""}} src={logo} alt="logo" />Store</NavLink>
        </div>
        <div className="menus">
          <div className="themeToggle" style={{borderRadius:"50%",cursor:"pointer", padding:".25rem .25rem",border:toggle?".0625rem solid white":".0625rem solid black", display:"flex", justifyContent:"center"}} onClick={() => themeDIspatch(setToggle())}>
            {toggle ? <FaMoon style={{color:"white"}} />:<FaSun  style={{color:"black"}} />}
          </div>
          <Link to={'/'} style={{color:toggle?"floralwhite":"black"}} className={`${loc.pathname === '/' ? "active" : ""}`}>Home</Link>
          <Link to={'/cart'} style={{color:toggle?"floralwhite":"black"}} className={`${loc.pathname === '/cart' ? "cart active" : "cart"}`}>
            <FaShoppingCart />
            <div className="cartCount"><p>{products.length}</p></div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header