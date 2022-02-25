import invariant from 'tiny-invariant';

import { createPxth } from './createPxth';
import { getPxthSegments } from './getPxthSegments';
import { Pxth } from './Pxth';
import { pxthToString } from './pxthToString';
import { samePxth } from './samePxth';

/**
 * Returns relative path. If subPath is not child of basePath, it will throw an error.
 * @example
 * relativePxth(['hello', 'world'], ['hello', 'world', 'asdf']) -> ['asdf'],
 * relativePxth(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e']) -> ['d', 'e'],
 * relativePxth(['a', 'b', 'c'], ['a', 'b', 'c']) -> ROOT_PATH,
 * relativePxth(['a'], ['b']) -> Error
 */
export const relativePxth = <A, B>(
    basePath: Pxth<A>,
    subPath: Pxth<B>,
): Pxth<B> => {
    const basePathSegments = getPxthSegments(basePath);
    const subPathSegments = getPxthSegments(subPath);

    if (basePathSegments.length === 0 && subPathSegments.length === 0) {
        return createPxth([]);
    }

    if (basePathSegments.length === 0) {
        return subPath;
    }

    invariant(
        subPathSegments.length !== 0,
        'ROOT_PATH symbol cannot be sub path of any path',
    );

    invariant(
        subPathSegments.length >= basePathSegments.length,
        `Sub path (${String(
            pxthToString(subPath),
        )}) must be longer than base path (${String(pxthToString(basePath))})`,
    );

    for (let i = 0; i < basePathSegments.length; i++) {
        if (subPathSegments[i] !== basePathSegments[i]) {
            invariant(
                false,
                `${String(pxthToString(subPath))} is not sub path of ${String(
                    pxthToString(basePath),
                )}`,
            );
        }
    }

    if (samePxth(basePath as Pxth<unknown>, subPath as Pxth<unknown>)) {
        return createPxth([]);
    }

    return createPxth(subPathSegments.slice(basePathSegments.length));
};
