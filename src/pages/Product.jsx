import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import './Product.css'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/ProductSlice'

const Product = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const toggle = useSelector(state => state.theme)

  const dispatch = useDispatch()
  const selectedProducts = useSelector(state => state.product)

  // const [clicked, setClick] = useState(false);

  const clickHandleradd = (item) => {
    // setClick(!clicked)
    toast.success('item added to cart')
    dispatch(add(item))
  }
  const clickHandlerremove = (id) => {
    // setClick(!clicked)
    toast.error('item removed from cart')
    dispatch(remove(id))
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProducts(data);
      // console.log(data)

    } catch (error) {
      console.error(error)

    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div style={{minHeight:"100vh"}}>{loading ? (<div className="loader" style={{ display: 'grid', placeItems: "center", height: "80vh" }}><InfinitySpin
      width='200'
      color="#4fa94d"

    /></div>) : (<div className='productWrapper'>
      <div className="left">
        <img src={products.image} alt="image loading" />
      </div>
      <div className="right">
        <div className="productInfo">
          <h2>{products.title}</h2>
          <p>{products.description}</p>
          <div>tags: <span className="category">{products.category}</span></div>
          <div className="ratings">
            <p><strong>Rating:</strong> {products.rating.rate}</p>
            <p><strong>No. of Ratings:</strong> {products.rating.count}</p>
          </div>
        </div>
        {(selectedProducts.some((prod) => products.id === prod.id)) ? (<button style={{border:toggle?"1px solid white":""}} onClick={() => clickHandlerremove(products.id)}>Remove</button>) : (<button style={{border:toggle?"1px solid white":""}} onClick={() => clickHandleradd(products)}>Add to Cart</button>)}
      </div>
    </div>)}</div>
  )
}

export default Product