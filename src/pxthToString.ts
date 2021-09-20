import { getPxthSegments } from './getPxthSegments';
import { Pxth } from './Pxth';
import { RootPath, RootPathToken } from '.';

export const pxthToString = <V>(pxth: Pxth<V>): string | RootPath => {
    const segments = getPxthSegments(pxth);

    return segments.length === 0 ? RootPathToken : segments.join('.');
};
