const { application } = require("express");
const express = require("express");
const videoRouter = require("./routes/videos");
const cors = require("cors");
const videoData = require("./data/video-details.json");

const app = express();
app.use(cors());

app.use(express.static("public")); //set up static folder for images, styles so it wont get to endpoint and return directly. localhost://8080/images/imageName.png
app.use(express.json()); // see post req.body

app.use("/videos", videoRouter);

app.listen(8080, () => console.log("🚀 Launching on PORT 8080 "));
