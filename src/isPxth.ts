import { SegmentsToken } from './getPxthSegments';

export const isPxth = (path: object) =>
    Boolean((path as { [SegmentsToken]: string[] })[SegmentsToken]);
