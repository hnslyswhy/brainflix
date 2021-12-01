import "./VideoCard.scss";

function VideoCard(props) {
  return (
    <article className="video-list">
      <img
        className="video-list-image"
        src={props.video.image}
        alt={props.video.title}
      />
      <div className="video-list-info">
        <p className="video-list-title">{props.video.title}</p>
        <p className="video-list-channel">By {props.video.channel}</p>
      </div>
    </article>
  );
}

export default VideoCard;
