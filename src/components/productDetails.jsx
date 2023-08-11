import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { addItem as cartAddItem } from '../features/cartSlice'
import axios from 'axios'

const ProductDetails = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const fetchProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
  }

  const cartItems = useSelector(state => state.cart.items)

  const { isLoading, error, data: attrs } = useQuery('productDetails', fetchProduct)

  if (isLoading) return 'Loading product details...'
  if (error) return 'An error ocurred: ' + error.message

  const itemIsOnCart = attrs?.id && cartItems?.some((item) => item.id === attrs.id)
  const addToCartText = itemIsOnCart ? 'Add one more to cart' : 'Add to cart'
  const cartItemQuantity = itemIsOnCart ? cartItems.filter(item => item.id === attrs.id).length : 0

  return (
    <div className="max-w-md mx-auto">
      <p className='underline text-center mb-4'>
        <Link to='/cart'>Cart</Link>
      </p>
      <p className='my-4 text-2xl'>{attrs.title}</p>
      <div className='grid grid-cols-2'>
        <div className="mr-4">
          <img src={attrs.image} />
        </div>
        <div>
          <p>{attrs.description}</p>
          <p className="text-2xl underline my-4">${attrs.price}</p>
          <p>Current product on cart: {cartItemQuantity}</p>
          <button
            className="my-4 py-1 px-4 text-xl bg-blue-600 hover:bg-blue-800 text-center rounded text-white hover:cursor-pointer"
            onClick={() => dispatch(cartAddItem(attrs))}
            >
              {addToCartText}
            </button>
          <p className='underline py-4'><Link to='/'>Go back to home page</Link></p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails