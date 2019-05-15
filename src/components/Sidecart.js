import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";

const Sidecart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, handleCartOpen, cart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={handleCartOpen}>
            <p>cart items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
};
const CartWrapper = styled.div`
  position: fixed;
  top: 115px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidecart;
