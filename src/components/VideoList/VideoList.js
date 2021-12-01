import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss";

function VideoList(props) {
  return (
    <aside className="videos">
      <p className="videos-header">NEXT VIDEOS</p>
      {props.videos.map((item) => (
        <VideoCard video={item} />
      ))}
    </aside>
  );
}

export default VideoList;
