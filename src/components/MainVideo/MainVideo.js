import VideoDescription from "../VideoDescription/VideoDescription";
import VideoComments from "../VideoComments/VideoComments";
import "./MainVideo.scss";

function MainVideo(props) {
  return (
    <div className="main-video">
      <VideoDescription video={props.video} />
      <VideoComments comments={props.video.comments} />
    </div>
  );
}

export default MainVideo;
