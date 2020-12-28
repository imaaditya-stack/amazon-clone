import {
    SET_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT,
    DECREMENT,
} from "./types";

export const setUser = (currentUser) => ({
    type: SET_USER,
    payload: {
        currentUser,
    },
});

export const addToCart = (productID, name, image, price) => ({
    type: ADD_TO_CART,
    payload: {
        productID,
        name,
        image,
        price,
    },
});

export const removeFromCart = (productID) => ({
    type: REMOVE_FROM_CART,
    payload: {
        productID,
    },
});

export const incrementItem = (productID) => ({
    type: INCREMENT,
    payload: {
        productID,
    },
});

export const decrementItem = (productID) => ({
    type: DECREMENT,
    payload: {
        productID,
    },
});