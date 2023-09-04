import React, { useContext } from 'react'
import { Products } from '../../product'
import { ShopContext } from '../../context/ShopContextProvider';
import CartItem from '../../components/CartItem';

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <div>
      <div>
        <h1 className='text-center text-6xl font-bold mt-4'>Your Cart Items</h1>
      </div>
      <div>
        {Products.map(product => {
          if(cartItems[product.id] !== 0) {
            return <CartItem product={product}/>
          }
        })}
      </div>
    </div>
  )
}

export default Cart