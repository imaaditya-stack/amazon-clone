import React, { useState, useEffect } from "react";
import { Button, Navbar, Nav, FormControl, Image } from "react-bootstrap";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const [user, setUser] = useState(null);

  const userData = useSelector((state) => state.userReducer);
  const products = useSelector((state) => state.cartReducer);

  useEffect(() => {
    userData ? setUser(userData.currentUser) : setUser(null);
  }, [userData]);

  return (
    <>
      <Navbar expand="lg" className="navbar-dark header">
        <Navbar.Brand as={Link} to={{ pathname: "/" }}>
          <Image
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="img-fluid header__logo"
          />
          <span className="in-text">.in</span>
        </Navbar.Brand>
        <Navbar.Toggle className="mb-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link href="#home">
              <Button className="header__selectAddress">
                <span className="ml-3">Hello</span>
                <span className="font-weight-bold">
                  <RoomIcon className="location_icon" />
                  Select your address
                </span>
              </Button>
            </Nav.Link>
            <Nav.Link className="header__searchBar">
              <div className="d-flex align-items-center">
                <FormControl type="text" className="header__searchBarInput" />
                <div className="header__searchBarIcon">
                  <SearchIcon style={{ color: "#1c1c1c" }} />
                </div>
              </div>
            </Nav.Link>
            {!user && (
              <Nav.Link className="header__signIn" href="/login">
                <span>Hello, Guest</span>
                <br />
                <span className="font-weight-bold">Sign in</span>
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                className="header__signIn"
                href="#"
                as={Link}
                to={{ pathname: "/login", state: { logout: true } }}
              >
                <span>Hello, {user.displayName}</span>
                <br />
                <span className="font-weight-bold">Sign out</span>
              </Nav.Link>
            )}
            <Nav.Link
              className="header__Returns-Orders"
              as={Link}
              to={{ pathname: "/products" }}
            >
              <span>View</span>
              <br />
              <span className="font-weight-bold">Products</span>
            </Nav.Link>
            <Nav.Link className="header__Returns-Orders">
              <span>Returns</span>
              <br />
              <span className="font-weight-bold">& Orders</span>
            </Nav.Link>
            <Nav.Link
              className="header__cartIcon m-auto pl-4"
              as={Link}
              to={{ pathname: "/cart" }}
            >
              <ShoppingCartIcon style={{ fontSize: 25 }} />
              <span className="cart-total-items pl-2">{products.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
