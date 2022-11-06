
import React,{useContext} from 'react'
import { FlowerContext } from '../../context/Context'
import {ProductBasket} from '../productBasket'
import { CardBox, Description, ImageBox,Cards,ImgBox } from './style'
import { FaSave} from 'react-icons/fa';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

export const Card = () => {
    const [state,dispatch]=useContext(FlowerContext)
 
  return (
    <Cards>
        {state.basket ? (
            <ProductBasket/>
        ): ( state.object.map((value)=>{
            return(
        <CardBox key={value.id}>
            <CardBox.Top>{
                value.discount ? <Description h='20px' text='center' w='80px' bg='#46A358' color='#fff' fs='14px'>13% from</Description>:"Asl narxda"}
              
              {
                value.like ?  
                (<Description onClick={()=>dispatch({type:'heart',payload:{buyId:value.id}})} radius='50% '
                w='30px' h='30px'
                cursor='pointer'
                d='flex'
                color='red'
                justify='center'
                align='center'
                 border='1px solid #f00' 
                  fs='20px' ><AiFillHeart/></Description>):
                ( <Description onClick={()=>dispatch({type:'heart',payload:{buyId:value.id}})} radius='50% '
                w='30px' h='30px'
                d='flex'
                cursor='pointer'
                justify='center'
                align='center'
                 border='1px solid #555' 
                  fs='20px' ><AiOutlineHeart/></Description>)
              }
            
            </CardBox.Top>
            
            <ImageBox>
                <ImgBox src={value.img} alt="#" />
            </ImageBox>
            <Description>{value.name}</Description>
            <Description>Prise: {(value.price-(value.price*value.discount/100).toFixed())} <del>{value.price}</del></Description>
            {
                value.addtocart ? ( 
                <CardBox.Button onClick={()=>dispatch({type:'cansel',payload:{id:value.id}})}>
                    Cansel</CardBox.Button> ):

                ( <CardBox.Button onClick={()=>dispatch({type:'buy',payload:{buyId:value.id}})}>
                 Buy 
                <Description  fs='14px'
                bg='#fff' p='2px 5px' color='#7431F8'><FaSave/></Description>
                </CardBox.Button>)
            }
           
           
        </CardBox>
            )
        }))}
       
        
    </Cards>
  )
}
