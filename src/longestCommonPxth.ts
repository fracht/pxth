import { createPxth } from './createPxth';
import { getPxthSegments } from './getPxthSegments';
import { Pxth } from './Pxth';
import { PxthSegments } from './PxthSource';

/**
 * Finds longest common path.
 * @example
 * [['hello', 'world'], ['hello', 'world, 'yes'], ['hello', 'world', 'bye', 'asdf']] -> 'hello.world'
 * [['a'], ['b'], ['c']] -> RootPathToken
 */
export const longestCommonPxth = (paths: Pxth<unknown>[]): Pxth<unknown> => {
    if (paths.length === 0) {
        return createPxth([]);
    }

    if (paths.length === 1) {
        return paths[0];
    }

    const segmentedPaths = paths.map(getPxthSegments);

    const longestCommonPathSegments: PxthSegments = [];

    const shortestPath = segmentedPaths.reduce((acc, value) => {
        if (value.length < acc.length) {
            return value;
        }

        return acc;
    }, segmentedPaths[0]);

    for (let i = 0; i < shortestPath.length; i++) {
        const segment = shortestPath[i];

        if (segmentedPaths.every((path) => path[i] === segment)) {
            longestCommonPathSegments.push(segment);
        }
    }

    return createPxth(longestCommonPathSegments);
};
