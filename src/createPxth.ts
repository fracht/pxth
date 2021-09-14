import { createPxthProxy } from './createPxthProxy';
import { Pxth, PxthSegments } from '.';

export const createPxth = <T>(path: PxthSegments): Pxth<T> => {
    return createPxthProxy(path);
};
