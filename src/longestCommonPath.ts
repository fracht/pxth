import { Pxth, PxthSegment } from './Pxth';
import { toPxth } from './toPxth';

const comparePaths = (a: Pxth, b: Pxth) => {
  let i = 0;

  for (; i < a.length; i++) {
    if (a[i] !== b[i]) {
      break;
    }
  }

  if (i === a.length || b[i] === undefined) {
    return a.length - b.length;
  }

  const cmp = String(a[i]).localeCompare(String(b[i]));

  return cmp || a.length - b.length;
};

export const longestCommonPath = (paths: (Pxth | PxthSegment)[]): Pxth => {
  const normalizedPaths = paths.map(toPxth);

  if (normalizedPaths.length === 0) {
    return [];
  }

  if (normalizedPaths.length === 1) {
    return normalizedPaths[0];
  }

  normalizedPaths.sort(comparePaths);

  const firstPath = normalizedPaths[0];
  const lastPath = normalizedPaths[normalizedPaths.length - 1];

  for (let i = 0; i < firstPath.length; i++) {
    if (firstPath[i] !== lastPath[i]) {
      return firstPath.slice(0, i);
    }
  }

  return firstPath;
};
