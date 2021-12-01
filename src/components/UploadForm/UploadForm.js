import uploadIcon from "../../assets/icons/upload.svg";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <div className="upload">
      {/*  <input className="upload-input" type="file" name="file" /> */}
      <img className="upload-icon" src={uploadIcon} alt="upload icon" />
      <span className="upload-text">UPLOAD</span>
    </div>
  );
}

export default UploadForm;
