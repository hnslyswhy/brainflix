import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDescription.scss";
import { getTimeDifference } from "../../utilities/timeConverter";
import { patchLike } from "../../utilities/apiRequests";
import { useState } from "react";

function VideoDescription(props) {
  const { id, title, channel, timestamp, views, likes, description } =
    props.video;

  const [likesCount, setLikesCount] = useState(
    parseInt(likes.split(",").join(""))
  );
  const handleLike = (id) => {
    setLikesCount(likesCount + 1);
    patchLike(id, likesCount.toString());
  };

  return (
    <section className="main-description">
      <h1 className="main-description__title">{title}</h1>
      <div className="main-description__content">
        <div className="main-description__info-container">
          <p className="main-description__info-channel">By {channel}</p>
          <p className="main-description__info-time">
            {getTimeDifference(timestamp)}
          </p>
        </div>
        <div className="main-description__social-container">
          <div className="main-description__popularity">
            <img src={viewsIcon} alt="views" />
            <span className="main-description__views">{views}</span>
          </div>
          <div>
            <img
              className="main-description__like-img"
              src={likesIcon}
              alt="likes"
              onClick={() => handleLike(id)}
            />
            <span className="main-description__likes">{likesCount}</span>
          </div>
        </div>
      </div>
      <p className="main-description__text">{description}</p>
    </section>
  );
}

export default VideoDescription;
