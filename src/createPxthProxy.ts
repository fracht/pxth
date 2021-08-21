import { GuardedPathToken, GuardToken, SegmentsToken } from './getPxthSegments';
import { Pxth } from './Pxth';
import { PxthSegments } from './PxthSource';

const handlers: ProxyHandler<{
    source: PxthSegments;
    guard: (value: unknown) => value is unknown;
    guardedPath: PxthSegments;
}> = {
    get: (target, path) => {
        if (path === SegmentsToken) {
            return target.source;
        }

        if (path === GuardToken) {
            return target.guard;
        }

        if (path == GuardedPathToken) {
            return target.guardedPath;
        }

        return createPxthProxy(
            [...target.source, path],
            target.guard,
            target.guardedPath,
        );
    },
};

export const createPxthProxy = <Type, GuardedType = Type>(
    path: PxthSegments,
    guard: (value: unknown) => value is GuardedType,
    guardedPath: PxthSegments = path,
): Pxth<Type> => {
    return (new Proxy(
        {
            source: path,
            guard,
            guardedPath,
        },
        handlers,
    ) as unknown) as Pxth<Type>;
};
