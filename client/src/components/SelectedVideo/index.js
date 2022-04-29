import { useEffect, useState } from "react";
import { Loading } from "../Loading";

import "./SelectedVideo.css";

export function SelectedVideo({ videoId }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [videoId]);

  return (
    <div className="selected-video-container">
      <Loading show={loading} />
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="selected-video"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
