import get from 'lodash/get';

import { getPxthSource } from './getPxthSource';
import { Pxth } from '.';

export const deepGet = <T>(object: unknown, path: Pxth<T>): T => {
    const source = getPxthSource(path, object);

    if (source.length === 0) {
        return object as T;
    }

    return get(object, source);
};
