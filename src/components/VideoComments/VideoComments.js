import CommentForm from "../CommentForm/CommentForm";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";
import "./VideoComments.scss";

function VideoComments({ video, setData }) {
  return (
    <section className="main-comments">
      <p className="main-comments__count">{video.comments.length} Comments</p>
      <div className="main-comments__container">
        <img className="main-comments__avatar" src={avatar} alt="avatar" />
        <CommentForm video={video} setData={setData} />
      </div>
      <Comments video={video} setData={setData} />
    </section>
  );
}

export default VideoComments;
