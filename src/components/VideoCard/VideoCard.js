import "./VideoCard.scss";

function VideoCard(props) {
  const { image, title, channel } = props.video;
  return (
    <article className="video-list">
      <div className="video-list-image-container">
        <img className="video-list-image" src={image} alt={title} />
      </div>
      <div className="video-list-info">
        <p className="video-list-title">{title}</p>
        <p className="video-list-channel">{channel}</p>
      </div>
    </article>
  );
}

export default VideoCard;
