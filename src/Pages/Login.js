import React from "react";
import "./Login.css";
class Login extends React.Component {
  state = {
    userid: "",
    pwd: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {};

  render() {
    return (
      <div className="login">
        <div className="logo">
          <img src={"/blueflower.png"} alt="picture" />
        </div>
        <div>
          <h1 className="greet"> Welcome </h1>
          <form onSubmit={this.handleSubmit}>
            <label for="userid">User ID </label>
            <input type="text" name="userid" onChange={this.handleChange} />
            <label for="password"> Password</label>
            <input type="password" name="pwd" onChange={this.handleChange} />
            <p className="forgotPwd">
              {" "}
              <a href="https://www.google.com/"> Forgot your password? </a>
            </p>
            <div class="center">
              <button id="login-button" onSubmit={this.handleSubmit}>
                {" "}
                LOG IN
              </button>
              <button id="signUp-button" onSubmit={this.handleSubmit}>
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
