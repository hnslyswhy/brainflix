import uploadIcon from "../../assets/icons/upload.svg";

function UploadForm() {
  return (
    <form className="upload">
      <input className="upload-input" type="file" name="file" />
      <button className="upload-btn" type="submit">
        <img className="upload-icon" src={uploadIcon} alt="upload icon" />
        <span className="upload-text">UPLOAD</span>
      </button>
    </form>
  );
}

export default UploadForm;
