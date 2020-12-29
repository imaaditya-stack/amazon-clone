import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import EmptyCart from "../../components/CartEmpty";
import CartSubtotal from "../../components/CartSubtotal";
import "./style.css";

function Checkout() {
  document.body.style.backgroundColor = "#f4f4f4";

  const products = useSelector((state) => state.cartReducer);

  var subTotal = products.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Header />
      <div className="cart__initial-content">
        <p>
          <strong>Pay faster for all your shopping needs</strong>{" "}
          <span className="text-danger">with Amazon Pay balance</span>
          <br />
          Get Instant refund on cancellations | Zero payment failures
        </p>
      </div>
      <div className="cart__main-div">
        <div className="cart__products">
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
            <EmptyCart />
          )}
        </div>
        <CartSubtotal subTotal={subTotal} noOfItems={products.length} />
      </div>
    </>
  );
}

export default Checkout;
