const express = require("express");
const app = express();

app.listen(8080, () => console.log("🚀 Launching on PORT 8080 "));

app.get("/", (req, res) => console.log("hi from / home page"));
