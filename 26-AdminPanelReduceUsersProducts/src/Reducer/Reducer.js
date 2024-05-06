function reducer(state, action) {
  switch (action.type) {
    case "SetData":
      return { ...state, allData: action.allData };
    case "SetUser":
      return { ...state, allUser: action.allUser };
    case "SetDataSearch":
      return { ...state, allDataSearch: action.allDataSearch };
    case "SetUserSearch":
        return { ...state, allUserSearch: action.allUserSearch };
    case "SetDelete":
      let filterDelete = state.allDataSearch.filter(item => item.id !== action.id);
      return { ...state, allDataSearch: filterDelete };
    case "DELuser":
      let usdelete = state.allUserSearch.filter(item => item.id !== action.id);
      return { ...state, allUserSearch: usdelete };
    case "SortAz":
    case "SortZa":
    case "SortPriceLow":
    case "SortPriceHigh":
    case "SortRaitingLow":
    case "SortRaitingHigh":
    case "SortCountLow":
    case "SortCountHigh":
      return { ...state, allDataSearch: action.allDataSearch };
    case "SortNameAz":
    case "SortNameZa":
      return{...state,allUserSearch:action.allUserSearch}
    case "Admin":
      let adminfilter=state.allUserSearch.filter(elem=>elem.isAdmin==true)
      return {...state,allUserSearch:adminfilter}
      case "ToggleAdmin":
        const updatedUsers = state.allUserSearch.map(user =>
          user.id === action.id ? { ...user, isAdmin: !user.isAdmin } : user
        );
        return { ...state, allUserSearch: updatedUsers };
    default:
      return state;
  }
}

export default reducer;
