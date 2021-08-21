import get from 'lodash/get';

import { getPxthSegments } from './getPxthSegments';
import { Pxth } from '.';

export const deepGet = <V>(object: unknown, path: Pxth<V>): V => {
    const source = getPxthSegments(path, object);

    if (source.length === 0) {
        return object as V;
    }

    return get(object, source);
};
