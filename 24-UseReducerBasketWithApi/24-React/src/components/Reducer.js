function reducer(state, action) {
  
  switch (action.type) {
    case "SetDatas":
      return {...state, datas:action.datas}; 


    case "SetBasketItem":
      return {...state,basketItems:action.basketItems};

    default:
      break;
  }
}

export default reducer;