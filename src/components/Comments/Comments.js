import { getTimeDifference } from "../timeConverter";
import { deleteComment } from "../apiRequests";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import "./Comment.scss";

function Comments(props) {
  //console.log(props);
  const handleDelete = (videoId, commentId) => {
    deleteComment(videoId, commentId);
    // then do something to refresh
  };
  return (
    <div className="comments">
      {props.video.comments.map((item) => {
        return (
          <article className="comments-card" key={item.name}>
            <img
              className="comments-avatar"
              src="https://via.placeholder.com/150"
              alt="avatar"
            />
            <div className="comments-content">
              <div className="comments-header">
                <p className="comments-author">{item.name}</p>
                <div className="comments-tools">
                  <p className="comments-date">
                    {getTimeDifference(item.timestamp)}
                  </p>
                  <img
                    className="comments-delete"
                    onClick={() => handleDelete(props.video.id, item.id)}
                    src={deleteIcon}
                    alt="delete"
                  />
                </div>
              </div>
              <p className="comments-text">{item.comment}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default Comments;
