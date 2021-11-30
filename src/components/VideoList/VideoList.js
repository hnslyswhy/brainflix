import VideoCard from "../VideoCard/VideoCard";

function VideoList(props) {
  return (
    <aside>
      <p>NEXT VIDEOS</p>
      {props.videos.map((item) => (
        <VideoCard video={item} />
      ))}
    </aside>
  );
}

export default VideoList;
