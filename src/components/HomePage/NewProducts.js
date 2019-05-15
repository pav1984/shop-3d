import React from "react";
import Product from "../Product";
import Title from "../Title";
import { ProductConsumer } from "../../context/context";

const NewProducts = () => {
  return (
    <section>
      <div className="container">
        <Title title="new products" center="true" />
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const { brandNewProducts } = value;
              return brandNewProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
