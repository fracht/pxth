import { Pxth, PxthSegment } from './Pxth';
import { toPxth } from './toPxth';

/**
 * Returns relative path. If subPath is not child of basePath, throws error.
 * @example
 * relativePath(['hello', 'world'], ['hello', 'world', 'asdf']) -> ['asdf'],
 * relativePath(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e']) -> ['d', 'e'],
 * relativePath(['a'], ['b']) -> Error
 */
export const relativePath = (
  basePath: Pxth | PxthSegment,
  childPath: Pxth | PxthSegment,
): Pxth => {
  basePath = toPxth(basePath);
  childPath = toPxth(childPath);

  if (basePath.length === 0) {
    return childPath;
  }

  for (let i = 0; i < basePath.length; i++) {
    if (childPath[i] != basePath[i]) {
      throw new Error(
        `Specified "${JSON.stringify(
          childPath,
        )}" sub path is not child of "${JSON.stringify(
          basePath,
        )}" (paths stringed with JSON.stringify so they are not 100% accurate)`,
      );
    }
  }

  return childPath.slice(basePath.length);
};
