import { Component } from "react";
import { Redirect } from "react-router-dom";
import { getAll, getOne } from "../apiRequests";
import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";

class Main extends Component {
  state = {
    videoList: null,
    selectedVideo: null,
    redirect: false,
    loading: true,
  };

  getInitialData = () => {
    getAll()
      .then((res) => {
        this.setState({ videoList: res });
      })
      .then(() => {
        this.setData();
      })
      .catch((e) => console.log(e.message));
  };

  setData = () => {
    const targetId = this.props.match.params.videoId;
    if (targetId) {
      getOne(targetId).then((res) => {
        this.setState({ selectedVideo: res, loading: false });
        console.log(this.state.selectedVideo);
      });
    } else {
      getOne(this.state.videoList[0].id).then((res) => {
        this.setState({ selectedVideo: res, loading: false });
        console.log(this.state.selectedVideo);
      });
    }
  };

  componentDidMount() {
    this.getInitialData();
  }

  componentDidUpdate(prevProps) {
    const currentVideoId = this.props.match.params.videoId;
    const previousVideoId = prevProps.match.params.videoId;
    if (currentVideoId !== previousVideoId) {
      this.getInitialData();
    }
  }

  render() {
    const { selectedVideo, redirect, loading } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {loading && <h1>Loading</h1>}
        {!loading && (
          <main className="main">
            <section className="main-video-section">
              <video
                className="main-video-player"
                src={selectedVideo.video}
                type="video/mp4"
                controls="controls"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </section>
            <MainVideo
              className="main-video-description"
              video={selectedVideo}
            />
            <VideoList
              className="main-videolist"
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

/*  // try not to put too much in state
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
 */
