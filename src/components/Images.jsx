import React, { useState } from 'react'
import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'
import pre_img1 from '../assets/images/image-product-1-thumbnail.jpg'
import pre_img2 from '../assets/images/image-product-2-thumbnail.jpg'
import pre_img3 from '../assets/images/image-product-3-thumbnail.jpg'
import pre_img4 from '../assets/images/image-product-4-thumbnail.jpg'
import close from '../assets/images/icon-close.svg'
import f_arrow from '../assets/images/icon-next.svg'
import b_arrow from '../assets/images/icon-previous.svg'
import '../styles/Images.scss'

const Images = (props) => {

  const [image,setImage] = useState(props.img)
  const [zoom,setZoom] = useState(false)
  const [index,setIndex] = useState(0)
  const images = [img1,img2,img3,img4]

  function handleClick(n){
    setImage(images[n])
    setIndex(n)
  }

  function handleNext(){
    setIndex((prev)=>{
      return prev == images.length-1 ? 0 : prev+1
    })
  }

  function handleprev(){
    setIndex((prev)=>{
      return prev == 0 ? images.length -1 : prev-1
    })
  }

  return (
    <div className='product-img'>
        <img src={image} alt="product image big" onClick={()=>{setZoom(true)}}/>

        <div className='product-preview'>
          <div className={index == 0 ? 'selected': ''}>
            <img src={pre_img1} alt="product preview image 1" onClick={()=>{handleClick(0)}}/>
          </div>
          <div className={index == 1 ? 'selected': ''}>
            <img src={pre_img2} alt="product preview image 2" onClick={()=>{handleClick(1)}}/>
          </div>
          <div className={index == 2 ? 'selected':''}>
            <img src={pre_img3} alt="product preview image 3" onClick={()=>{handleClick(2)}}/>
          </div>
          <div className={index == 3 ? 'selected' : ''}>
            <img src={pre_img4} alt="product preview image 4" onClick={()=>{handleClick(3)}}/>
          </div>
        </div>

        {
          zoom 
          && 
          <div className='zoom-preview'>
            <img className='close' src={close} alt=""  onClick={()=>{
              setZoom(false)
            }}/>

            <div className='main-panel'>
              <div className='arrow' onClick={handleprev}>
                <img src={b_arrow} alt="" />
              </div>
              <img src={images[index]} alt="" />
              <div className='arrow' onClick={handleNext}>
                <img src={f_arrow} alt="" />
              </div>
            </div>
          </div>
        }
        
    </div>
  )
}

export default Images
