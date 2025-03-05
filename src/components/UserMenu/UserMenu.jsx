import { useDispatch } from "react-redux";
import s from "./UserMenu.module.css";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
