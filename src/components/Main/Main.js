import { Component } from "react";
import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import videoData from "../../data/video-details.json";
import "./Main.scss";

class Main extends Component {
  state = { data: videoData };

  render() {
    return (
      <main className="main">
        <section className="main-video-section">
          <video className="main-video-player" controls width="250px">
            <source src={this.state.data[0].video} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </section>
        <MainVideo
          className="main-video-description"
          video={this.state.data[0]}
        />
        <VideoList
          className="main-videolist"
          videos={this.state.data.slice(1)}
        />
      </main>
    );
  }
}

export default Main;
