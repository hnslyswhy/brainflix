import { Component } from "react";
import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import videoDataDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";
import "./Main.scss";

class Main extends Component {
  state = {
    videoList: videoData,
    selectedVideo: videoDataDetails[0],
    filteredList: videoData.slice(1),
  };

  handlerSelectVideo = (videoId) => {
    this.setState({
      selectedVideo: videoDataDetails.find((item) => item.id === videoId),
    });
    this.setState({
      filteredList: videoData.filter((item) => item.id !== videoId),
    });
  };

  render() {
    return (
      <main className="main">
        <section className="main-video-section">
          <video
            className="main-video-player"
            src={this.state.selectedVideo.video}
            type="video/mp4"
            controls="controls"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </section>
        <MainVideo
          className="main-video-description"
          video={this.state.selectedVideo}
        />
        <VideoList
          className="main-videolist"
          videos={this.state.filteredList}
          handlerSelectVideo={this.handlerSelectVideo}
        />
      </main>
    );
  }
}

export default Main;
