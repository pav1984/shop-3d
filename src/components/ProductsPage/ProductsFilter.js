import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {value => {
        const {
          sortByNameAtoZ,
          sortByNameZtoA,
          sortAscendingPrice,
          sortDescendingPrice,
          data,
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChangeFilter
        } = value;

        let companies = new Set();
        companies.add("all");
        for (let product in data) {
          companies.add(data[product]["company"]);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col mx-auto">
              <FilterWrapper>
                {/* sort By */}
                <div>
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
                {/* end sort By */}
                {/* text search */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChangeFilter}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/*end of text search */}
                {/* category search */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    onChange={handleChangeFilter}
                    value={company}
                    className="filter-item"
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end of category search */}
                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price: <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    onChange={handleChangeFilter}
                  />
                </div>
                {/* end of  price range */}
                {/* free shippping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChangeFilter}
                    checked={shipping && true}
                  />
                </div>

                {/* end of free shippping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
  ul {
    list-style: none;
    cursor: pointer;
    display: block;
    width: 100%;
  }
  li {
    padding-bottom: 0.5rem;
  }
  li:hover {
    text-decoration: underline;
  }
`;
