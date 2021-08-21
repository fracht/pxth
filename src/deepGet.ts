import get from 'lodash/get';

import { getPxthSource } from './getPxthSource';
import { Pxth } from '.';

export const deepGet = <V>(object: unknown, path: Pxth<V>): V => {
    const source = getPxthSource(path, object);

    if (source.length === 0) {
        return object as V;
    }

    return get(object, source);
};
