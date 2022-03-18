import { SegmentsToken } from './getPxthSegments';
import { Pxth } from './Pxth';

export const isPxth = (path: unknown): path is Pxth<unknown> =>
    typeof path === 'object' && path !== null && (SegmentsToken in path);
