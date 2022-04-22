const BASE_LINK = "https://www.youtube.com/watch?v=";

export function YTVideoLinkGenerator({ id }) {
  return BASE_LINK.concat(id);
}
