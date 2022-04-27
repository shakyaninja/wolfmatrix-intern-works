import React, { useState } from 'react'
import "./card.css"
function card(props) {

    var [title,setTitle] = useState(props.title);
    var [desc,setDesc] = useState(props.description);
    var [img,setImg] = useState(props.img);
    var [price,setPrice] = useState(Number(props.price));

    const discount = () => {
        setPrice(price - 0.1 * price);
    
    }

  return (
    <div className='card-container m-5 shadow text-center'>
        <img src={img} alt="" className="img-fluid card-img" />
        <div className="card-body py-2">
            <h2 className="card-title my-4">
                {title}
            </h2>
            <div className="card-desc my-4">
                <p className='text-muted my-2'>
                    {desc}
                </p>
                <div className="d-flex justify-content-around">
                    <span className='price mx-4'>$ {price}</span>
                    <div className="btn btn-primary p-2" onClick={discount}>Get 10% Off</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card