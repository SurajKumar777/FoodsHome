import React from "react";
import "../App.css"
import { useCart } from "react-use-cart";



const Cards = (props) => {
  const { addItem } = useCart();

  return (
    <>

      <div className="card ">
        <img src={props.img} className="card-img-top" width="100%" height="200px" alt="..." />
        <div className="">
          <div className='card-body'>
            <h5 className="card-title">{props.title}</h5>
            <div>
              <p className='price'>₹{props.price}</p>
            </div>
            <div className='button'>
              <button className='bg-primary text-light  border-0' onClick={() => addItem(props.val, alert("CONGRATS! YOUR FOOD IS ADDED."))}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;