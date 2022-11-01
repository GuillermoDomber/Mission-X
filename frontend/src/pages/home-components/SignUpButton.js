import React from "react";

export default function SignUpButton({ onClick }) {
  return (
    <button className="button button-accent homeModal" onClick={onClick}>
      SIGN UP
    </button>
  );
}
