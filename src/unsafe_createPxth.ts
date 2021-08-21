import { createPxth, Pxth, PxthSegments } from '.';

export const unsafe_createPxth = <T>(path: PxthSegments): Pxth<T> => {
    return createPxth(path, (value: unknown): value is T => true);
};
