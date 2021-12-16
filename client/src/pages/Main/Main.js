import { Component } from "react";
import { Redirect } from "react-router-dom";
import { getAll, getOne } from "../../utilities/apiRequests";
import LoadingSpinner from "../../utilities/LoadingSpinner/LoadingSpinner";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
//import BSvideo from "../../assets/video/BrainStation.mp4";
import "./Main.scss";

class Main extends Component {
  state = {
    videoList: null,
    selectedVideo: null,
    redirect: false,
    loading: true,
    playing: false,
    full: false,
    mute: false,
    curTime: "0:00",
    duration: "4:01",
  };

  getAllVideos = () => {
    getAll()
      .then((res) => {
        this.setState({ videoList: res });
      })
      .then(() => {
        this.setVideos();
      })
      .catch((e) => console.log(e.message));
  };

  setVideos = () => {
    const targetId = this.props.match.params.videoId;
    let fetchId = targetId ? targetId : this.state.videoList[0].id;
    getOne(fetchId).then((res) => {
      this.setState({ selectedVideo: res, loading: false });
      window.scrollTo(0, 0);
    });
  };

  handleTogglePlayBtn = () => {
    this.setState({ playing: !this.state.playing });
    console.log(this.state.playing);
    if (this.state.video.paused || this.state.video.ended) {
      this.state.video.play();
    } else {
      this.state.video.pause();
    }
  };

  handleToggleFullBtn = () => {
    this.setState({ full: !this.state.full });
    console.log(this.state.full);
  };

  handleToggleMuteBtn = () => {
    this.setState({ mute: !this.state.mute });
    console.log(this.state.mute);
  };

  componentDidMount() {
    this.getAllVideos();
  }

  componentDidUpdate(prevProps) {
    const currentVideoId = this.props.match.params.videoId;
    const previousVideoId = prevProps.match.params.videoId;
    if (currentVideoId !== previousVideoId) {
      this.setVideos();
    }
  }

  render() {
    const { selectedVideo, redirect, loading } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {loading && (
          <main className="loading-container">
            <LoadingSpinner className="loading-spinner" />
          </main>
        )}
        {!loading && (
          <main className="main">
            <section className="main__video-section">
              <video
                id="video"
                className="main__video-player"
                src={
                  this.state.selectedVideo.video.includes("herokuapp")
                    ? this.state.selectedVideo.video +
                      "?api_key=1ed2cf28-7c6c-4c8b-a0ae-c084fb998fb1"
                    : this.state.selectedVideo.video
                }
                poster={selectedVideo.image}
                type="video/mp4"
              />
              <div className="main__video-controls">
                <button
                  id="play"
                  className={`${this.state.playing} ?  main__video-play :  main__video-pause`}
                  onClick={this.handleTogglePlayBtn}
                ></button>
                <div className="main__video-bar">
                  <progress id="progress" value="32" min="0" max="100">
                    <span id="progress-bar">
                      <span id="progress-value"></span>
                    </span>
                  </progress>
                  <span id="progress-time">
                    {this.state.curTime}/{this.state.duration}
                  </span>
                </div>
                <div className="main__video-other">
                  <button
                    id="full"
                    className={`${this.state.full} ?  main__video-full :  main__video-min`}
                    onClick={this.handleToggleFullBtn}
                  ></button>
                  <button
                    id="mute"
                    className={`${this.state.mute} ?  main__video-mute :  main__video-up`}
                    onClick={this.handleToggleMuteBtn}
                  ></button>
                </div>
              </div>
            </section>
            <MainVideo
              className="main__video-description"
              setVideos={this.setVideos}
              video={selectedVideo}
            />
            <VideoList
              className="main__video-list"
              videos={this.state.videoList.filter(
                (item) => item.id !== this.state.selectedVideo.id
              )}
            />
          </main>
        )}
      </>
    );
  }
}

export default Main;
