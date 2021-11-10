import React, { useState } from "react";
import "./Login.css";
export default function Login() {
  const [userId, setUserId] = useState("")
  const [pwd, setUserPwd] = useState("")
  function handleChange(e) {
    const { name, value } = e.target;
  }
  function handleSubmit(e) {}

  return (
    <div className="login">
      <div className="logo">
        <img src={"/blueflower.png"} alt="picture" />
      </div>
      <div>
        <h1 className="greet"> Welcome </h1>
        <form >
          <label for="userid">User ID </label>
          <input type="text" name="userid" onChange={(e) => setUserId(e.value)}  value={userId} />
          <label for="password"> Password</label>
          <input type="password" name="pwd" onChange={(e) => setUserPwd(e.value)} value={pwd} />
          <p className="forgotPwd">
            {" "}
            <a href="https://www.google.com/"> Forgot your password? </a>
          </p>
          <div class="center">
            <button id="login-button" >
              {" "}
              LOG IN
            </button>
            <button id="signUp-button" >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    
    </div>
  );
}
