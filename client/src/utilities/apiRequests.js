import axios from "axios";

export const getAll = async function getList() {
  let response;
  let data;
  try {
    response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/videos`);
    data = response.data;
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
  return data;
};

export const getOne = async function getDetails(id) {
  let data;
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/videos/${id}`
    );
    data = response.data;
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
  return data;
};

export const postComment = async function postAComment(
  id,
  userName,
  userComment
) {
  try {
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/videos/${id}/comments`,
      {
        name: userName,
        comment: userComment,
      }
    );
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
};

export const deleteComment = async function deleteAComment(videoId, commentId) {
  let data;
  try {
    let response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/videos/${videoId}/comments/${commentId}`
    );
    data = response.data;
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
  return data;
};

export const uploadVideo = async function uploadAVideo(
  videoTitle,
  videoDescription,
  videoFile,
  videoImage
) {
  try {
    // test
    let formData = new FormData();
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);
    formData.append("video", videoFile);
    formData.append("image", videoImage);
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/videos`,
      {
        title: videoTitle,
        description: videoDescription,
        video: videoFile,
        image: videoImage,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
};
