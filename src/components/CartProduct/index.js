import React from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Currency from "../Currency";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../../redux/actions/actions";
import "./style.css";

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
        className="cart__product mb-5"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <div className="cart__product-image m-auto">
          <Image src={image} alt="" className="img-fluid text-center" />
        </div>
        <div className="cart__product-info">
          <p className="pr-2 cart__product-name m-0">{name}</p>
          <br />
          <div className="cart__product-quantity-toogles">
            <Button
              variant="warning"
              className="button--global"
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
              className="button--global"
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
            className="button--global"
            onClick={() => {
              handleRemoveFromCart(id);
            }}
            size="sm"
          >
            Remove
          </Button>
        </div>
        <div className="cart__product-price">
          <p className="p-0 m-0 mb-2">
            <Currency price={price} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
