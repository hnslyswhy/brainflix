import VideoDescription from "../VideoDescription/VideoDescription";
import VideoComments from "../VideoComments/VideoComments";

function Video(props) {
  return (
    <>
      <div>
        <video controls width="250px">
          <source src={props.video} type="video/mp4"></source>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <VideoDescription />
      <VideoComments />
    </>
  );
}

export default Video;
