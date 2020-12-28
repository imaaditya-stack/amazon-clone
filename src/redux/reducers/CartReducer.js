/* eslint-disable no-unreachable */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../actions/types";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  const existingProduct = state.find(
    (item) => item.productID === action.payload.productID
  );
  const index = state.findIndex(
    (item) => item.productID === action.payload.productID
  );
  switch (action.type) {
    case ADD_TO_CART: {
      if (existingProduct) {
        const cart = state.filter(
          (item) => item.productID !== existingProduct.productID
        );
        return [
          ...cart,
          { ...existingProduct, quantity: existingProduct.quantity + 1 },
        ];
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case REMOVE_FROM_CART: {
      return [...state].filter(
        (product) => product.productID !== action.payload.productID
      );
    }

    case INCREMENT: {
      const newCart = state.filter(
        (item) => item.productID !== existingProduct.productID
      );
      if (index >= 0) {
        newCart.splice(index, 0, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        });
      }
      return newCart;
    }

    case DECREMENT: {
      if (existingProduct.quantity === 1) {
        return state.filter(
          (item) => item.productID !== existingProduct.productID
        );
      } else {
        const newCart = state.filter(
          (item) => item.productID !== existingProduct.productID
        );
        if (index >= 0) {
          newCart.splice(index, 0, {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          });
        }
        return newCart;
      }
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
