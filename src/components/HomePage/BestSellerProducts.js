import React from "react";
import Product from "../Product";
import Title from "../Title";
import { ProductConsumer } from "../../context/context";
const BestSellerProducts = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="bestsellers" center="true" />
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const { bestsellerProducts } = value;
              return bestsellerProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
};

export default BestSellerProducts;
