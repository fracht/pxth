import { ROOT_PATH } from './constants';
import { Pxth } from './Pxth';
import { pxthToString } from './pxthToString';

export const toObjectKey = (pxth: Pxth): string | symbol | number => {
  if (pxth.length === 0) {
    return ROOT_PATH;
  }

  if (pxth.length === 1) {
    return pxth[0];
  }

  return pxthToString(pxth);
};
