import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../store/ProductSlice'
import toast from 'react-hot-toast'
import { BsTrash } from 'react-icons/bs'
import './cart.css'

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0)

  const products = useSelector(state => state.product)
  const dispatch = useDispatch()

  const clickHandlerremove = (id) => {
    dispatch(remove(id))
    toast.error('Item Removed from cart')
  }

  // console.log(products)

  useEffect(() => {
    const totalPrice = products.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    setTotalAmount(totalPrice)
  }, [products])

  return (
    <div className='cart'>
      {
        products.length > 0 ?
          (<div className='cartContainer' style={{minHeight:"100vh"}}>
            <div className="left">
              {products.map((item) => (
                <div className="productcard" key={item.id}>
                  <div className="left">
                    <img src={item.image} alt="error loading" />
                  </div>
                  <div className="right">
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                    <div className='price'>$ {item.price}</div>
                    <div className="action">
                      <div onClick={() => clickHandlerremove(item.id)}><BsTrash style={{ cursor: "pointer", color: "red", fontSize: "1.2em", marginTop: "10px" }} /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rightNow">
              <h1>Check Out</h1>
                <h3>Total Products: {products.length}</h3>
                <h2>Total Amount: $ {totalAmount}</h2>

                <button style={{backgroundColor:"#0ae448", width:"40%", padding:"6px 10px",borderRadius:"15px", fontSize:"1.3rem", border:"none", cursor:"pointer"}}>Place Order</button>
            </div>
          </div>) :
          (<div className="noproduct" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh", gap: "15px", flexDirection: "column", fontSize: "1.2rem" }}>
            <h1>Cart is Empty</h1>
            <Link style={{ textDecoration: "none", borderRadius: "15px", backgroundColor: "#0ae448", color: "black", fontWeight: "600", padding: "6px 10px" }} to={'/'} >Show Now</Link>
          </div>)
      }
    </div>
  )
}

export default Cart