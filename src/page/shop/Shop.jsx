import React from 'react'
import { Products } from '../../product'
import Product from './Product'

const Shop = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <h1 className='text-6xl font-semibold text-center p-20'>Dell Shop</h1>
      </div>
      <div className='grid grid-cols-3 place-items-center text-center'>
        {Products.map((product) => (
          <Product product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Shop