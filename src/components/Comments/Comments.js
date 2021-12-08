import "./Comment.scss";
import { getTimeDifference } from "../timeConverter";

function Comments(props) {
  return (
    <div className="comments">
      {props.videoList.map((item) => {
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
                <p className="comments-date">
                  {getTimeDifference(item.timestamp)}
                </p>
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
