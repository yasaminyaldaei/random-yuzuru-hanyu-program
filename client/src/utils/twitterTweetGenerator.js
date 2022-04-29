export function TwitterTweetGenerator({ id, title }) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Today's Random Yuzuru Program:\n ${title}\n`
  )}&url=${encodeURIComponent(
    `https://share.randomyuzu.fun/deep-link?videoId=${id}`
  )}`;
}
