import React, { useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import reducer from './Reducer';

const BasketCards = () => {
  let basket = JSON.parse(localStorage.getItem('basket')) || [];


  const [state,dispatch]=useReducer(
    reducer,

    {
      basketItems:basket,
    }

  )

  return (
    <div className='right'>
      <h2>Your Basket </h2>
      <div className="total">
        <h3>Total Sum: <span id="total-price">{state.basketItems.reduce((acc, elem) => acc + elem.count * Number(elem.unitPrice), 0)} $</span></h3>
        <button className='deleteAllCard' onClick={(e)=>{
          localStorage.removeItem("basket")
          dispatch({type:"SetBasketItem", basketItems:[]})
        }}>Delete All</button>
      </div>
      <div className="items">
        {
          state.basketItems.map((elem) => {
            return(
              <div key={uuidv4()} className='card'>
                <div className="name">Name -{elem.name} </div>
                <div className="price">Price - {elem.unitPrice} $</div>
                <button className="decrease" onClick={() => {
                  let updatedBasketItems = state.basketItems.map((item) => {
                    if (item.id === elem.id && item.count > 1) {
                      return { ...item, count: item.count - 1 };
                    }
                    return item;
                  });
                  dispatch({type:"SetBasketItem", basketItems:updatedBasketItems});
                  localStorage.setItem("basket",JSON.stringify(updatedBasketItems))
                }}>-</button>
                <span className='countCard'>{elem.count}</span>
                <button className="increase" onClick={()=>{
                  let updatedBasketItems=state.basketItems.map((item)=>{
                    if(elem.id==item.id && item.count>0){
                      return {...item,count: item.count+1}
                    }
                    return item
                  })
      
                  dispatch({type:"SetBasketItem", basketItems:updatedBasketItems})
                  localStorage.setItem("basket",JSON.stringify(updatedBasketItems))

                }}>+</button>
                <button className="delete" onClick={()=>{
                  let delFilter=state.basketItems.filter((item)=>item.id!==elem.id)
                  dispatch({type:"SetBasketItem",basketItems:delFilter})
                  localStorage.setItem("basket",JSON.stringify(delFilter))
                }}>Delete</button>
              </div>

              
            )
          })
        }
      </div>
    </div>
  );
};

export default BasketCards;