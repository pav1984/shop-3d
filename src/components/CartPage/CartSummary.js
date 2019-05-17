import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
const CartSummary = () => {
  return (
    <ProductConsumer>
      {value => {
        const { handleSummary } = value;
        return (
          <>
            <div className="container mx-auto text-center">
              <h1 className="text-title m-5">
                Thank you. Your order has been completed!
              </h1>
              <Link onClick={handleSummary} to="/" className="main-link">
                back to home page
              </Link>
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};

export default CartSummary;
