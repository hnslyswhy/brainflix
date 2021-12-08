import { Redirect } from "react-router-dom";
import { postComment } from "../apiRequests";
import "./CommentForm.scss";

function CommentForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(props.video.id, "someone", e.target.comment.value)
      .then((res) => {
        e.target.reset();
        //  <Redirect to={`/video/${props.video.id}`} />;
        // getOne(this.props.video.id)
        // the comment is showing everywhere !!
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form-container">
        <label className="comment-form-label" htmlFor="comment">
          JOIN THE CONVERSATION
        </label>
        <input
          className="comment-form-input"
          id="comment"
          type="text"
          name="comment"
          placeholder="Add a new comment"
          minLength="6"
          required
        />
      </div>
      <button className="comment-form-btn" type="submit">
        COMMENT
      </button>
    </form>
  );
}

export default CommentForm;
