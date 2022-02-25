import { createPxth } from './createPxth';
import { getPxthSegments } from './getPxthSegments';
import { Pxth } from './Pxth';

export const joinPaths = <V>(...segments: Pxth<unknown>[]): Pxth<V> => {
    if (segments.length === 0) {
        return createPxth([]);
    }

    return createPxth<V>(segments.map(getPxthSegments).flat());
};
