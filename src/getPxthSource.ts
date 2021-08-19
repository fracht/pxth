import get from 'lodash/get';
import invariant from 'tiny-invariant';

import { PxthSource } from './PxthSource';
import { Pxth } from '.';

export const SegmentsToken = Symbol();
export const GuardToken = Symbol();
export const GuardedPathToken = Symbol();

export const getPxthSource = <T>(pxth: Pxth<T>, value: unknown): PxthSource => {
    const normalPxth = (pxth as unknown) as {
        [SegmentsToken]: PxthSource;
        [GuardToken]: (value: unknown) => value is unknown;
        [GuardedPathToken]: PxthSource;
    };

    const valueToCheck = get(value, normalPxth[GuardedPathToken]);
    const guard = normalPxth[GuardToken];

    invariant(
        guard(valueToCheck),
        'Value validation failed. Path is pointing to variable which type is not matching',
    );

    return normalPxth[SegmentsToken];
};
