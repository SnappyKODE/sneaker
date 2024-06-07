import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import logo from '../assets/images/logo.svg'
import cartlogo from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import delIcon from '../assets/images/icon-delete.svg'


const Navbar = (props) => {

  const [CartDialog ,SetCartDialog] = useState(false)

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // Close the side drawer or dialog box
        SetCartDialog(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  
  return (
    <>
    <nav>
      <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      
      <div className="user-section">
        {CartDialog && <div  ref={ref} className='cart-box'>
          <h2>Cart</h2>
          <hr />
          {props.data.qty == 0 ? <p className='emt'>Your cart is empty</p> :
          <>
          <div className='product'>
            <img className='productImg' src={props.data.img} alt="" />
            <div>
              <p>{props.data.name}</p>
              <p>${props.data.price} x {props.data.qty} : <span>${props.data.price * props.data.qty}</span></p>
            </div>
    
            <img className='delete' src={delIcon} alt="" onClick={()=>{props.del()}}/>
          </div>
          <button className='CheckoutBtn'>Checkout</button>
          </>
          }
          
        </div>}
        <div>
        <div className='cart-notfi'>{props.data.qty >0 ? props.data.qty : 0}</div>
          <img className='cart' src={cartlogo} alt="cart" onClick={()=>{CartDialog ? SetCartDialog(false) : SetCartDialog(true) }}/>
        </div>
        
        <img className="profile" src={avatar} alt="avatar" />

      </div>

    </nav>
    <hr />
    </>
  )
}

export default Navbar
