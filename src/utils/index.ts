export const timeout = (ms = 500) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
