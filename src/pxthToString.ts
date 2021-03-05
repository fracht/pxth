import { canBeStringified } from './canBeStringified';
import type { Pxth } from './Pxth';

export const pxthToString = (pxth: Pxth) => {
  if (!canBeStringified(pxth)) {
    throw new StringifyError(pxth);
  }

  return pxth
    .map((segment) => {
      if (typeof segment === 'string') {
        segment = segment.replace(/(\.|"|')/g, '\\$1');
        return /^\w+$/.test(segment) ? segment : `["${segment}"]`;
      } else {
        return segment;
      }
    })
    .join('.');
};

export class StringifyError extends Error {
  public constructor(pxth: Pxth) {
    super(`${JSON.stringify(pxth)} cannot be stringified`);
  }
}
