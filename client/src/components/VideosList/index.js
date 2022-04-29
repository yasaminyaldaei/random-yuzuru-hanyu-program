import { Video } from "../Video";
import { VideoListError } from "./VideoListError";
import { VideosListLoading } from "./VideosListLoading";

import "./VideosList.css";

export function VideosList({ program, videos, error, onClick }) {
  if (!videos || videos.length === 0) return null;

  const onClickVideo = (id) => () => onClick(id);

  return (
    <div className="videos-list-container">
      <VideosListLoading show={(!videos || videos.length === 0) && !error} />
      {videos && videos.length !== 0
        ? videos.map((video) => (
            <Video
              key={video.etag}
              id={video.id.videoId}
              {...video.snippet}
              programTitle={program}
              onClick={onClickVideo(video.id.videoId)}
            />
          ))
        : null}
      {error ? <VideoListError programTitle={program} /> : null}
    </div>
  );
}
