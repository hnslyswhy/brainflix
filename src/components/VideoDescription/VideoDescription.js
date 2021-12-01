import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoDescription(props) {
  return (
    <section className="main-description">
      <h1 className="main-description-title">{props.video.title}</h1>
      <div className="main-description-content">
        <div className="main-description-info-container">
          <p className="main-description-info-channel">
            By {props.video.channel}
          </p>
          <p className="main-description-info-time">{props.video.timestamp}</p>
        </div>
        <div className="main-description-popularity">
          <img src={views} alt="views" />
          <span className="main-description-views">{props.video.views}</span>
        </div>
        <div>
          <img src={likes} alt="likes" />
          <span className="main-description-likes">{props.video.likes}</span>
        </div>
      </div>
      <p className="main-description-text">{props.video.description}</p>
    </section>
  );
}

export default VideoDescription;
