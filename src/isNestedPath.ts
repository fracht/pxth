import { Pxth, PxthSegment } from './Pxth';
import { toPxth } from './toPxth';

/**
 * Check if **b** nested path of **a**
 */
export const isNestedPath = (
  a: Pxth | PxthSegment,
  b: Pxth | PxthSegment,
): boolean => {
  a = toPxth(a);
  b = toPxth(b);

  if (b.length < a.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
