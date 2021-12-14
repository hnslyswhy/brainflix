import CommentForm from "../CommentForm/CommentForm";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";
import "./VideoComments.scss";

function VideoComments({ video, setVideos }) {
  return (
    <section className="main-comments">
      <p className="main-comments__count">{video.comments.length} Comments</p>
      <div className="main-comments__container">
        <div className="main-comments__box">
          <img className="main-comments__avatar" src={avatar} alt="avatar" />
        </div>
        <CommentForm video={video} setVideos={setVideos} />
      </div>
      <Comments video={video} setVideos={setVideos} />
    </section>
  );
}

export default VideoComments;
