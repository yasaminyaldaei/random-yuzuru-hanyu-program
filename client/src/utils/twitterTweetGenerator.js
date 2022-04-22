export function TwitterTweetGenerator({ id, title }) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Today's Random Yuzuru Program:\n ${title}`
  )}&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}`;
}