// formatTime takes duration in seconds
// returns the time in minutes and seconds
// toISOString()
// substr(start, length)
// https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics
// https://freshman.tech/custom-html5-video/

export function getVideoTime(duration) {
  const videoDuration = Math.round(duration);
  const result = new Date(videoDuration * 1000).toISOString().substr(11, 8);
  let minutes = result.substr(4, 1);
  let seconds = result.substr(6, 2);
  return `${minutes}:${seconds}`;
}
