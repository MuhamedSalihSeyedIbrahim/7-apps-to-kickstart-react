import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer id="sticky-footer" className=" bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; Kick starter React</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
