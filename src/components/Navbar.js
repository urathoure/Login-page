import React from "react";
import SVG from "react-inlinesvg";
import logo from "../images/logo.png";
import prof from "../images/prof.svg";
import user from "../images/user.svg";
import hamburg from "../images/hamburg.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import "./Navbar.css";
const Navbar = props => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />

      <div
        style={{
          display: "flex",
          height: "5rem",
          padding: "1.25rem"
        }}
      >
        <div
          style={{
            place: "center",
            padding: "0.25rem 1.5rem 0.25rem 1.5rem",
            "font-size": "1.5rem",
            "--tw-border-opacity": "1",
            "border-color": "rgba(255, 255, 255, var(--tw-border-opacity))",
            text: "black",
            "border-top-width": "2px",
            "--tw-border-opacity": "0.6",
            "font-weight": "700"
          }}
        >
          Join as a Tutor
        </div>
        <div className="relative m-auto px-5">
          <Dropdown style={{ outline: "none" }}>
            {!props.isLogin ? (
              <div>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <SVG src={prof} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown">
                  <Dropdown.Item onClick={props.login} className="items">
                    Log in
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="items">
                    Sign up
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="items">
                    How online Tutoring works
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="items">
                    Help center
                  </Dropdown.Item>
                </Dropdown.Menu>
              </div>
            ) : (
              <div>
                <Dropdown.Toggle
                  className="p-2"
                  variant="success"
                  id="dropdown-basic"
                >
                  <SVG src={hamburg} />
                </Dropdown.Toggle>
                <Dropdown.Toggle
                  className="p-2 "
                  variant="success"
                  id="dropdown-basic"
                >
                  <SVG src={user} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={props.logout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </div>
            )}
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
