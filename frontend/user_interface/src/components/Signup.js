import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Container, Form, Row, Col } from "react-bootstrap";

class SignUp extends Component {
  render() {
    return (
      <div className="color">
        <Container>
          <h1 className="text-center mt-2">Create new account</h1>
          <hr />

          <Form className="mt-5">
            <Form.Group className="mt-5" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Button className="mt-3" variant="outline-success" size="lg" block>
              Sign Up
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SignUp;
