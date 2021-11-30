function SearchForm() {
  return (
    <form className="searchForm">
      <div>
        <input className="searchForm-input" name="search" type="text" />
        <button className="searchForm-btn" type="submit"></button>
      </div>
    </form>
  );
}

export default SearchForm;
