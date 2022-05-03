import React, { useEffect, useState } from 'react'
import store from '../app/store'

export const Base = () => {
    let counter = useState(store.getState()[0].counter.value);
    // console.log(counter[0].counter.value)

    // useEffect(()=>{
    //     setCounter(store.getState()[0].counter.value)
    // },[])
  return (
    <div>{counter[0].counter.value}</div>
    // <div>hello</div>
  )
}

export default Base