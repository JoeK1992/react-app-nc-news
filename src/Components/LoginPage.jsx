import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import { Link } from "@reach/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email === "jessjelly@hotmail.com" && password === "password";
  }

  function handleSubmit(event) {}

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group
          style={{ marginBottom: "0.5em" }}
          size="lg"
          controlId="email"
        >
          <Form.Label style={{ marginBottom: "10em" }}>Email: </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          style={{ marginBottom: "0.5em" }}
          size="lg"
          controlId="password"
        >
          <Form.Label style={{ marginLeft: "-1.8em" }}>Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to="/Home">
          <Button
            style={{ marginBottom: "2em", marginLeft: "1em" }}
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Link>
      </Form>
      <text>
        Email: jessjelly@hotmail.com <br />
        Password: password
      </text>
    </div>
  );
}

export default Login;
