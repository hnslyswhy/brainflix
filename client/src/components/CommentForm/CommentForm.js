import { postComment } from "../../utilities/apiRequests";
import "./CommentForm.scss";

function CommentForm({ video, setVideos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(video.id, "someone", e.target.comment.value)
      .then((res) => {
        e.target.reset();
        setVideos(); //or use react context
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form__container">
        <label className="comment-form__label" htmlFor="comment">
          JOIN THE CONVERSATION
        </label>
        <input
          className="comment-form__input"
          id="comment"
          type="text"
          name="comment"
          placeholder="Add a new comment"
          minLength="6"
          required
        />
      </div>
      <button className="comment-form__btn" type="submit">
        COMMENT
      </button>
    </form>
  );
}

export default CommentForm;
