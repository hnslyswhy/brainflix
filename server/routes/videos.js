const express = require("express");
const { v4: uuidv4 } = require("uuid");
const videoData = require("../data/video-details.json");
const fs = require("fs");

const videoRouter = express.Router();

//delete comment
videoRouter.delete("/:videoId/comments/:commentId", (req, res) => {
  const targetVideoId = req.params.videoId;
  const targetCommentId = req.params.commentId;
  let targetComment;
  const targetVideo = videoData.find((video) => video.id === targetVideoId);
  if (targetVideo) {
    targetComment = targetVideo.comments.find(
      (item) => item.id === targetCommentId
    );
    if (targetComment) {
      targetVideo.comments = targetVideo.comments.filter(
        (item) => item.id !== targetCommentId
      );
      res.status(200).send(targetComment);
    } else {
      res.status(404).json({ message: "comment not found" });
    }
  } else {
    res.status(404).json({ message: "video not found" });
  }
});

//post comment
videoRouter.post("/:id/comments", (req, res) => {
  const targetId = req.params.id;
  const newComment = {
    id: uuidv4(),
    name: req.body.name,
    comment: req.body.comment,
    likes: 0,
    timestamp: Date.now(),
  };
  const targetVideo = videoData.find((video) => video.id === targetId);
  if (targetVideo) {
    // do we need to write on the file to make changes survive server restart
    targetVideo.comments = [newComment, ...targetVideo.comments];
    res.status(200).send(newComment);
  } else {
    res.status(404).json({ message: "video not found" });
  }
});

//get video by id
videoRouter.get("/:id", (req, res) => {
  const targetId = req.params.id;
  let targetVideo = videoData.find((video) => video.id === targetId);
  res.status(200).send(targetVideo);
});

//post new video
videoRouter.post("/", (req, res) => {
  console.log(
    req.body.title,
    req.body.description,
    req.body.video,
    req.body.image
  );
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.video ||
    !req.body.image
  ) {
    return res
      .status(400)
      .json({ message: "please include title, description and file" });
  }
  const newVideo = {
    title: req.body.title,
    channel: "",
    image: req.body.image,
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "",
    video: req.body.video,
    timestamp: Date.now(),
    comments: [],
    id: uuidv4(),
  };
  let allVideos = videoData;
  allVideos.push(newVideo);
  try {
    fs.writeFileSync("./data/video-details.json", JSON.stringify(allVideos));
    res.status(200).send(newVideo);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

//get all videos
videoRouter.get("/", (req, res) => {
  res.status(200).send(videoData);
});

module.exports = videoRouter;
