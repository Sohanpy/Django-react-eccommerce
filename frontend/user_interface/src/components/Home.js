import React, { Component } from "react";

import LinearQuery from "./Loader";
import ProductsList from "./Products";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <br />
        <LinearQuery />
        <br />
        <ProductsList />
      </div>
    );
  }
}
