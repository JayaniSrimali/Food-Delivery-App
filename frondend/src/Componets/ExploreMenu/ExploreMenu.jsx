/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
// eslint-disable-next-line no-unused-vars
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredientd and culinary expertise.Our mission to satisfy your cravings and elevate your dining experience.One delicious meal at a time.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                    <div  onClick = {()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                       
                    </div>
                        
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
