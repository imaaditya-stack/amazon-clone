/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../auth/firebase";
import "./style.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/actions";
import Loader from "react-loader-spinner";

function Login({ history, location }) {
  document.body.style.backgroundColor = "#f4f4f4";

  useEffect(() => {
    location.state && auth.signOut();
  }, []);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    setLoaded(true);
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(setUser(user));
        setLoaded(false);
        history.push("/");
      })
      .catch((error) => {
        if (error) {
          setLoaded(false);
          alert(error.message);
        }
      });
  };

  return (
    <>
      <div className="shadow-sm bg-white">
        <div className="login">
          <div className="login__logo m-auto">
            <Link to="/">
              <Image
                src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
                className="img-fluid login__logo text-center"
              />
            </Link>
          </div>
          <div className="login__main_div">
            <br />
            {loaded && (
              <div className="text-center">
                <Loader
                  type="TailSpin"
                  color="#f0c14b"
                  height={50}
                  width={50}
                />
              </div>
            )}

            <p className="login__loginText bold-text">Login</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="bold-text form-label">
                  Email or mobile phone number
                </Form.Label>
                <Form.Control
                  type="email"
                  size="sm"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="bold-text form-label">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  size="sm"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant="warning"
                className="btn-block form_button"
                size="sm"
                type="submit"
              >
                Login
              </Button>
            </Form>

            <p className="login__statement">
              By continuing, you agree to Amazon's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice.</span>
            </p>
          </div>
          <div className="login__newToAmazon text-center">
            <p className="mt-3 text-muted">New to Amazon?</p>
            <Button
              variant="light"
              className="btn-block newAccountBtn"
              size="sm"
              href="/signup"
            >
              Create your Amazon account
            </Button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
