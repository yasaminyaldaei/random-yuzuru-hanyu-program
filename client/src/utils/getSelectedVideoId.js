export function getSelectedVideoId() {
  const searchParams = new URLSearchParams(window.location.search);
  const videoId = searchParams.get("videoId");

  return videoId;
}
