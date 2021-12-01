import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import videoDetails from "../../data/videoDetails";

function Main() {
  return (
    <main className="main">
      <MainVideo className="main-video" video={videoDetails[0]} />
      <VideoList className="main-videoList" videos={videoDetails.slice(1)} />
    </main>
  );
}

export default Main;
