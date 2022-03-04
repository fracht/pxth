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

    const segmentedPaths = paths.map(getPxthSegments);

    const resultingSegments: PxthSegments = [];

    for (let i = 0; i < segmentedPaths[0].length; i++) {
        const segment = segmentedPaths[0][i];

        for (let j = 1; j < segmentedPaths.length; j++) {
            if (
                segmentedPaths[j].length <= i ||
                segmentedPaths[j][i] !== segment
            ) {
                return createPxth(resultingSegments);
            }
        }

        resultingSegments.push(segment);
    }

    return createPxth(resultingSegments);
};
