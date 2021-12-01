import uploadIcon from "../../assets/icons/upload.svg";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <label className="upload">
      <input className="upload-input" type="file" name="file" />
      <img className="upload-icon" src={uploadIcon} alt="upload icon" />
      <span className="upload-text">UPLOAD</span>
    </label>
  );
}

export default UploadForm;
