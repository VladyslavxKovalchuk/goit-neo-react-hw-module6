import { useId } from "react";
import styles from "./css/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const searchBoxId = useId();
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(changeFilter(value));
  };
  const searchQuery = useSelector(selectNameFilter);

  return (
    <div className={styles.searchCard}>
      <label htmlFor={searchBoxId}>Find contacts by name</label>
      <input
        id={searchBoxId}
        className={styles.searchInput}
        type="search"
        value={searchQuery}
        onChange={(event) => {
          handleChange(event.target.value.trim().toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBox;