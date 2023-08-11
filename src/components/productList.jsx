import axios from 'axios'
import { Link } from 'react-router-dom'
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
      <h1 className="text-3xl text-center mt-4 mb-2">Product Listing</h1>
      <p className='underline text-center mb-4'>
        <Link to='/cart'>Cart</Link>
      </p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-10'>
        {list.map((product) => (
          <ProductCard key={product.id} attrs={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList