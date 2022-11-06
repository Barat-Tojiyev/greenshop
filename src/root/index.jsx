import React from 'react'
import { Card } from '../Components/Card'
import { Context } from '../context/Context'
import { Navbar } from '../Components/Navbar'


export const Root = () => {

  
  return (
    <div className='container'>
      <Context>
        <Navbar/>     
        <Card/>
        
      </Context>
      
    </div>
  )
}
