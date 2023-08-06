import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import ProductCard from './productCard'

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
      <h1 className="text-3xl text-center mt-4 mb-10">Product Listing</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-10'>
        {list.map((product) => (
          <ProductCard key={product.id} attrs={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList