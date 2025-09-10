import React from 'react'
import { useEffect, useState } from 'react'

const SimpleEffect = () => {
    const [num, setNum] = useState(1);
    useEffect(()=> {
        console.log("useEffect ran");  // this will run in the console
        
    }, [num]);
  return (
    <div>
        <h1 className='text-3xl'>{num}</h1>
        <button onClick={()=> setNum(num + 1)}>Increase Number</button>
    </div>
  )
}

export default SimpleEffect