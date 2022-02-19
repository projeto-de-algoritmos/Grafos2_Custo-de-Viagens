export const handleTimeout = (secs) => {
  return new Promise((resolve) => {
    setTimeout(resolve, secs * 1000);
  });
};
