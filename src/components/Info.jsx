import React, { useState } from 'react'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import cart from '../assets/images/icon-cart.svg'
import '../styles/Info.scss'

const Info = (props) => {

    const [qty,setQty] = useState(0);

    const handleSubmit =()=>{
        props.add({
            name:props.name,
            des:props.description,
            price:props.price,
            oldprice:props.oldprice,
            quantity:qty
        })
    }

    return (
        <div className='info'>
            <p className='comp_name'>SNEAKER COMPANY</p>
            <h1 className='name'>{props.name}</h1>
            <p className='description'>{props.des}</p>
            <div className='price'>
                <h2>${props.price} </h2>  
                <div>50%</div>
            </div>
            <h4 className='oldPrice' >${props.oldprice}</h4>
            <div className='btn-group'>
                <div className='qty-btn'>
                    <img  src={minus} alt="minus" onClick={()=>{setQty(prev=>{
                        if(qty>0){
                            prev = prev-1
                        }
                        return prev
                        })}}/>
                    {qty}
                    <img src={plus} alt="plus" onClick={()=>{setQty(prev=>prev+1)}}/>
                </div>
                <div onClick={handleSubmit} className="addCartBtn">
                    <img src={cart} alt="cart icon" />
                    Add to cart
                </div>
            </div>
        </div>
    )
}

export default Info
