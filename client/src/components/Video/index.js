import { YTVideoLinkGenerator } from "../../utils/youtubeVideoLinkGenerator";
import { VideoShare } from "./VideoShare";
import { VideoThumbnail } from "./VideoThumbnail";

export function Video({ id, thumbnails, title }) {
  return (
    <a href={YTVideoLinkGenerator({ id })} target="_blank" rel="noreferrer">
      <div>
        <VideoThumbnail {...thumbnails?.default} alt={title} />
        <h4>{title}</h4>
        <VideoShare />
      </div>
    </a>
  );
}
