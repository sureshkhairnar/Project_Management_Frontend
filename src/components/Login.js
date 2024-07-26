import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./Auth.css";
import { ReactComponent as Logo } from "./Logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <p className="text-center text-white mt-3">Online Project Management</p>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Login to get started</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </Form.Group>

          <div className="d-flex justify-content-center mb-3">
            <Button
              variant="primary"
              type="submit"
              className="rounded-btn mt-3"
            >
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
