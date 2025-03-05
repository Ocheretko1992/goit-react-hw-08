import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operation";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav className={s.wrapper}>
      <div className={s.navContact}>
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
      </div>

      {user.email && <h4>{user.email}</h4>}

      <div className={s.navRegist}>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="register">
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="login">
          Login
        </NavLink>
      </div>

      {isLoggedIn && (
        <button className={s.button} onClick={() => dispatch(logoutThunk())}>
          Logout
        </button>
      )}
    </nav>
  );
};
export default AppBar;
