import { ROOT_PATH } from './constants';
import { Pxth, PxthSegment } from './Pxth';
import { stringToPxth } from './stringToPxth';

export const toPxth = (raw: PxthSegment | Pxth): Pxth => {
  if (Array.isArray(raw)) {
    return raw;
  }

  if (raw === ROOT_PATH) {
    return [];
  }

  if (typeof raw === 'string') {
    return stringToPxth(raw);
  }

  return [raw];
};
