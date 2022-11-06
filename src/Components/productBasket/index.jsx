import React,{useContext} from 'react'
import { FlowerContext } from '../../context/Context'
import { BasketCard } from './style'
import { AiOutlineDelete,AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import { Description } from '../Card/style';

export const ProductBasket = () => {
    const [state,dispatch]=useContext(FlowerContext)
  return (
    <div>
   <h4> {state.products.length ? `Siz ${state.products.length}ta mahsulot oldingiz`:
    'Siz maxsulot xarid qilmadingiz '}</h4>
     <BasketCard>
      <thead>
         <tr>
            <th>Product</th>
            <th>Tittle</th>
            <th>Price</th>
            <th>Qountitiy</th>
            <th>Total</th>
            <th>Action</th>      
         </tr>
      </thead>
      <tbody>
      {
            state?.products?.map((value)=>{
                return (
                <tr key={value.id}>
                  <BasketCard.TD><img src={value.img} height='50'  alt="#"/></BasketCard.TD>
                  <BasketCard.TD>{value.name}</BasketCard.TD>
                  <BasketCard.TD>{(value.price-(value.price*value.discount/100).toFixed())}</BasketCard.TD>
                  <BasketCard.TD>
                    <Description onClick={()=>dispatch({type:'minus',payload:{id:value.id}})}
                    color='#0a7c21'  mr='5px' d='inline'>
                      <AiFillMinusCircle/>
                    </Description>
                    
                     {value.quantity}
                    <Description onClick={()=>dispatch({type:'plus',payload:{id:value.id}})}
                    color='#127e28' ml='5px' d='inline'>
                      <AiFillPlusCircle/>
                    </Description>
                   
                  </BasketCard.TD>
                  <BasketCard.TD>
                    <Description color='#2d9445' fw='600'>{
((value.price-(value.price*value.discount/100))*value.quantity).toFixed()
                    }
                     
                    </Description>
                    
                    </BasketCard.TD>
                  <BasketCard.TD>
                    <Description
                   onClick={()=>dispatch({type:'cansel',payload:{id:value.id}})} 
                      color='red'   cursor='pointer'>
                        <AiOutlineDelete/>
                    </Description>
                    </BasketCard.TD>
                  
                </tr>
                )
            })
        }
      </tbody>
    
     </BasketCard>      
        
    </div>
  )
}
