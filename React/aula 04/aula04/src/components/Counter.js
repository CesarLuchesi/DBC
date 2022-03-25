import React, {useContext} from 'react'

import {CountContext} from '../context/CountContext'

 function Counter() {
   const {count, setCount} = useContext(CountContext)
  return (
    <div>
     <h1>Count: {count}</h1> 
     <br/>
     <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}

export default Counter;