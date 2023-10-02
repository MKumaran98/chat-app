export const getTime = (date) => {
  const h = date.getHours();
  let m = date.getMinutes();
  if (m < 10) m = `0${m}`;
  return `${h % 12 || 12}:${m} ${h < 12 ? "A" : "P"}M`;
};
