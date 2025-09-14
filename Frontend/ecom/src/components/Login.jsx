import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="shadow p-4" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center mb-4 text-success">Login to Shopcart</h3>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="success" type="submit">
              Login
            </Button>
          </div>
        </Form>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register" className="text-success">Register</Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
