import { isArrayIndex } from './isArrayIndex';
import { isObject } from './isObject';
import { Pxth } from './Pxth';

export const set = <T, V>(object: T, path: Pxth, value: V): T => {
  if (!isObject(object)) {
    return object;
  }

  let currentObj: unknown = object;

  for (let i = 0; i < path.length - 1; i++) {
    if (isObject((currentObj as Record<string, unknown>)[path[i] as string])) {
      currentObj = (currentObj as Record<string, unknown>)[path[i] as string];
    } else {
      const newObj = isArrayIndex(path[i + 1]) ? [] : {};
      (currentObj as Record<string, unknown>)[path[i] as string] = newObj;
      currentObj = newObj;
    }
  }

  (currentObj as Record<string, unknown>)[
    path[path.length - 1] as string
  ] = value;

  return object;
};
