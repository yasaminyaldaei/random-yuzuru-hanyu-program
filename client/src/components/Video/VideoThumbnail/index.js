export function VideoThumbnail({ url, width, height, alt }) {
  return (
    <img
      src={url}
      width={width}
      height={height}
      alt={alt}
      className="video-thumbnail"
    />
  );
}
