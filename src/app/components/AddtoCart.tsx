'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'

const AddtoCart = () => {
  const dispatch = useDispatch()
  const addItem = ()=> {
    dispatch(cartActions.addtoCart({quantity:1}))
  }
  return (
    <button onClick={addItem} className='border mr-32 hover:scale-90  transition-transform rounded-md mt-4 bg-green-900 text-white px-2 py-1'> Add to Cart</button>
  )
}

export default AddtoCart