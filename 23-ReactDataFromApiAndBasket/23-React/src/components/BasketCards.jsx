import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BasketCards = () => {
  let basket = JSON.parse(localStorage.getItem('basket')) || [];
  let [basketItems, setBasketItems] = useState(basket);
  


  return (
    <div className='right'>
      <h2>Your Basket </h2>
      <div className="total">
        <h3>Total Sum: <span id="total-price">{basketItems.reduce((acc, elem) => acc + elem.count * Number(elem.unitPrice), 0)} $</span></h3>
        <button className='deleteAllCard' onClick={(e)=>{
          localStorage.removeItem("basket")
          setBasketItems([])
        }}>Delete All</button>
      </div>
      <div className="items">
        {
          basketItems.map((elem) => {
            return(
              <div key={uuidv4()} className='card'>
                <div className="name">Name -{elem.name} </div>
                <div className="price">Price - {elem.unitPrice} $</div>
                <button className="decrease" onClick={() => {
                  let updatedBasketItems = basketItems.map((item) => {
                    if (item.id === elem.id && item.count > 1) {
                      return { ...item, count: item.count - 1 };
                    }
                    return item;
                  });
                  setBasketItems(updatedBasketItems);
                  localStorage.setItem("basket",JSON.stringify(updatedBasketItems))
                }}>-</button>
                <span className='countCard'>{elem.count}</span>
                <button className="increase" onClick={()=>{
                  let updatedBasketItems=basketItems.map((item)=>{
                    if(elem.id==item.id && item.count>0){
                      return {...item,count: item.count+1}
                    }
                    return item
                  })
      
                  setBasketItems(updatedBasketItems)
                  localStorage.setItem("basket",JSON.stringify(updatedBasketItems))

                }}>+</button>
                <button className="delete" onClick={()=>{
                  let delFilter=basketItems.filter((item)=>item.id!==elem.id)
                  setBasketItems(delFilter)
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
