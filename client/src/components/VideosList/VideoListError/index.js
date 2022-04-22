import { YoutubeSearchPageLinkGenerator } from "../../../utils/youtubeSearchPageLinkGenerator";

export function VideoListError({ programTitle }) {
  return (
    <p>
      Videos could not be loaded. Checkout YouTube for videos of this program:
      <a
        href={YoutubeSearchPageLinkGenerator({ programTitle })}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        here
      </a>
    </p>
  );
}
