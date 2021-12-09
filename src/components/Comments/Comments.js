import { getTimeDifference } from "../../utilities/timeConverter";
import { deleteComment } from "../../utilities/apiRequests";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import "./Comment.scss";

function Comments({ video, setData }) {
  const handleDelete = (videoId, commentId) => {
    deleteComment(videoId, commentId);
    setData(); // this is still not updating
  };
  return (
    <div className="comments">
      {video.comments.map((item) => {
        return (
          <article className="comments__card" key={item.name}>
            <img
              className="comments__avatar"
              src="https://via.placeholder.com/150"
              alt="avatar"
            />
            <div className="comments__content">
              <div className="comments__header">
                <p className="comments__author">{item.name}</p>
                <div className="comments__tools">
                  <p className="comments__date">
                    {getTimeDifference(item.timestamp)}
                  </p>
                  <img
                    className="comments__delete"
                    onClick={() => handleDelete(video.id, item.id)}
                    src={deleteIcon}
                    alt="delete"
                  />
                </div>
              </div>
              <p className="comments__text">{item.comment}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default Comments;
