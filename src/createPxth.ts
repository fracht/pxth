import { createPxthProxy } from './createPxthProxy';
import { PxthSegments } from './PxthSource';
import { Pxth } from '.';

export const createPxth = <T>(
    path: PxthSegments,
    guard: (value: unknown) => value is T,
): Pxth<T> => {
    return createPxthProxy(path, guard);
};
