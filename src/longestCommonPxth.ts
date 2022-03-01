import { createPxth } from './createPxth';
import { getPxthSegments } from './getPxthSegments';
import { Pxth } from './Pxth';
import { PxthSegments } from './PxthSource';

/**
 * Finds longest common path.
 * @example
 * [['hello', 'world'], ['hello', 'world, 'yes'], ['hello', 'world', 'bye', 'asdf']] -> 'hello.world'
 * [['a'], ['b'], ['c']] -> ROOT_PATH
 */
export const longestCommonPxth = (paths: Pxth<unknown>[]): Pxth<unknown> => {
    if (paths.length === 0) return createPxth([]);
    if (paths.length === 1) return paths[0];

    const segments = paths.map(getPxthSegments);

    const longestCommonPathSegments: PxthSegments = [];

    segments.sort((a, b) => a.length - b.length);

    for (let i = 0; i < segments[0].length; i++) {
        const segment = segments[0][i];

        if (segments.every((path) => path[i] === segment)) {
            longestCommonPathSegments.push(segment);
        }
    }

    return createPxth(longestCommonPathSegments);
};