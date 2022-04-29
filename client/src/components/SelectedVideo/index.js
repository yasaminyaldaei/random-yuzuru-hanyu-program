import { useEffect, useRef, useState } from "react";
import { Loading } from "../Loading";

import "./SelectedVideo.css";

export function SelectedVideo({ videoId }) {
  const iframe = useRef(null);
  const width = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [videoId]);

  useEffect(() => {
    width.current = Math.max(
      300,
      Math.min(window.innerWidth - 120 || 560, 768 - 40)
    );
  }, [iframe]);

  return (
    <div className="selected-video-container">
      <Loading show={loading} />
      <iframe
        ref={iframe}
        width={width.current}
        height={width.current * 0.5625}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="selected-video"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
