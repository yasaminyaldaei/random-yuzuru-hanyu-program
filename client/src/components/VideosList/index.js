import { useEffect, useState } from "react";
import { getYTVideos } from "../../api";
import { Video } from "../Video";
import { VideoListError } from "./VideoListError";

export function VideosList({ program }) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (program)
      getYTVideos({ program })
        .then((data) => setVideos(data.items))
        .catch(() => {
          setError(true);
        });
  }, [program]);

  if (!program) return null;

  return (
    <div>
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
