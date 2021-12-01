import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import data from "../../data/video-details.json";

function Main() {
  return (
    <main className="main">
      <MainVideo className="main-video" video={data[0]} />
      <VideoList className="main-videoList" videos={data.slice(1)} />
    </main>
  );
}

export default Main;
