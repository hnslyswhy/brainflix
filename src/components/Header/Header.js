import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <section className="header-functions">
        <div className="header-search">
          <img
            className="header-search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input
            className="header-search-input"
            name="search"
            type="text"
            placeholder="Search"
          />
        </div>
        <img className="header-avatar" src={avatar} alt="avatar" />
        <label className="header-upload-label">
          <span className="header-upload-text">UPLOAD</span>
          <input className="header-upload-input" type="file" name="file" />
        </label>
      </section>
    </header>
  );
}

export default Header;
