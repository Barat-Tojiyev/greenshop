import { createContext } from "react";
import { useReducer } from "react";
import { product } from "../data/Data";

export const FlowerContext=createContext()

export const Context = ({children}) => {
    const [state,dispatch]=useReducer((state,action)=>{
      switch(action.type){

        case 'buy':
          let buyProduct=state.object.map((value)=>value.id ===action.payload.buyId && {...value, addtocart:true,quantity:1}) 
         buyProduct = buyProduct.filter((value)=> value && value)  
         const add=[...state.products,...buyProduct] 
          let reset =state.object.map ((value)=>value.id ===action.payload.buyId ? {...buyProduct[0]}:value)
             
          return { ...state,products:add, object:reset}

        case 'basket':
        
          return {...state,basket:!state.basket}

        case 'heart': 
        let heart =state.object.map((value)=> value.id===action.payload.buyId && {...value, like:!value.like} )
        heart = heart.filter((value)=>value&&value)
       let newHeart=state.object.map((value)=>value.id === action.payload.buyId ?{ ...heart[0]}:value)       
        return {...state, object:newHeart}

        case 'plus':
          let inc=state.products.map((value)=>value.id ===action.payload.id && {...value,quantity:value.quantity+1})
          inc=inc.filter((value)=>value&&value)
          let newInc= state.products.map((value)=>value.id ===action.payload.id ? {...inc[0]}:value)
          return {...state,products:newInc}
        
          case 'minus':
            let dic=state.products.map((value)=>value.id ===action.payload.id && {...value,quantity:value.quantity-1})
            dic=dic.filter((value)=>value&&value)
            let newDic= state.products.map((value)=>value.id ===action.payload.id ? {...dic[0]}:value)
            return {...state,products:newDic}

          case 'delete':
            let del =state.products.filter((value)=>value.id !== action.payload.id)
            return {...state,products:del}
            
          case 'cansel':
            let can =state.object.map((value)=>value.id === action.payload.id && {...value, addtocart:false,quantity:0})
            can = can.filter((value)=>value.id&& value.id)
            let newCan= state.object.map((value)=>value.id ===action.payload.id ? {...can[0]}:value)
            let delet =state.products.filter((value)=>value.id !== action.payload.id)
            return {...state,object:newCan,products:delet}
           
        default :
        return state
      }
    },
    {
      object:product,
      products:[],
      basket:false
    })

    
  return (
    <div>
       <FlowerContext.Provider value={[state,dispatch]}>
        {children}
       </FlowerContext.Provider>
    </div>
  )
}
