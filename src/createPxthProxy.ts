import { GuardedPathToken, GuardToken, SegmentsToken } from './getPxthSource';
import { Pxth } from './Pxth';
import { PxthSource } from './PxthSource';

const handlers: ProxyHandler<{
    source: PxthSource;
    guard: (value: unknown) => value is unknown;
    guardedPath: PxthSource;
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
    path: PxthSource,
    guard: (value: unknown) => value is GuardedType,
    guardedPath: PxthSource = path,
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
