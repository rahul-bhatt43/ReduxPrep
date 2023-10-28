import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './products.css'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../store/ProductSlice'

const Products = ({ products }) => {
  const dispatch = useDispatch()
  const selectedProducts = useSelector(state => state.product)

  const toggle = useSelector(state => state.theme)

  // const [clicked, setClick] = useState(false);

  const clickHandleradd = (item)=>{
    // setClick(!clicked)
    toast.success('item added to cart')
    dispatch(add(item))
  }
  const clickHandlerremove = (id)=>{
    // setClick(!clicked)
    toast.error('item removed from cart')
    dispatch(remove(id))
  }


  return (
    <div className="productWrapper">
      {
        products.map((item) => (

          <div className="card" key={item.id}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <Link to={`/product/${item.id}`}>
              <div className="productInfo">
                <div className="title">
                  <p>{item.title}</p>
                </div>
                <div className="price">
                  <p>$ {item.price}</p>
                </div>

              </div>
            </Link>
            <div className="actionscard">
            {(selectedProducts.some((prod)=>item.id === prod.id))?(<button style={{border:toggle?"1px solid white":""}} onClick={()=>clickHandlerremove(item.id)}>Remove</button>):(<button style={{border:toggle?"1px solid white":""}} onClick={()=>clickHandleradd(item)}>Add to Cart</button>)}
              
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default Products