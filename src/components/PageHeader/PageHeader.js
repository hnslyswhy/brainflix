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
        <div className="search">
          <img className="search__icon" src={searchIcon} alt="search icon" />
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="header__box">
          <img className="header__avatar" src={avatar} alt="avatar" />
        </div>
        <Link to="/upload" className="header__link header__link--upload">
          <div className="upload-btn">
            <span className="upload-btn__text">UPLOAD</span>
            <p className="upload-btn__input"></p>
          </div>
        </Link>
      </section>
    </header>
  );
}

export default PageHeader;
