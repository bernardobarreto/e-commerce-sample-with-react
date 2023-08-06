const ProductCard = ({ attrs }) => {
  return (
    <div className='border-2'>
      <a href='#'>
        <p className='text-center m-2 truncate'>{attrs.title}</p>
        <img src={attrs.image} className='h-40 mx-auto m-2'/>
        <p className='text-right m-2'>${attrs.price}</p>
      </a>
      <p className='m-2 p-1 text-xl bg-blue-600 hover:bg-blue-800 text-center rounded text-white hover:cursor-pointer'>
        <a href="#">Add to cart</a>
      </p>
    </div>
  )
}

export default ProductCard;