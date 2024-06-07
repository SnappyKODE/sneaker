import React from 'react'
import Images from './Images'
import Info from './Info'
import img1 from '../assets/images/image-product-1.jpg'

const Product = (props) => {

  const productInfo = {
    name : 'Fall Limited Edition Sneakers',
    price : 125.00,
    oldprice: 250.00,
    img:img1,
    description : "These low-profile sneakers are your perfect casual wear company companion. Featuring a durable rubber outer sole,they'll withstand everything the weather can offer."
  }

  const handleAdd = (v)=>{
    props.add(v,img1)
  }


  return (
    <div className='product'>
        <Images img = {productInfo.img}/>
        <Info name={productInfo.name}
              des={productInfo.description}
              price={productInfo.price}
              oldprice={productInfo.oldprice}
              add={handleAdd}
              />
    </div>
  )
}

export default Product
