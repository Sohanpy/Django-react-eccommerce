import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/auth";
import { Button, Dropdown, DropdownButton, Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-02.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" React Bootstrap"}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Products</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Conatct</Nav.Link>
          </Nav>
          <DropdownButton title="Cart" id="dropdown-menu-align-right">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
          {authenticated ? (
            <>
              <Button
                onClick={() => this.props.logout()}
                className="mx-1"
                variant="outline-primary"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button className="mx-1" variant="outline-primary">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-primary">Register</Button>
              </Link>
            </>
          )}
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
