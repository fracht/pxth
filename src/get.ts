import { Pxth, PxthSegment } from './Pxth';
import { toPxth } from './toPxth';

export function get<T, V>(object: T, path: Pxth | PxthSegment): V | undefined;

export function get<T, V>(
  object: T,
  path: Pxth | PxthSegment,
  defaultValue: V,
): V;

export function get<T, V>(
  object: T,
  path: Pxth | PxthSegment,
  defaultValue?: V,
): V | undefined {
  path = toPxth(path);

  let obj: unknown = object as unknown;

  for (let i = 0; i < path.length; i++) {
    if (
      obj !== undefined &&
      obj !== null &&
      Object.prototype.hasOwnProperty.call(obj, path[i])
    ) {
      obj = ((obj as unknown) as Record<string, unknown>)[
        (path[i] as unknown) as string
      ];
    } else {
      return defaultValue;
    }
  }

  return obj as V;
}
