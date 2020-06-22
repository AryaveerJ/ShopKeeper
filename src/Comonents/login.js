import React from "react";
import "./profile.css";
import NavBar from "./navbar";

class Login extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="profile">
          <h1>Login page</h1>
        </div>
      </div>
    );
  }
}

export default Login;
