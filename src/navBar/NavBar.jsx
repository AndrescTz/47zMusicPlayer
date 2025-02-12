import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <NavLink to="/">Option 1</NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/opt2">Option 2</NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/opt3">Option 3</NavLink>
        </li>
      </ul>
    </nav>
  );
}
