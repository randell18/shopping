import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';

const Product = (props) => {
    const {id,productName,productImg,price} = props.product;
    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];

  return (
    <div className=''>
        <img src={productImg} alt="" className='h-60 w-60 object-contain'/>
       <div className=''>
          <p><b>{productName}</b></p>
          <p>${price}</p>
        </div>
        <button className='border-2 font-medium border-black rounded-full px-2 py-1 hover:bg-black hover:text-white' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product