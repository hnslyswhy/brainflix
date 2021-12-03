import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDescription.scss";
import { getTimeDifference } from "../timeConverter";

function VideoDescription(props) {
  const { title, channel, timestamp, views, likes, description } = props.video;

  return (
    <section className="main-description">
      <h1 className="main-description-title">{title}</h1>
      <div className="main-description-content">
        <div className="main-description-info-container">
          <p className="main-description-info-channel">By {channel}</p>
          <p className="main-description-info-time">
            {getTimeDifference(timestamp)}
          </p>
        </div>
        <div className="main-description-social-container">
          <div className="main-description-popularity">
            <img src={viewsIcon} alt="views" />
            <span className="main-description-views">{views}</span>
          </div>
          <div>
            <img src={likesIcon} alt="likes" />
            <span className="main-description-likes">{likes}</span>
          </div>
        </div>
      </div>
      <p className="main-description-text">{description}</p>
    </section>
  );
}

export default VideoDescription;
