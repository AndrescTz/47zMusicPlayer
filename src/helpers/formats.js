function secondsToDate(seconds) {
  const date = new Date(seconds * 1000);
  const dateMinutes = date.getMinutes();
  const dateSeconds = date.getSeconds();
  const format = (value) => (value < 10 ? `0${value}` : value);
  return `${format(dateMinutes)}:${format(dateSeconds)}`;
}

export { secondsToDate };
