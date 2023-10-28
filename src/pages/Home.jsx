import React, { useEffect, useState } from 'react'
import Products from '../components/Products';
import {InfinitySpin} from 'react-loader-spinner'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://fakestoreapi.com/products');
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
    <div className='homeContainer' style={{ minHeight: "100vh" }}>
      <h2 style={{textAlign:"center", fontSize:"2rem", marginBottom:"20px"}}>Our Products</h2>
      {
        loading?(<div className="loader" style={{display:'grid', placeItems:"center", height:"80vh"}}><InfinitySpin 
        width='200'
        color="#4fa94d"
        
      /></div> ):
        (<Products products = {products} />)
      }
    </div>
  )
}

export default Home