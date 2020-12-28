import React, { useState } from "react";
import Header from "../Header";
import { Button } from "react-bootstrap";
import "./style.css";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  document.body.style.backgroundColor = "#f4f4f4";
  const products = useSelector((state) => state.cartReducer);

  var grandTotal = products.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Header />
      <div className="checkout-container">
        <div className="initial-content">
          <p>
            <strong>Pay faster for all your shopping needs</strong>{" "}
            <span className="text-danger">with Amazon Pay balance</span>
            <br />
            Get Instant refund on cancellations | Zero payment failures
          </p>
        </div>
        <div className="main-div">
          <div className="cart-products">
            <h3>Shopping Cart</h3>
            <hr />
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <CartProduct
                    id={product.productID}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                  />
                );
              })
            ) : (
              <div className="empty-basket-container">
                <img
                  src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                  alt=""
                  className="img-fluid empty-basket-image"
                />
                <p>Your Amazon Basket is empty</p>
              </div>
            )}
          </div>
          <div className="sub-total">
            <div className="purchase-protection bg-white">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="subtotal-main bg-white my-3 text-center px-2 py-4">
              <p>
                Subtotal ({products.length} items ):{" "}
                <strong>
                  <CurrencyFormat
                    value={grandTotal}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </strong>
              </p>
              <Button
                variant="warning"
                className="form_button addToCartBtn"
                onClick={() => {
                  alert("I am just a Clone Brooo :)");
                }}
              >
                Proceed to Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
