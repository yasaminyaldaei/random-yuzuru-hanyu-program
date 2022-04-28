const FORMAT = "en-CA";

export function localeDateStringGenerator({ date } = { date: new Date() }) {
  return date.toLocaleDateString(FORMAT);
}
