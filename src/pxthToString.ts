import { getPxthSegments } from './getPxthSegments';
import { Pxth } from './Pxth';

export const pxthToString = <V>(pxth: Pxth<V>): string => {
    const segments = getPxthSegments(pxth);

    return segments.join('.');
};
