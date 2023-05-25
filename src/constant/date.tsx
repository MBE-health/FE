export const monthArray = Array.from({ length: 12 }, (v, i) => i + 1);
export const yearArray = Array.from({ length: 3 }, (v, i) => i + 2021);
export const day30Array = Array.from({ length: 30 }, (v, i) => i + 1);
export const day31Array = Array.from({ length: 31 }, (v, i) => i + 1);

export function isDay31(month: number) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return true;
  } else {
    return false;
  }
}
