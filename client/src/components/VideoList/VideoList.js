import { Link } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss";

function VideoList({ videos }) {
  return (
    <aside className="videos">
      <p className="videos__header">NEXT VIDEOS</p>
      {videos.map((item) => (
        <Link to={`/video/${item.id}`} key={item.id}>
          <VideoCard
            video={item}
            /*             onClick={props.handlerSelectVideo} */
          />
        </Link>
      ))}
    </aside>
  );
}

export default VideoList;
