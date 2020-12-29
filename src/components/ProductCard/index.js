import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import Currency from "../Currency";
import "./style.css";

function ProductCard({ id, image, name, ratings, price, history }) {
  const [added, setadded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (id, name, image, price) => {
    setadded(true);
    dispatch(addToCart(id, name, image, price));
  };

  return (
    <div
      className="product__card border bg-white"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="product__info text-center">
        <Image src={image} alt="" className="img-fluid mb-2" />
        <p className="p-0 m-0 product__name py-2">{name}</p>
        {Array(ratings)
          .fill(null)
          .map(() => {
            return <StarRateIcon className="product__rating-icon my-2" />;
          })}
        <p className="product__price mb-2">
          <Currency price={price} />
        </p>
        {!added && (
          <Button
            variant="warning"
            className="button--global"
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
            className="button--global"
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
