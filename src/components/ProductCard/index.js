import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StarRateIcon from "@material-ui/icons/StarRate";
import CurrencyFormat from "react-currency-format";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";

function ProductCard({ id, image, name, ratings, price, history }) {
  const [added, setadded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (id, name, image, price) => {
    setadded(true);
    dispatch(addToCart(id, name, image, price));
  };

  return (
    <div
      className="product_card border"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="product-content text-center">
        <img src={image} alt="" className="img-fluid mb-2" />
        <p className="p-0 m-0 product_name py-2">{name}</p>
        {Array(ratings)
          .fill(null)
          .map(() => {
            return <StarRateIcon className="rating_icon my-2" />;
          })}
        <p className="p-0 m-0 product_price mb-2">
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </p>
        {!added && (
          <Button
            variant="warning"
            className="form_button addToCartBtn"
            onClick={() => {
              handleAddToCart(id, name, image, price);
            }}
          >
            Add to Cart
          </Button>
        )}
        {added && (
          <Button
            variant="warning"
            className="form_button addToCartBtn"
            onClick={() => {
              history.push("/cart");
            }}
          >
            View Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
