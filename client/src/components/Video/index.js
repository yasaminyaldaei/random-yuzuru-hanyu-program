import { YTVideoLinkGenerator } from "../../utils/youtubeVideoLinkGenerator";
import { VideoThumbnail } from "./VideoThumbnail";

export function Video({ id, thumbnails, title }) {
  return (
    <a href={YTVideoLinkGenerator({ id })} target="_blank">
      <div>
        <VideoThumbnail {...thumbnails?.default} />
        <h4>{title}</h4>
      </div>
    </a>
  );
}
