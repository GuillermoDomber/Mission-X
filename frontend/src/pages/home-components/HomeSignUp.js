import { useState, React } from "react";
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
    // console.log(signUpUser);
    signup({ type, ...signUpUser });
  };
  return (
    <form className="home-column home-flex-center" onSubmit={handleSignUp}>
      <input
        className="input"
        name="username"
        onChange={handleUserInput}
        type="text"
        placeholder="User Name"
        required
      ></input>

      <input
        className="input"
        name="email"
        onChange={handleUserInput}
        type="email"
        placeholder="Email Address"
        required
      ></input>

      <input
        className="input"
        name="password"
        onChange={handleUserInput}
        type="password"
        placeholder="Password"
        required
      ></input>

      <input
        className="input"
        name="password"
        onChange={handleUserInput}
        type="password"
        placeholder="Confirm Password"
        required
      ></input>
      <button className="button button-accent button-margin" type="submit">
        Sign Up
      </button>
    </form>
  );
}
