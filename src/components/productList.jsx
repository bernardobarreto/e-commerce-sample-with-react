import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductList = () => {
  const [list, setList] = useState([]);

  const getListFromApi = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`)
    setList(data)
    console.log('Product list: ', data);
  }

  useEffect(() => {
    getListFromApi()
  }, [])

  return (
    <>
      <h1>Product Listing</h1>
      <ul>
        {list.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </>
  )
}

export default ProductList