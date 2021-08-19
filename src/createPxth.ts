import { createPxthProxy } from './createPxthProxy';
import { PxthSource } from './PxthSource';
import { Pxth } from '.';

export const createPxth = <T>(
    path: PxthSource,
    guard: (value: unknown) => value is T,
): Pxth<T> => {
    return createPxthProxy(path, guard);
};
