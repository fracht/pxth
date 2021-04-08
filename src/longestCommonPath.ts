import { Pxth } from './Pxth';

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

export const longestCommonPath = (paths: Pxth[]): Pxth => {
  if (paths.length === 0) {
    return [];
  }

  if (paths.length === 1) {
    return paths[0];
  }

  paths.sort(comparePaths);

  const firstPath = paths[0];
  const lastPath = paths[paths.length - 1];

  for (let i = 0; i < firstPath.length; i++) {
    if (firstPath[i] !== lastPath[i]) {
      return firstPath.slice(0, i);
    }
  }

  return firstPath;
};
