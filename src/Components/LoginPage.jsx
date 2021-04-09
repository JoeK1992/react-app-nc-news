import React, {useState} from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import {Link} from "@reach/router";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


function validateForm() {
    return email === "jessjelly@hotmail.com" && password === "password";
}

function handleSubmit(event) {
    
}

return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to= "/Home">
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;

