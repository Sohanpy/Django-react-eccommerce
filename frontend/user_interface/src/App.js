import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/auth";

import Header from "./container/Navbar";
import Footer from "./container/footer";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
