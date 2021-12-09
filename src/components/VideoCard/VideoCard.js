import "./VideoCard.scss";

function VideoCard(props) {
  const { image, title, channel } = props.video;
  return (
    <article className="video-list">
      <div className="video-list__image-container">
        <img className="video-list__image" src={image} alt={title} />
      </div>
      <div className="video-list__info">
        <p className="video-list__title">{title}</p>
        <p className="video-list__channel">{channel}</p>
      </div>
    </article>
  );
}

export default VideoCard;
