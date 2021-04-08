import { Pxth } from './Pxth';

export function get<T, V>(object: T, path: Pxth): V | undefined;

export function get<T, V>(object: T, path: Pxth, defaultValue: V): V;

export function get<T, V>(
  object: T,
  path: Pxth,
  defaultValue?: V,
): V | undefined {
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
