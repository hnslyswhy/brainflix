import VideoDescription from "../VideoDescription/VideoDescription";
import VideoComments from "../VideoComments/VideoComments";
import "./MainVideo.scss";

function MainVideo({ video, setVideos }) {
  return (
    <div className="main-video">
      <VideoDescription video={video} />
      <VideoComments video={video} setVideos={setVideos} />
    </div>
  );
}

export default MainVideo;
