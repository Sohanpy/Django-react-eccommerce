import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authLogin } from "../store/actions/auth";

import { Alert, Button, Container, Form } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;
    const { token, loading, error } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="color">
        <Container>
          <h1 className="text-center mt-2">Login</h1>
          <hr />
          {error && (
            <Alert variant="danger">
              <Alert.Heading>
                Hey, please enter valid account informations
              </Alert.Heading>
            </Alert>
          )}

          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mt-5" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                autoComplete="off"
                onChange={this.handleChange}
                name="username"
                value={username}
                type="name"
                placeholder="Name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                autoComplete="off"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              loading={loading}
              disabled={loading}
              variant="outline-success"
              size="lg"
              block
              type="submit"
            >
              Login
            </Button>
          </Form>
          <h4 className="mt-3">
            Forget password?{" "}
            <Link style={{ textDecoration: "none" }} to="#">
              here
            </Link>
          </h4>
          <h4 className="mt-2">
            Don't Have an account ?{" "}
            <Link style={{ textDecoration: "none" }} to="/register">
              Register
            </Link>
          </h4>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
