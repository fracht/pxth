import { SegmentsToken } from './getPxthSegments';
import { Pxth } from './Pxth';

export const isPxth = (path: object): path is Pxth<unknown> =>
    SegmentsToken in path;
