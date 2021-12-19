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

export const patchLike = async function changeVideoLikes(id, likes) {
  try {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/videos/${id}`,
      {
        likes: likes,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
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

// video is just a hardcoded path, but the selected image will be uploaded properly.
// axios here send form-data type instead of json
export const uploadVideo = async function uploadAVideo(
  videoTitle,
  videoDescription,
  videoFile,
  videoImage
) {
  try {
    let formData = new FormData();
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);
    formData.append("video", videoFile);
    formData.append("image", videoImage);
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/videos`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
};
