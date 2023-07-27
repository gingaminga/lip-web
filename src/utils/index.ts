export const timeout = (ms = 500) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const pad = (text: string, start = "", end = "") => `${start}text${end}`;

export const isEven = (num: number) => num % 2 === 0;

export const cutString = (text: string, max = 12) => {
  const ellipsis = "...";

  if (text.length <= max) {
    return text;
  }

  return text.substring(0, max) + ellipsis;
};
