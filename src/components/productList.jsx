import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const ProductList = () => {
  const fetchList = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`)
    return data
  }

  const { isLoading, error, data: list } = useQuery('productList', fetchList)

  if (isLoading) return 'Loading...'
  if (error) return 'An error has ocurred: ' + error.message

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