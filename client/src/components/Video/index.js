import { YTVideoLinkGenerator } from "../../utils/youtubeVideoLinkGenerator";
import { VideoShare } from "./VideoShare";
import { VideoThumbnail } from "./VideoThumbnail";

import "./Video.css";

export function Video({ id, thumbnails, title, programTitle }) {
  return (
    <div className="video">
      <a href={YTVideoLinkGenerator({ id })} target="_blank" rel="noreferrer">
        <div className="video-details">
          <VideoThumbnail {...thumbnails?.default} alt={title} />
          <span className="video-title">{title}</span>
        </div>
      </a>
      <VideoShare id={id} title={programTitle} />
    </div>
  );
}
