import "./SearchForm.scss";
import searchIcon from "../../assets/icons/search.svg";

function SearchForm() {
  return (
    <div className="search-form">
      <button className="search-form-btn" type="submit">
        <img src={searchIcon} alt="search icon" />
      </button>
      <input
        className="search-form-input"
        name="search"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchForm;
