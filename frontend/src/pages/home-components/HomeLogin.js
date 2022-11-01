import { useState, React } from "react";
import { login } from "../../api/auth";

export default function HomeLogin({ type }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  function handleUserInput(event) {
    setLoggedInUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loggedInUser);
    login({ type, ...loggedInUser });
  };
  return (
    <form onSubmit={handleLogin}>
      <label>Your username: </label>
      <input
        name="username"
        onChange={handleUserInput}
        type="text"
        required
      ></input>
      <label>Your password: </label>
      <input
        name="password"
        onChange={handleUserInput}
        type="password"
        required
      ></input>
      <button type="submit">Login</button>
    </form>
  );
}
