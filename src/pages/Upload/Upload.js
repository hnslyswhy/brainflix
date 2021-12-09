import React from "react";
import "./Upload.scss";

const Upload = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("uploaded");
    props.history.push("/");
  };
  return (
    <main className="upload">
      <h1 className="upload__headline">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__form-box">
          <div className="upload__form-video">
            <label htmlFor="file">VIDEO THUMBNAIL</label>
            <div className="upload__form-file">
              <input id="file" type="file" name="file"></input>
            </div>
          </div>

          <div className="upload__form-entries">
            <div className="upload__form-section">
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add title to your video"
              ></input>
            </div>
            <div className="upload__form-section">
              <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="upload__form-buttons">
          <button type="submit" className="upload__form-publish">
            PUBLISH
          </button>
          <button type="button" className="upload__form-cancel">
            CANCEL
          </button>
        </div>
      </form>
    </main>
  );
};

export default Upload;
