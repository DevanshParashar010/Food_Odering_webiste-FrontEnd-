import { createContext, useReducer, useState } from "react";

export const ItemList = createContext({
  list: [],
  addToCart: () => {},
  deleteItem: () => {},
});
const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
};

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { product, productId, sum, Stitle, count } = action.payload;
    let floatPrice = sum * count;

    let cartProduct;
    cartProduct = {
      id: product.id + Stitle,
      title: product.title,
      desc: product.desc,
      img: product.img,
      price: parseFloat(floatPrice.toFixed(2)),
      Subtitle: Stitle,
      Producr_quantity: count,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  } else if (action.type === "REMOVE_CART") {
    let { id, Stitle } = action.payload;
    let updatedCart = state.cart.filter((curItem) => curItem.id !== id);
    console.log(updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state;
};

const ItemListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product, productId, sum, Stitle, count) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, productId, sum, Stitle, count },
    });
  };
  const removeItem = (id, Stitle) => {
    dispatch({ type: "REMOVE_CART", payload: { id, Stitle } });
  };
  // const [count, setCount] = useState(1);
  // function decrease() {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // }
  // function increase() {
  //   if (count < 5) {
  //     setCount(count + 1);
  //   }
  // }

  return (
    <ItemList.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </ItemList.Provider>
  );
};

export default ItemListProvider;
