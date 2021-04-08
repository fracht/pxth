import { Pxth } from './Pxth';

/**
 * Check if **b** nested path of **a**
 */
export const isNestedPath = (a: Pxth, b: Pxth): boolean => {
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
