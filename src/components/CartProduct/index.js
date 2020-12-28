import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../../redux/actions/actions";
import CurrencyFormat from "react-currency-format";

function CartProduct({ id, name, image, price, quantity }) {
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch(incrementItem(id));
  };
  const decrement = (id) => {
    dispatch(decrementItem(id));
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="product mb-5"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <div className="product-image m-auto">
          <img src={image} alt="" className="img-fluid text-center" />
        </div>
        <div className="product-info">
          <p className="pr-2 name m-0">{name}</p>
          <br />
          <div className="quantity-container">
            <Button
              variant="warning"
              className="form_button addToCartBtn"
              onClick={() => {
                decrement(id);
              }}
              size="sm"
            >
              -
            </Button>
            <p className="m-0 p-0 px-2 quantity">
              Quantity: <strong>{quantity}</strong>
            </p>
            <Button
              variant="warning"
              className="form_button addToCartBtn"
              onClick={() => {
                increment(id);
              }}
              size="sm"
            >
              +
            </Button>
          </div>
          <br />
          <Button
            variant="warning"
            className="form_button addToCartBtn"
            onClick={() => {
              handleRemoveFromCart(id);
            }}
            size="sm"
          >
            Remove
          </Button>
        </div>
        <div className="product-price">
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            renderText={(value) => (
              <p className="p-0 m-0 product_price mb-2">{value}</p>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
