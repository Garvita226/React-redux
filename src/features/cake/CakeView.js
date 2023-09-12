import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
    const cakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    const [value, setValue] = useState(1)

  return (
    <div>
      <h2>Number of cakes - {cakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input type="number" onChange={(e) => setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView
