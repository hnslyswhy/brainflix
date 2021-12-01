import VideoDescription from "../VideoDescription/VideoDescription";
import VideoComments from "../VideoComments/VideoComments";

function MainVideo(props) {
  return (
    <>
      <section className="main-video">
        <video className="main-video-player" controls width="250px">
          <source src={props.video} type="video/mp4"></source>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </section>
      <VideoDescription video={props.video} />
      <VideoComments video={props.video} />
    </>
  );
}

export default MainVideo;
