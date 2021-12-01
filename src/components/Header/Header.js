import SearchForm from "../SearchForm/SearchForm";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import UploadForm from "../UploadForm/UploadForm";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <section className="header-functions">
        <SearchForm className="header-search-form" />
        <img className="header-avatar" src={avatar} alt="avatar" />
        <UploadForm className="header-upload-form" />
      </section>
    </header>
  );
}

export default Header;
