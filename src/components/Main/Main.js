import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";
import videoDetails from "../../data/videoDetails";

function Main() {
  return (
    <main>
      <MainVideo video={videoDetails[0]} />
      <VideoList videos={videoDetails.slice(1)} />
    </main>
  );
}

export default Main;
