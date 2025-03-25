import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { apiClient } from '../axios/apiClient'
import Letter from '../components/Letter/Letter'
import Country from '../components/country/Country'

function Home() {
  const [list, setList] = useState([])

  async function getProduct() {
    try {
      const res = await apiClient.get("/search.php?s=a")

      console.log(res);
      setList(res.data.meals)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <Banner/>
      <ProductList data={list}/>
      <Country/>
      <Letter/>
    </div>
  )
}

export default Home
