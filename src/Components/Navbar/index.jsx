import React,{useContext} from 'react'
import { NavbarBox,Description } from './style'
import logo from './icon/logo.svg'
import { FlowerContext } from '../../context/Context'

export const Navbar = () => {
  const [state,dispatch]=useContext(FlowerContext)
  return (    
      <NavbarBox>
      <NavbarBox.Logo>
        <img src={logo} alt="#" />
        <Description 
        ml='5px' fw='700'
        color='#46A358'>
Greenshoop
        </Description>
      </NavbarBox.Logo>
      
        <NavbarBox.UL>
          <NavbarBox.LI>Home</NavbarBox.LI>
          <NavbarBox.LI>Shop</NavbarBox.LI>
        </NavbarBox.UL>
      
      <div>
        <NavbarBox.Button onClick={()=>dispatch({type:'basket'})}>Basket {state.products.length}</NavbarBox.Button>
      </div>

        </NavbarBox>
      
    
  )
}
