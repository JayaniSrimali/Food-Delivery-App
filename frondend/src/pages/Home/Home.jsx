/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Header from '../../Componets/Header/Header'
import ExploreMenu from '../../Componets/ExploreMenu/ExploreMenu'

const Home = () => {

    const {category,setCategory} = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory = {setCategory}/>
     
    </div>
  )
}

export default Home
