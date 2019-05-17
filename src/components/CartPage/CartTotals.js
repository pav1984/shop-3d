import React from "react";
import { ProductConsumer } from "../../context/context";
const CartTotals = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const {
              clearCart,
              cartSubTotal,
              cartTax,
              cartTotal,
              handleSummary,
              handelDiscount,
              text,
              discountCode,
              discount,
              cart
            } = value;
            return (
              <div className="col text-title text-right my-4">
                <button
                  className="btn btn-outline-danger text-capitalize my-4 d-block mx-auto"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <input
                  type="text"
                  placeholder="discount code"
                  className="my-4 text-center p-2"
                  value={cart.length > 0 ? text : ""}
                  onChange={handelDiscount}
                  style={{
                    background: text === discountCode && "#4cd137",
                    outline: "none"
                  }}
                />
                <h3
                  style={{
                    display: text === discountCode ? "block" : "none"
                  }}
                >
                  discount: 15%
                </h3>
                <h3>subtotal: ${cartSubTotal}</h3>
                <h3>tax: ${cartTax}</h3>
                <h3>
                  total: $
                  {text === discountCode
                    ? cartTotal - cartTotal * discount
                    : cartTotal}
                </h3>
                <button
                  className="btn btn-outline-danger text-uppercase my-4  mr-auto px-5"
                  onClick={cart.length > 0 ? handleSummary : undefined}
                >
                  pay
                </button>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default CartTotals;
