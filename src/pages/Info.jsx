import React, {useState, useEffect} from 'react'
import { apiClient } from '../axios/apiClient'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList/ProductList'

function Info() {
    const {char} = useParams()
    const [list, setList] = useState([])

    async function getMeals() {
        try {
            const res = await apiClient.get(`/search.php?f=${char}`)
            console.log(res);     
            setList(res.data.meals)       
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getMeals()
    }, [])


  return (
    <div>
      <ProductList data={list} />
    </div>
  )
}

export default Info
