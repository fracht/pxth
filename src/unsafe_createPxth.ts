import { createPxth, Pxth, PxthSource } from '.';

export const unsafe_createPxth = <T>(path: PxthSource): Pxth<T> => {
    return createPxth(path, (value: unknown): value is T => true);
};
