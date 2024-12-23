import { useEffect, useState } from "react";
import { db } from "../data/db";
import { useMemo } from "react";
import { CardItem, Guitar } from "../types";

export const useCart = () => {
  const initialCart = () : CardItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [guitarras] = useState(db);
  const [cart, setCart] = useState(initialCart);



  const MAX_ITEM = 5;
  const MIN_ITEM = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item : Guitar) => {
    //busca en el array de cart y si exciste devuelve la posicion si no -1
    const itemsExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemsExist >= 0) {
      if (cart[itemsExist].quantity >= MAX_ITEM) return;
      const updatedCart = [...cart];
      updatedCart[itemsExist].quantity++;
      setCart(updatedCart);
    } else {
      const newItem : CardItem = {...item, quantity : 1}
      
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (itemId : Guitar["id"]) => {
    console.log(itemId);
    // const updatedCart = cart.filter((guitar) => guitar.id!== itemId); //inmutar el carrito original
    // setCart(updatedCart);
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== itemId));
  };

  const imcreaseQuantity = (itemId : Guitar["id"]) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((guitar) => guitar.id === itemId);
    if (itemIndex >= 0) {
      updatedCart[itemIndex].quantity++;

      setCart(updatedCart);
    }
  };

  const decrementQuantity = (itemId : Guitar["id"]) => {
    const updatedCart = [...cart];

    const itemIndex = updatedCart.findIndex((guitar) => guitar.id === itemId);
    if (itemIndex >= 0) {
      if (updatedCart[itemIndex].quantity > MIN_ITEM) {
        updatedCart[itemIndex].quantity--;
      }
    }
    setCart(updatedCart);
  };

  const remuveCart = () => setCart([]);
  //State Derivado
  const isEmty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return {
    isEmty,
    cartTotal,
    setCart,
    guitarras,
    initialCart,
    addToCart,
    removeFromCart,
    imcreaseQuantity,
    decrementQuantity,
    cart,
    remuveCart,
  };
};
