const indexRegex = /^[0-9]+$/;

export const isArrayIndex = (value: unknown): value is number | string =>
  (typeof value === 'string' && indexRegex.test(value)) ||
  (typeof value === 'number' && value >= 0 && indexRegex.test(String(value)));
