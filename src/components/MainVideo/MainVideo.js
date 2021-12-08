import VideoDescription from "../VideoDescription/VideoDescription";
import VideoComments from "../VideoComments/VideoComments";
import "./MainVideo.scss";

function MainVideo(props) {
  console.log(props);
  return (
    <div className="main-video">
      <VideoDescription video={props.video} />
      <VideoComments video={props.video} />
    </div>
  );
}

export default MainVideo;
