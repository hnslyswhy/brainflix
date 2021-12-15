import axios from "axios";
const key = "1ed2cf28-7c6c-4c8b-a0ae-c084fb998fb1";
const baseUrl = "https://project-2-api.herokuapp.com";

export const getAll = async function getList() {
  let response;
  let data;
  try {
    // response = await axios.get(`${baseUrl}/videos?api_key=${key}`);
    response = await axios.get("http://localhost:8080/videos");
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
    //  let response = await axios.get(`${baseUrl}/videos/${id}?api_key=${key}`);
    let response = await axios.get(`http://localhost:8080/videos/${id}`);
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
    /*  await axios.post(`${baseUrl}/videos/${id}/comments?api_key=${key}`, {
      name: userName,
      comment: userComment,
    }); */
    await axios.post(`http://localhost:8080/videos/${id}/comments`, {
      name: userName,
      comment: userComment,
    });
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
};

export const deleteComment = async function deleteAComment(videoId, commentId) {
  let data;
  try {
    /*     let response = await axios.delete(
      `${baseUrl}/videos/${videoId}/comments/${commentId}?api_key=${key}`
    ); */
    let response = await axios.delete(
      `http://localhost:8080/videos/${videoId}/comments/${commentId}`
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
  videoFile
) {
  try {
    let response = await axios.post("http://localhost:8080/videos", {
      title: videoTitle,
      description: videoDescription,
      video: videoFile,
    });
    let data = response.data;
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
};
