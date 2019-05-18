import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";

const ProductsFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          sortByNameAtoZ,
          sortByNameZtoA,
          sortAscendingPrice,
          sortDescendingPrice
        } = value;

        return (
          <FilterWrapper>
            <div className="row my-3">
              <div className="col-6">
                <h4 className="text-title">Sort by:</h4>
                <ul className="p-0">
                  <li className="text-main" onClick={sortByNameAtoZ}>
                    Product name: A - Z
                  </li>
                  <li className="text-main" onClick={sortByNameZtoA}>
                    Product name: Z - A
                  </li>
                  <li className="text-main" onClick={sortAscendingPrice}>
                    Product price: low to high
                  </li>
                  <li className="text-main" onClick={sortDescendingPrice}>
                    Product price: high to low
                  </li>
                </ul>
              </div>
            </div>
          </FilterWrapper>
        );
      }}
    </ProductConsumer>
  );
};
const FilterWrapper = styled.div`
  ul {
    list-style: none;
    cursor: pointer;
  }
  li {
    padding-bottom: 0.5rem;
  }
  li:hover {
    text-decoration: underline;
  }
`;
export default ProductsFilter;
