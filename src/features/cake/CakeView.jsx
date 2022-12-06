import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import {ordered,restocked}  from './cakeSlice'
const CakeView = () => {
 const numOfCakes = useSelector((state) =>  state.cake.numOfCakes)
                        //pristupampo is store cake:cakeReducer
                        //numOfCakes iz cakeSlice
  /*useSelector vraca sta god se dobije iz sleceted value */
  const dispatch = useDispatch()
  
  return (
    <div>
      <h2>Number of cakes -  {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}

export default CakeView