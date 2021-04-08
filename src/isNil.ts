export const isNil = (value: unknown): value is undefined | null =>
  value === undefined || value === null || Number.isNaN(value);
