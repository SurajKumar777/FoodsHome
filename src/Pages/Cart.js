import React from 'react'
import { useCart } from 'react-use-cart';
import "../styles/cart.css"

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
      } = useCart();

    
      if (isEmpty) return (
        <>
        <div className="container-fluid py-5 ">
                
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <h1 className="mx-auto my-3">CART</h1>
                    <p>You have <span>{totalUniqueItems}</span> items in Cart.</p>
                    <hr/>
                    <div className=' item-container'>
                        <h1 className='text-center text-ligth'>YOUR CART IS EMPTY!</h1>
                    </div>
                    <div className='d-flex justify-content-end'>
                          <h3>Cart Total : <span>₹{cartTotal}</span></h3>
                    </div>
                    <div className='d-flex justify-content-end'>
                          <button className='bg-primary border-0 text-light p-2 '>Check Out</button>
                    </div>
                </div>
            </div>
            </div>
        </>
      )
  return (
    <>
       <div className="container-fluid py-5 cart-container ">
                
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <h1 className="mx-auto my-3">CART</h1>
                    <p>You have <span>{totalUniqueItems}</span> items in Cart.</p>
                    <hr/>
                    <div className='bg-light '>
                    <hr/>
                        {
                            items.map((item)=>{
                                return(
                                   <>
                                     
                                <div key={item.id} className='items row d-flex justify-content-center align-items-center'>
                                        <div className='col-md-2 middle'>
                                            <img src={item.img} alt="img" width="65%" />
                                        </div>
                                        <div className='col-md-2 middle'>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className='col-md-2 middle'>
                                            <i class="fa-solid fa-minus text-dark" onClick={() => updateItemQuantity(item.id,item.quantity - 1)}></i>
                                            <h3>{item.quantity}</h3>
                                            <i class="fa-solid fa-plus text-dark" onClick={() => updateItemQuantity(item.id,item.quantity + 1)}></i>
                                        </div>
                                        <div className='col-md-2 middle'>
                                            <h3>₹{item.price * item.quantity}</h3>
                                        </div>
                                        <div className='col-md-2 middle'>
                                        <i class="fa-solid fa-trash text-danger" onClick={()=> removeItem(item.id)}></i>
                                        </div>  
                                        
                                        </div>
                                        <hr></hr>
                                   </>
                            )})
                        }
                    
                    </div>
                    <div className='d-flex justify-content-end'>
                          <h3>Cart Total : <span>₹{cartTotal}</span></h3>
                    </div>
                    <div className='d-flex justify-content-end'>
                          <button className='bg-primary border-0 text-light p-2 '>Check Out</button>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default Cart