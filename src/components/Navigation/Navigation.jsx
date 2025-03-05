import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {


  return (
    <nav className={s.navContact}>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="home">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
