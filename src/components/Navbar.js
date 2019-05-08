import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
// import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { cartItems, handleSidebar, handleCartOpen } = value;
          return (
            <NavWrapper>
              <div className="nav-center">
                <div>
                  <FaBars className="nav-icon" onClick={handleSidebar} />
                </div>

                {/* <img src={logo} alt="tech-store-lego" /> */}
                <h1 className="text-logo">
                  <em style={{ color: "#fbc531", fontSize: "60px" }}>3</em>
                  <em style={{ color: "#c23616" }}>D</em>
                  <em style={{ color: "#2f3640", fontSize: "40px" }}>
                    Printers
                  </em>
                </h1>
                <div className="nav-cart">
                  <FaCartPlus className="nav-icon" onClick={handleCartOpen} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    </>
  );
};

const NavWrapper = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 2rem;
    cursor: pointer;
    color: var(--primaryColor);
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    top: -10px;
    left: 10px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: var(--darkGrey);
    text-align: center;
    line-height: 21px;
    font-size: 13px;
    color: var(--mainWhite);
  }
`;
export default Navbar;
