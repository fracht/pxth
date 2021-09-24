import { SegmentsToken } from './getPxthSegments';
import { Pxth } from './Pxth';
import { PxthSegments } from './PxthSource';

const handlers: ProxyHandler<{
    source: PxthSegments;
}> = {
    get: (target, path) => {
        if (path === 'toJSON') {
            return () => ({ source: target.source });
        }

        if (path === SegmentsToken) {
            return target.source;
        }

        return createPxthProxy([...target.source, path]);
    },
};

export const createPxthProxy = <Type>(path: PxthSegments): Pxth<Type> => {
    return (new Proxy(
        {
            source: path,
        },
        handlers,
    ) as unknown) as Pxth<Type>;
};
