import { useSelector, useDispatch } from "react-redux"
import { removeItem as cartRemoveItem } from '../features/cartSlice'

const Cart = () => {
  const selector = useSelector((state) => state.cart.items)
  console.log(selector);

  const dispatch = useDispatch()

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-center text-3xl'>Cart</h1>
      {selector.map((product, index) => (
        <div key={index}>
          <div className='grid grid-cols-2 border p-4'>
            <div>
              <img src={product.image} alt="" className='h-20'/>
            </div>
            <div>
              <p>{product.title}</p>
              <p className='text-right'>${product.price}</p>
              <p>
                <button
                  className="px-2 text-md bg-blue-600 hover:bg-blue-800 text-center rounded text-white hover:cursor-pointer"
                  onClick={() => dispatch(cartRemoveItem(index))}
                >
                  Remove from cart
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart