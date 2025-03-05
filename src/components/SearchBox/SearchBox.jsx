import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchBoxContainer}>
      <h3 className={s.h3}>Search contacts by name</h3>
      <input
        type="text"
        value={filter.name}
        onChange={handleChangeInput}
        className={s.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
