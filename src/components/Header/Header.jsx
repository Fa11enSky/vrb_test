import React from "react";
import css from "./styles.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink className={css.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
