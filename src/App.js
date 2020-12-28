/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import home from "./containers/home/home";
import Login from "././components/Login";
import Signup from "././components/Signup";
import Products from "./containers/products/products";
import Cart from "./components/Cart";
import { setUser } from "./redux/actions/actions";
import { useDispatch } from "react-redux";

import { auth } from "./auth/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
