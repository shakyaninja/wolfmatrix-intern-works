import React, { useEffect } from 'react'
import './counter.css'
import { useState } from 'react'

function Counter() {

    var [count,setCount] = useState(0);

    const countClick = () => {
        setCount(count + 1);
    }
    
  return (
    <div className='counter-box d-flex justify-content-around flex-column align-items-center container-fluid'>
        <div className="counter-dec">
            <div className="counter-block"></div>
        </div>
        <div className="counter">
            {count}
        </div>
        <div className="count-btn" onClick={countClick}>
            Count
        </div>
    </div>
  )
}

export default Counter