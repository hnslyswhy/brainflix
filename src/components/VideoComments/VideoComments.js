import CommentForm from "../CommentForm/CommentForm";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";
import "./VideoComments.scss";

function VideoComments(props) {
  console.log(props);
  return (
    <section className="main-comments">
      <p className="main-comments-count">
        {props.video.comments.length} Comments
      </p>
      <div className="main-comments-container">
        <img className="main-comments-avatar" src={avatar} alt="avatar" />
        <CommentForm video={props.video} setData={props.setData} />
      </div>
      <Comments video={props.video} setData={props.setData} />
    </section>
  );
}

export default VideoComments;
