import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import button from "reactstrap";
import "./Login.css";
const Login = props => {
  return (
    <div>
      <Modal
        className="modal-main"
        show={props.show}
        onHide={props.handleClose}
      >
        <div className="block">
          <Button className="float-right" onClick={props.close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="16"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                n
                strokeLinejoin="round"
                strokeWidth={4}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="hidden" name="remember" value="true" />
            <div className="second-div">
              <div className="modal-body">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="both"
                  placeholder="your mail id"
                />
              </div>
              <div className="modal-body">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="both"
                  placeholder="enter password"
                />
              </div>
            </div>

            <div className="third-div">
              <div class="third-div">
                <a href="#" className="links">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button onClick={props.toggle} class="">
                Login
              </button>
              <button>Login with gmail</button>
            </div>
            <div>
              Not a member of iLRNU? &nbsp;
              <a href="#">Sign Up</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
