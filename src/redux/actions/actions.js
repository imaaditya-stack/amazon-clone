import {
    SET_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
} from "./types";

const setUser = (currentUser) => ({
    type: SET_USER,
    payload: {
        currentUser,
    },
});

const addToCart = (productID, name, image, price) => ({
    type: ADD_TO_CART,
    payload: {
        productID,
        name,
        image,
        price,
    },
});

const removeFromCart = (productID) => ({
    type: REMOVE_FROM_CART,
    payload: {
        productID,
    },
});

const incrementItem = (productID) => ({
    type: INCREMENT_QUANTITY,
    payload: {
        productID,
    },
});

const decrementItem = (productID) => ({
    type: DECREMENT_QUANTITY,
    payload: {
        productID,
    },
});

export { setUser, addToCart, removeFromCart, incrementItem, decrementItem };