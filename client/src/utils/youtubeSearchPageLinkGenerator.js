export function YoutubeSearchPageLinkGenerator({ programTitle }) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `Yuzuru Hanyu ${programTitle}`
  )}`;
}
