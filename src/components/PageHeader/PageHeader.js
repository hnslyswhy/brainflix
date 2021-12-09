import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import "./PageHeader.scss";

function PageHeader() {
  return (
    <header className="header">
      <Link to="/" className="header__link header__link--logo">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <section className="header__functions">
        <div className="header__search">
          <img
            className="header__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input
            className="header__search-input"
            name="search"
            type="text"
            placeholder="Search"
          />
        </div>
        <img className="header__avatar" src={avatar} alt="avatar" />
        <Link to="/upload" className="header__link header__link--upload">
          <div className="header__upload-container">
            <span className="header__upload-text">UPLOAD</span>
            <p className="header__upload-input"></p>
          </div>
        </Link>
      </section>
    </header>
  );
}

export default PageHeader;
