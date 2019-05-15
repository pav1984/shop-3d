import React from "react";
import Product from "../Product";
import Title from "../Title";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
import BestSellerProducts from "./BestSellerProducts";
import NewProducts from "./NewProducts";
const FeaturesProducts = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center="true" />
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return featuredProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        <BestSellerProducts />
        <NewProducts />
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProducts;
