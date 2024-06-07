import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Product from './components/Product'

const App = () => {

  const [pdInfo,SetPdInfo] = useState({
    name:'',
    price:'',
    img:'',
    qty:'',
  })

  async function handleAdd(v,i){
    console.log(v,i);
    await SetPdInfo({
      name:v.name,
      price:v.price,
      img:i,
      qty:v.quantity,
    })
  }

  function deletion(){
    SetPdInfo({
      name:'',
      price:'',
      img:'',
      qty:'',
    })
  }

  return (
    <div>
      <Navbar data={pdInfo} del={deletion}/>
      <Product add={handleAdd}/>
    </div>
  )
}

export default App

