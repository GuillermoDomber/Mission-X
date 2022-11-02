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
    // console.log(loggedInUser);
    login({ type, ...loggedInUser });
  };
  return (
    <form className="home-column home-flex-center" onSubmit={handleLogin}>
      <input
        name="username"
        onChange={handleUserInput}
        type="text"
        placeholder="User Name"
        required
      ></input>
      <input
        name="password"
        onChange={handleUserInput}
        type="password"
        placeholder="Password"
        required
      ></input>
      <button className="button button-accent" type="submit">Login</button>
    </form>
  );
}
