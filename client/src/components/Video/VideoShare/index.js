import { ReactComponent as Share } from "../../../assets/share-icon.svg";
import { TwitterTweetGenerator } from "../../../utils/twitterTweetGenerator";

export function VideoShare({ id, title }) {
  return (
    <a
      href={TwitterTweetGenerator({ id, title })}
      target="_blank"
      rel="noreferrer"
      className="video-share"
    >
      <Share width={18} />
    </a>
  );
}
