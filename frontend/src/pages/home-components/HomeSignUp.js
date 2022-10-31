import { useState, React } from "react";
import axios from "axios";
import { signup } from "../../api/auth";

export default function HomeSignUp({ type }) {
  const [signUpUser, setSignUpUser] = useState({});

  function handleUserInput(event) {
    setSignUpUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(signUpUser);
    signup({ type, ...signUpUser });
  };
  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label>Your username: </label>
        <input
          name="username"
          onChange={handleUserInput}
          type="text"
          required
        ></input>
      </div>
      <div>
        <label>Your email: </label>
        <input
          name="email"
          onChange={handleUserInput}
          type="email"
          required
        ></input>
      </div>
      <div>
        <label>Your password: </label>
        <input
          name="password"
          onChange={handleUserInput}
          type="password"
          required
        ></input>
      </div>
      <div>
        <label>Confirm your password: </label>
        <input
          name="password"
          onChange={handleUserInput}
          type="password"
          required
        ></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
