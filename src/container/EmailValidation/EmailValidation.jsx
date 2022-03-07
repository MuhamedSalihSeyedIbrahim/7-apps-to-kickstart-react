import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class EmailValidation extends Component {
  constructor(props) {
    super(props);
    this.emailValidation = this.emailValidation.bind(this);
  }

  emailValidation(event) {
    if (event.key === "Enter") {
      let emailId = event.target.value;
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      re.test(String(emailId).toLowerCase())
        ? toast.success("Hey There, your Email is nice!", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
          })
        : toast.error("Opps try differently with @. !", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
          });
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center container-fluid ">
          <div className="row mx-auto w-100 p-3 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onKeyUp={this.emailValidation}
              />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default EmailValidation;
