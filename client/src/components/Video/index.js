import { YTVideoLinkGenerator } from "../../utils/youtubeVideoLinkGenerator";
import { VideoShare } from "./VideoShare";
import { VideoThumbnail } from "./VideoThumbnail";

export function Video({ id, thumbnails, title, programTitle }) {
  return (
    <div>
      <a href={YTVideoLinkGenerator({ id })} target="_blank" rel="noreferrer">
        <VideoThumbnail {...thumbnails?.default} alt={title} />
        <h4>{title}</h4>
      </a>
      <VideoShare id={id} title={programTitle} />
    </div>
  );
}
