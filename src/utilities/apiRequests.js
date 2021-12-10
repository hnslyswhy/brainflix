import axios from "axios";
const key = "1ed2cf28-7c6c-4c8b-a0ae-c084fb998fb1";
const baseUrl = "https://project-2-api.herokuapp.com";

export const getAll = async function getList() {
  let response;
  let data;
  try {
    response = await axios.get(`${baseUrl}/videos?api_key=${key}`);
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
    let response = await axios.get(`${baseUrl}/videos/${id}?api_key=${key}`);
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
    await axios.post(`${baseUrl}/videos/${id}/comments?api_key=${key}`, {
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
    let response = await axios.delete(
      `${baseUrl}/videos/${videoId}/comments/${commentId}?api_key=${key}`
    );
    data = response.data;
  } catch (e) {
    console.log(e);
    alert("something went wrong");
  }
  return data;
};
