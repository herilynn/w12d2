import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <button>
          <NavLink to="/login">Login</NavLink>
        </button>
        <button>
          <NavLink to="/signup">Sign Up</NavLink>
        </button>
      </>
    );
  }

  return (
    <ul className="navigation">
      <li>
        <NavLink exact to="/" className="home">
        <i className="fa-solid fa-house"></i>
        </NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
