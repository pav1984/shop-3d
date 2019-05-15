import React from "react";
import { ProductConsumer } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";
const Products = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          filtredProducts,
          currentPage,
          currentProducts,
          handlePagination,
          pagesCount
        } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />

              <div className="row">
                <div className="col-10 mx-auto" />
              </div>
              <div className="row py-5 ">
                {filtredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry, no items matched your search
                  </div>
                ) : (
                  filtredProducts
                    .slice(currentProducts[0], currentProducts[1])
                    .map(product => (
                      <Product key={product.id} product={product} />
                    ))
                )}
              </div>
            </div>
            <PaginationWrapper className="d-flex justify-content-center">
              <Pagination aria-label="Page navigation example">
                <PaginationItem disabled={currentPage <= 0}>
                  <PaginationLink
                    onClick={e => handlePagination(e, currentPage - 1)}
                    previous
                    href="#"
                  />
                </PaginationItem>
                {[...Array(pagesCount)].map((page, i) => (
                  <PaginationItem active={i === currentPage} key={i}>
                    <PaginationLink
                      onClick={e => handlePagination(e, i)}
                      href="#"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                  <PaginationLink
                    onClick={e => handlePagination(e, currentPage + 1)}
                    next
                    href="#"
                  />
                </PaginationItem>
              </Pagination>
            </PaginationWrapper>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

const PaginationWrapper = styled.div`
  .pagination {
    font-size: 1.2rem;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  .page-link {
    color: var(--primaryColor);
    font-weight: bold;
    transition: var(--mainTransition);
  }
  .page-item.active .page-link {
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
    color: var(--mainBlack);
    transition: var(--mainTransition);
    outline: none;
  }
  .page-link:focus {
    box-shadow: none;
  }
`;

export default Products;
