import React from "react";
import { uploadVideo } from "../../utilities/apiRequests";
import "./Upload.scss";

const Upload = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    /*     const reader = new FileReader();
    reader.onload = function () {
      console.log(reader.result);
      uploadVideo(
        e.target.title.value,
        e.target.description.value,
        reader.result
      );
    };
    reader.readAsText(e.target.file.files[0]); */
    //files are handled differently,  console.log(e.target.file.files[0]) to see
    uploadVideo(
      e.target.title.value,
      e.target.description.value,
      "https://project-2-api.herokuapp.com/stream"
    );
    alert("uploaded");
    props.history.push("/");
  };

  const handleCancel = () => {
    alert("form submission canceled");
    props.history.goBack();
  };
  return (
    <main className="upload">
      <h1 className="upload__headline">Upload Video</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__box">
          <div className="form__video">
            <label htmlFor="file">VIDEO THUMBNAIL</label>
            <div className="form__file">
              <input id="file" type="file" name="file"></input>
            </div>
          </div>

          <div className="form__entries">
            <div className="form__section">
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add title to your video"
              ></input>
            </div>
            <div className="form__section">
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
        <div className="form__buttons">
          <button type="submit" className="form__publish">
            PUBLISH
          </button>
          <button type="button" className="form__cancel" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </form>
    </main>
  );
};

export default Upload;
