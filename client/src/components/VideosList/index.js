import { useEffect, useState } from "react";

import { Video } from "../Video";
import { VideoListError } from "./VideoListError";
import { VideosListLoading } from "./VideosListLoading";

import { getYTVideos } from "../../api";

import "./VideosList.css";

export function VideosList({ program }) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getYTVideos()
      .then((data) => setVideos(data.videos))
      .catch(() => {
        setError(true);
      });
  }, [program]);

  if (!program) return null;

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
            />
          ))
        : null}
      {error ? <VideoListError programTitle={program} /> : null}
    </div>
  );
}
