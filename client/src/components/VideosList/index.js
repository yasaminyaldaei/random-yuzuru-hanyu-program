import { useEffect, useState } from "react";
import { getYTVideos } from "../../api";
import { Video } from "../Video";

export function VideosList({ program }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (program) getYTVideos({ program }).then((data) => setVideos(data.items));
  }, [program]);

  if (!program) return null;

  return (
    <div>
      {videos && videos.length !== 0
        ? videos.map((video) => (
            <Video key={video.etag} id={video.id.videoId} {...video.snippet} />
          ))
        : null}
    </div>
  );
}
