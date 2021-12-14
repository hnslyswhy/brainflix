import { Component } from "react";
import { Redirect } from "react-router-dom";
import { getAll, getOne } from "../../utilities/apiRequests";
import LoadingSpinner from "../../utilities/LoadingSpinner/LoadingSpinner";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import "./Main.scss";

class Main extends Component {
  state = {
    videoList: null,
    selectedVideo: null,
    redirect: false,
    loading: true,
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
                className="main__video-player"
                src={`${selectedVideo.video}?api_key=1ed2cf28-7c6c-4c8b-a0ae-c084fb998fb1`}
                poster={selectedVideo.image}
                type="video/mp4"
                controls="controls"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
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
