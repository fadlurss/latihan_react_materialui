import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts/index";
import Latihan from "./Latihan/index";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Latihan />
        <Footer />
      </Fragment>
    );
  }
}
