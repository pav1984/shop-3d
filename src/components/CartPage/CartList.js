import React from "react";
import CartItem from "../CartPage/CartItem";
import { ProductConsumer } from "../../context/context";

const CartList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { removeItem, decrement, increment, cart } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    your cart is empty
                  </h1>
                );
              }
              return (
                <>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                    />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
};

export default CartList;
