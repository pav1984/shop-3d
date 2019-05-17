import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.png";
import CartSection from "../components/CartPage/Cart";

const CartPage = () => {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection />
    </>
  );
};

export default CartPage;
