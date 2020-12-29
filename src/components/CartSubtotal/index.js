import React from "react";
import { Button, Image } from "react-bootstrap";
import Currency from "../Currency";
import "./style.css";

function CartSubtotal({ subTotal, noOfItems }) {
  return (
    <div className="cart__subTotal">
      <div className="purchase__protection bg-white">
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="cart__subTotal-main-div bg-white my-3 text-center px-2 py-4">
        <p>
          Subtotal ({noOfItems} items ):{" "}
          <strong>
            <Currency price={subTotal} />
          </strong>
        </p>
        <Button
          variant="warning"
          className="button--global"
          onClick={() => {
            alert("I am just a Clone Brooo :)");
          }}
        >
          Proceed to Buy
        </Button>
      </div>
    </div>
  );
}

export default CartSubtotal;
