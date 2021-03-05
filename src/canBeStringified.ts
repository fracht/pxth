import { Pxth } from './Pxth';

export const canBeStringified = (pxth: Pxth) =>
  pxth.every(
    (segment) => typeof segment === 'string' || typeof segment === 'number',
  );
