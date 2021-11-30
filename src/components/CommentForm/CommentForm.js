import add from "../../assets/icons/add_comment.svg";

function CommentForm() {
  return (
    <form>
      <div>
        <label htmlFor="comment">JOIN THE CONVERSATION</label>
        <input
          type="text"
          name="comment"
          placeholder="Add a new comment"
          minlength="6"
          required
        />
      </div>
      <button type="submit">
        <img src={add} alt="add comment" />
        <span>COMMENT</span>
      </button>
    </form>
  );
}

export default CommentForm;
