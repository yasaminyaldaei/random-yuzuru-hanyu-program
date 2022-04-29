import { VideoShare } from "./VideoShare";
import { VideoThumbnail } from "./VideoThumbnail";

import "./Video.css";

export function Video({ id, thumbnails, title, programTitle, onClick }) {
  return (
    <div className="video">
      <div onClick={onClick} className="video-details">
        <VideoThumbnail {...thumbnails?.default} alt={title} />
        <span
          className="video-title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></span>
      </div>
      <VideoShare id={id} title={programTitle} />
    </div>
  );
}
