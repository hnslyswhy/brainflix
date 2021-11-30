function VideoCard(props) {
  return (
    <article>
      <img src={props.video.image} alt="video image" />
      <div>
        <p>{props.video.title}</p>
        <p>By {props.video.channel}</p>
      </div>
    </article>
  );
}

export default VideoCard;
