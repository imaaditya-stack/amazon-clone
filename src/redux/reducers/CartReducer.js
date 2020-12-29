/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
} from "../actions/types";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
    const existingProduct = state.find(
        (item) => item.productID === action.payload.productID
    );

    const productIndex = state.findIndex(
        (item) => item.productID === action.payload.productID
    );

    switch (action.type) {
        case ADD_TO_CART:
            {
                if (existingProduct) {
                    alert("Product already is in the Cart !");
                    return [...state];
                } else {
                    return [...state, {...action.payload, quantity: 1 }];
                }
            }

        case REMOVE_FROM_CART:
            {
                return [...state].filter(
                    (product) => product.productID !== action.payload.productID
                );
            }

        case INCREMENT_QUANTITY:
            {
                const newCart = state.filter(
                    (item) => item.productID !== existingProduct.productID
                );
                if (productIndex >= 0) {
                    newCart.splice(productIndex, 0, {
                        ...existingProduct,
                        quantity: existingProduct.quantity + 1,
                    });
                }
                return newCart;
            }

        case DECREMENT_QUANTITY:
            {
                if (existingProduct.quantity === 1) {
                    return state.filter(
                        (item) => item.productID !== existingProduct.productID
                    );
                } else {
                    const newCart = state.filter(
                        (item) => item.productID !== existingProduct.productID
                    );
                    if (productIndex >= 0) {
                        newCart.splice(productIndex, 0, {
                            ...existingProduct,
                            quantity: existingProduct.quantity - 1,
                        });
                    }
                    return newCart;
                }
            }

        default:
            {
                return state;
            }
    }
};

export default cartReducer;