import CommentForm from "../CommentForm/CommentForm";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";
import "./VideoComments.scss";

function VideoComments(props) {
  return (
    <section className="main-comments">
      <p className="main-comments-count">{props.comments.length} Comments</p>
      <div className="main-comments-container">
        <img className="main-comments-avatar" src={avatar} alt="avatar" />
        <CommentForm />
      </div>
      <Comments videoList={props.comments} />
    </section>
  );
}

export default VideoComments;
