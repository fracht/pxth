import { ROOT_PATH } from './constants';
import { Pxth, PxthSegment } from './Pxth';
import { stringToPxth } from './stringToPxth';

export const toPxth = (raw: PxthSegment): Pxth => {
  if (raw === ROOT_PATH) {
    return [];
  }

  if (typeof raw === 'string') {
    return stringToPxth(raw);
  }

  return [raw];
};
