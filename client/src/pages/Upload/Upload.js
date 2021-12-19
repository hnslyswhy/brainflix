import React, { useState } from "react"; // hook is for exploring how to upload a real image
import { uploadVideo } from "../../utilities/apiRequests";
import "./Upload.scss";

const Upload = (props) => {
  const [file, setFile] = useState(" ");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // converted video to string, but size still to large for server side
    //files are handled differently,  console.log(e.target.file.files[0]) to see
    const formData = new FormData();
    formData.append("file", file);

    uploadVideo(
      e.target.title.value,
      e.target.description.value,
      "https://project-2-api.herokuapp.com/stream",
      file
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
            <label htmlFor="file">
              VIDEO THUMBNAIL
              <div className="form__file"></div>
            </label>
            <input
              id="file"
              type="file"
              name="file"
              onChange={handleFileChange}
            ></input>
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
