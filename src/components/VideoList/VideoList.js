import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss";

function VideoList(props) {
  return (
    <aside className="videos">
      <p className="videos-header">NEXT VIDEOS</p>
      {props.videos.map((item) => (
        <VideoCard
          key={item.id}
          video={item}
          onClick={props.handlerSelectVideo}
        />
      ))}
    </aside>
  );
}

export default VideoList;
