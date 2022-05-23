import { PxthSegments } from './PxthSegments';
import { Pxth } from '.';

export const SegmentsToken = Symbol();

export const getPxthSegments = <T>(pxth: Pxth<T>): PxthSegments => {
    const normalPxth = (pxth as unknown) as {
        [SegmentsToken]: PxthSegments;
    };

    return normalPxth[SegmentsToken];
};
