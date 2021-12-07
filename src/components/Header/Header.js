import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-link header-link__logo">
        <img className="header-logo" src={logo} alt="logo" />
      </Link>
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
        <Link to="/upload" className="header-link header-link__upload">
          <div className="header-upload-container">
            <span className="header-upload-text">UPLOAD</span>
            <p className="header-upload-input"></p>
          </div>
        </Link>
      </section>
    </header>
  );
}

export default Header;
