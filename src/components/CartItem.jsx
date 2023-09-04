import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider';

const CartItem = (props) => {
    const {id,productName,productImg,price} = props.product;
    const {cartItems,addToCart,removeToCart} = useContext(ShopContext);
  return (
    <div className='flex flex-col justify-center items-center text-lg md:text-2xl font-bold'>
        <div className='w-[420px] md:w-[500px] h-[250px] flex items-center shadow-lg rounded-lg m-[30px] bg-white'>
            <img src={productImg} alt="" className='w-60 h-60'/>
            <div>
                <p><b>{productName}</b></p>
                <p className='font-semibold'>${price}</p>
                <div className='flex'>
                    <button onClick={() => removeToCart(id)} className='border border-black px-2'>-</button>
                    <input value={(cartItems[id])} className='w-10 border border-black text-center'/>
                    <button onClick={() => addToCart(id)} className='border border-black px-2'>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem