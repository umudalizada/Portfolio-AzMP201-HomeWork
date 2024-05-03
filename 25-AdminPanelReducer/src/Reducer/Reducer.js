function reducer(state, action) {
  switch (action.type) {
    case "SetData":
      return { ...state, allData: action.allData };
    case "SetDataSearch":
      return { ...state, allDataSearch: action.allDataSearch };
    case "SetDelete":
      let filterDelete = state.allDataSearch.filter(item => item.id !== action.id);
      return { ...state, allDataSearch: filterDelete };
    case "SortAz":
    case "SortZa":
    case "SortPriceLow":
    case "SortPriceHigh":
    case "SortRaitingLow":
    case "SortRaitingHigh":
    case "SortCountLow":
    case "SortCountHigh":
      return { ...state, allDataSearch: action.allDataSearch };
    case "SearchWord":
      let searchFind = state.allData.filter(elem => elem.title.includes(action.allDataSearch));
      return { ...state, allDataSearch: searchFind };
    default:
      return state;
  }
}

export default reducer;