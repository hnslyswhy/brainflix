import "./CommentForm.scss";

function CommentForm() {
  return (
    <form className="comment-form">
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
