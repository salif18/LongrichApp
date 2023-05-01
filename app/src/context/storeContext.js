import { createContext, useState } from "react";
import { messagesData } from "../data/MessagesData";

const defaultValue = {
  userId: '',
  token: "",
  login: () => {},
  logout: () => {},
};

export const StoreContext = createContext(defaultValue);

export const StoreContextProvider = (props) => {
  
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [messages, setMessages] = useState(messagesData);
  const [orders ,setOrders] = useState([])

 
  //Theme
  const [sombre, setSombre] = useState(false);
  const toggleTheme = () => {
    setSombre(!sombre);
  };

  const theme = {
    backgroundColor: sombre ? "#000" : "#fffa",
    color: sombre ? "#fffa" : "#000",
    btn: sombre ? "#222222" : "#000",
    barre: sombre ? "#dcdcdc20":"#fffa",
  };

  //login et logout
  const handlerlogin = (userId, token) => {
    setToken(token);
    setUserId(userId);
  };

  const handlerLogout = () => {
    setToken(null);
    setUserId(null);
  };

  //add cart et del cart
  const addCart = (item) => {
    setCart([...cart, { ...item, quantity: quantity }]);
  };

  const delCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  //increment decrement single cart
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  //incre decre in Cart
  const increCart = (item) => {
    setCart(
      cart.map((item_2) =>
        item_2._id === item._id
          ? { ...item_2, quantity: item_2.quantity + 1 }
          : item_2
      )
    );
  };

  const decreCart = (item) => {
    setCart(
      cart.map((item_2) =>
        item_2._id === item._id
          ? { ...item_2, quantity: item_2.quantity - 1 }
          : item_2
      )
    );
  };

  //calcul amount
  const amount = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const contextValue = {
    userId: userId,
    token: token,
    login: handlerlogin,
    logout: handlerLogout,
    cart: cart,
    setCart:setCart,
    quantity: quantity,
    amount: amount,
    addCart: addCart,
    delCart: delCart,
    increment: increment,
    decrement: decrement,
    increCart: increCart,
    decreCart: decreCart,
    messages: messages,
    sombre: sombre,
    theme: theme,
    toggleTheme: toggleTheme,
    orders:orders,
    setOrders:setOrders
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
