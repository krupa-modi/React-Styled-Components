import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";

import {
  Container,
  FormWrappers,
  Heading1,
  FormProfile,
  FormUserDetails,
  FormButtonContainer,
  Form,
  Button,
  SmallButton,
} from "../../Design/components";

// import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // for login
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // for login onchange
  let name, value;
  const handlerChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  // for name

  // for email
  //   const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState("");

  // for password
  //   const [password, setPassword] = useState("");
  const [passworderror, setPasswordError] = useState("");

  // for success message
  const [successmsg, setSuccessMsg] = useState("");

  const handlerEmail = (e) => {
    setSuccessMsg("");
    setEmailError("");
    // setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setSuccessMsg("");
    setPasswordError("");
    // setPassword(e.target.value);
  };

  // for redirect
  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email !== "") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(login.email)) {
        setEmailError("");
      } else {
        setEmailError("Please enter valid email like:test@test.com");
      }
    } else if (login.email === "") {
      setEmailError("Email is required");
    }
    // if (login.password !== "") {
    //   const passwordRegex =
    //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
    //   if (passwordRegex.test(login.password)) {
    //     setPasswordError("");
    //     if (login.password.length >= 8) {
    //       setPasswordError("");
    //     } else {
    //       setPasswordError("Password must have at least 8 characters");
    //     }
    //   } else {
    //     setPasswordError(
    //       "password must be only characters, numeric digits, underscore and first character must be a letter"
    //     );
    //   }
    // } else if (login.password === "") {
    //   setPasswordError("Password is required");
    // }
    else {
      console.log("login");
    }
  };
  // for api integration
  const handlerPost = async (e) => {
    e.preventDefault();
    // console.log("testing....");
    // if (handleSubmit(e)) {
    // console.log("successfully");
    const { email, password } = login;

    const data = {
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:5000/api/v1/users/login", data)
      .then((res) => {
        if (res.data.message == "User logged in successfully...") {
          window.alert("Succefully Logged In");
          console.log("login-information", res);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Container style={{ height: "100vh", padding: "30px" }}>
        <Heading1>Welcome to our Login Page</Heading1>

        <FormWrappers>
          {successmsg && <div className="success-msg">{successmsg}</div>}
          <Form onSubmit={(e) => handlerPost(e)}>
            <FormProfile>
              <Icon.PersonCircle />
            </FormProfile>

            <FormUserDetails>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={login.email}
                onChange={handlerChange}
              />
              {emailerror && <div className="error-msg">{emailerror}</div>}

              <input
                type="password"
                className="form-control"
                placeholder="Enter Your password"
                name="password"
                value={login.password}
                onChange={handlerChange}
              />
              {passworderror && (
                <div className="error-msg">{passworderror}</div>
              )}
            </FormUserDetails>

            <FormButtonContainer>
              <Button
                type="submit"
                className="form-button"
                // onClick={handleSubmit}
              >
                Login
              </Button>
            </FormButtonContainer>
          </Form>
        </FormWrappers>
      </Container>
    </>
  );
};

export default Login;
