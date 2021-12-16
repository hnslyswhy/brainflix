import React from "react";
import { Redirect } from "react-router-dom";
import { getAll, getOne } from "../../utilities/apiRequests";
import { getVideoTime } from "../../utilities/videoControls";
import LoadingSpinner from "../../utilities/LoadingSpinner/LoadingSpinner";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import "./Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      videoList: null,
      selectedVideo: null,
      redirect: false,
      loading: true,
      playing: false,
      full: false,
      mute: false,
      duration: "0:00",
      elapse: "0:00",
      currentTime: "0",
    };
  }

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
    getOne(fetchId)
      .then((res) => {
        this.setState({ selectedVideo: res, loading: false });
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        alert("something went wrong");
        // this.setState({redirect:true})
        this.props.history.goBack();
      });
  };

  handleMetaData = () => {
    this.setState({
      duration: getVideoTime(this.videoRef.current.duration),
      elapse: getVideoTime(this.videoRef.current.currentTime),
      currentTime: this.videoRef.current.currentTime,
    });
    console.log(this.videoRef.current.currentTime);
  };

  handleTimeUpdate = () => {
    this.setState({
      elapse: getVideoTime(this.videoRef.current.currentTime),
      currentTime: this.videoRef.current.currentTime,
    });
    console.log(this.videoRef.current.currentTime);
  };

  handleTogglePlayBtn = () => {
    this.setState({ playing: !this.state.playing });
    //  console.log(this.state.playing);
    if (this.videoRef.current.paused || this.videoRef.current.ended) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.pause();
    }
  };

  handleToggleFullBtn = (event) => {
    this.setState({ full: !this.state.full });
    if (!this.state.full) {
      this.videoRef.current.requestFullscreen();
    } else {
      this.videoRef.current.exitFullscreen();
    }
    console.log(this.state.full);
  };

  handleToggleMuteBtn = () => {
    this.setState({ mute: !this.state.mute });
    console.log(this.state.mute);
    if (this.videoRef.current.muted) {
      this.videoRef.current.muted = false;
    } else {
      this.videoRef.current.muted = true;
    }
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
                ref={this.videoRef}
                src={
                  this.state.selectedVideo.video.includes("herokuapp")
                    ? `${this.state.selectedVideo.video}?api_key=${process.env.REACT_APP_API_KEY}&attr=${this.state.selectedVideo.id}`
                    : `${this.state.selectedVideo.video}&attr=${this.state.selectedVideo.id}`
                }
                poster={selectedVideo.image}
                type="video/mp4"
                preload="metadata"
                onLoadedMetadata={this.handleMetaData}
                onTimeUpdate={this.handleTimeUpdate}
              />
              <div className="main__video-controls">
                <button
                  id="play"
                  className={`${this.state.playing} ?  main__video-play :  main__video-pause`}
                  onClick={this.handleTogglePlayBtn}
                ></button>
                <div className="main__video-bar">
                  <progress
                    id="progress"
                    value={Math.floor(this.state.currentTime)}
                    min="0"
                    max={this.state.duration}
                  ></progress>
                  <input
                    id="seek"
                    value={Math.floor(this.state.currentTime)}
                    min="0"
                    max={this.state.duration}
                    type="range"
                    step=""
                  ></input>
                  <div className="time">
                    <time id="time-elapsed">{this.state.elapse}</time>
                    <span> / </span>
                    <time id="duration">{this.state.duration}</time>
                  </div>
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
                  {/*   <input
                    class="volume"
                    id="volume"
                    value="1"
                    type="range"
                    max="1"
                    min="0"
                    step="0.01"
                  /> */}
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
