import get from 'lodash/get';
import invariant from 'tiny-invariant';

import { PxthSegments } from './PxthSource';
import { Pxth } from '.';

export const SegmentsToken = Symbol();
export const GuardToken = Symbol();
export const GuardedPathToken = Symbol();

export const getPxthSegments = <T>(
    pxth: Pxth<T>,
    value: unknown,
): PxthSegments => {
    const normalPxth = (pxth as unknown) as {
        [SegmentsToken]: PxthSegments;
        [GuardToken]: (value: unknown) => value is unknown;
        [GuardedPathToken]: PxthSegments;
    };

    const valueToCheck = get(value, normalPxth[GuardedPathToken]);
    const guard = normalPxth[GuardToken];

    invariant(
        guard(valueToCheck),
        'Value validation failed. Path is pointing to variable which type is not matching',
    );

    return normalPxth[SegmentsToken];
};
