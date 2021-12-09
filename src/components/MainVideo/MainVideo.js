import VideoDescription from "../VideoDescription/VideoDescription";
import VideoComments from "../VideoComments/VideoComments";
import "./MainVideo.scss";

function MainVideo({ video, setData }) {
  return (
    <div className="main-video">
      <VideoDescription video={video} />
      <VideoComments video={video} setData={setData} />
    </div>
  );
}

export default MainVideo;
