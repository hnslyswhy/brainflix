import SearchForm from "../SearchForm/SearchForm";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import UploadForm from "../UploadForm/UploadForm";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <div className="header-functions">
        <SearchForm />
        <img className="header-avatar" src={avatar} alt="avatar" />
        <UploadForm />
      </div>
    </header>
  );
}

export default Header;
