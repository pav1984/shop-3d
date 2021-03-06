import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context/context";

const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;

        return (
          <ProductWrapper
            best={product.bestseller}
            brandnew={product.brandnew}
            className="col-10 mx-auto col-sm-8 col-md-8 col-lg-4 my-3 text-center"
          >
            <div className="card">
              <span className="best mar" />
              <span className="brand-new" />
              <div className="img-container">
                <img
                  src={product.image}
                  className="card-img-top p-5"
                  alt="product"
                  style={{ height: "320px" }}
                />
                <div className="product-icon">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
};
const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
    cursor: pointer;
  }
  .card .best::after {
    content: "bestseller";
    opacity: ${props => (props.best ? 1 : 0)};
    padding: 0.5rem;
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    outline: 2px solid var(--primaryColor);
    outline-offset: 2px;
  }
  .card .brand-new::after {
    content: "new product";
    opacity: ${props => (props.brandnew ? 1 : 0)};
    padding: 0.5rem;
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    outline: 2px solid var(--primaryColor);
    outline-offset: 2px;
    border: none;
  }
  .card .mar {
    margin-top: 2rem;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
  .product-icon {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--mainHover);
    background: var(--darkGrey);
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .card:hover .product-icon {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export default Product;
