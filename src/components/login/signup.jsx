import React from "react";

const Signup = ({ handleSignIn }) => {
  return (
    <div className="right-side">
      <h2>Welcome!</h2>
      <p>Please fill all fields</p>
      <label htmlFor="email">
        <p>Email</p>
      </label>
      <input placeholder="Email" id="email" name="email" />
      <label htmlFor="name">
        <p>Name</p>
      </label>
      <input placeholder="Name" id="name" name="name" />
      <label htmlFor="surname">
        <p>Surname</p>
      </label>
      <input placeholder="Surname" id="surname" name="surname" />
      <label htmlFor="password">
        <p>Password</p>
      </label>
      <input placeholder="Password" id="password" name="password" />
      <label htmlFor="repeat-password">
        <p>Repeat password</p>
      </label>
      <input
        placeholder="Repeat password"
        id="repeat-password"
        name="repeat-password"
      />

      <button className="login-btn">Login</button>
      <p className="dont-have-acc">
        Already have account?{" "}
        <span onClick={() => handleSignIn()}>Sign in</span>
      </p>
    </div>
  );
};

export default Signup;
