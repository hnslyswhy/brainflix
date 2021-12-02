import { Component } from "react";
import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import videoData from "../../data/video-details.json";

/* function Main() {
  return (
    <main className="main">
      <MainVideo className="main-video" video={videoData[0]} />
      <VideoList className="main-videoList" videos={videoData.slice(1)} />
    </main>
  );
} */

class Main extends Component {
  state = { data: videoData };

  render() {
    return (
      <main className="main">
        <MainVideo className="main-video" video={this.state.data[0]} />
        <VideoList
          className="main-videoList"
          videos={this.state.data.slice(1)}
        />
      </main>
    );
  }
}

export default Main;
