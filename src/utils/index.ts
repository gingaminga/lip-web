export const timeout = (ms = 500) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const pad = (text: string, start = "", end = "") => `${start}text${end}`;

export const isEven = (num: number) => num % 2 === 0;
