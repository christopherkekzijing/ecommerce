export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "ADD_SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    // case "REMOVE_BASKET":
    //   const index = state.basket.findIndex(
    //     (basketItem) => basketItem.id === action.id,
    //   );

    //   let newBasket = [...state.basket];

    //   if (index >= 0) {
    //     newBasket.splice(index, 1);
    //   } else {
    //     console.warn("error to remove");
    //   }

    //   return {
    //     ...state,
    //     basket: newBasket,
    //   };
    case "REMOVE_BASKET":
      return {
        ...state,
        basket: state.basket.filter(
          (basketItem) => basketItem.id !== action.payload,
        ),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "INCREASE":
      let tempCart = state.basket.map((basketItem) => {
        if (basketItem.id === action.payload) {
          return { ...basketItem, amount: basketItem.amount + 1 };
        }
        return basketItem;
      });
      return { ...state, basket: tempCart };
    case "DECREASE":
      let tempCart2 = state.basket
        .map((basketItem) => {
          if (basketItem.id === action.payload) {
            return { ...basketItem, amount: basketItem.amount - 1 };
          }
          return basketItem;
        })
        .filter((basketItem) => basketItem.amount !== 0);
      return { ...state, basket: tempCart2 };

    case "GET_TOTALS":
      let { total, amount } = state.basket.reduce(
        (basketTotal, basketItem) => {
          let { price, amount } = basketItem;
          let itemTotal = price * amount;

          basketTotal.total += itemTotal;
          basketTotal.amount += amount;

          return basketTotal;
        },
        {
          total: 0,
          amount: 0,
        },
      );
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };

    default:
      return state;
  }
};
