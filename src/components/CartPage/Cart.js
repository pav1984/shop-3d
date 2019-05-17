import React from "react";
import Title from "../Title";
import CartColumns from "../CartPage/CartColumns";
import CartList from "../CartPage/CartList";
import CartTotals from "../CartPage/CartTotals";
import { ProductConsumer } from "../../context/context";
import CartSummary from "../CartPage/CartSummary";
const Cart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { summary } = value;
        if (summary) {
          return (
            <section className="py-5">
              <div className="container">
                <Title title="your cart items" center />
              </div>
              <CartColumns />
              <CartList />
              <CartTotals />
            </section>
          );
        } else {
          return (
            <section className="py-5">
              <div className="container">
                <Title title="your cart items" center />
              </div>
              <CartSummary />
            </section>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Cart;
