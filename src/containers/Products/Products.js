/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { Products } from "../../amazon";
import "./style.css";

function ProductsContainer({ history }) {
  document.body.style.backgroundColor = "#f4f4f4";
  return (
    <>
      <Header />
      <div className="products__container my-5">
        {Products.map((product) => {
          return (
            <ProductCard
              id={product.price}
              name={product.name}
              image={product.image}
              ratings={product.ratings}
              price={product.price}
              history={history}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductsContainer;
