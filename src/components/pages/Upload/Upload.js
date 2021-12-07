import React from "react";
import "./Upload.scss";

const Upload = () => {
  return (
    <main className="upload">
      <h1 className="upload-headline">Upload Video</h1>
      <form className="upload-form">
        <div className="upload-form-box">
          <div className="upload-form-video">
            <label htmlFor="file">VIDEO THUMBNAIL</label>
            <div className="upload-form-file">
              <input id="file" type="file" name="file"></input>
            </div>
          </div>

          <div className="upload-form-entries">
            <div className="upload-form-section">
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add title to your video"
              ></input>
            </div>
            <div className="upload-form-section">
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
        <div className="upload-form-buttons">
          <button type="submit" className="upload-form-publish">
            PUBLISH
          </button>
          <button type="button" className="upload-form-cancel">
            CANCEL
          </button>
        </div>
      </form>
    </main>
  );
};

export default Upload;
/* 
       <Link to="/upload" className="header-link header-link__upload">
         <div className="header-upload-container">
           <span className="header-upload-text">UPLOAD</span>
           <p className="header-upload-input"></p>
         </div>
       </Link>; */
