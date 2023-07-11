type OmitMethods<V> = Pick<
    V,
    {
        [K in keyof V]: V[K] extends Function ? never : K;
    }[keyof V]
>;

declare const OptionalSymbol: unique symbol;

type RecordPxth<V> = undefined extends V
    ? RecordPxth<Exclude<V, undefined> & { [OptionalSymbol]: unknown }>
    : {
          [K in keyof Required<OmitMethods<V>>]: Pxth<
              typeof OptionalSymbol extends keyof V ? V[K] | undefined : V[K]
          >;
      };

type PreparePxth<V> = V extends number
    ? Number
    : V extends boolean
    ? Boolean
    : V extends string
    ? String
    : V extends symbol
    ? Symbol
    : V;

type SpecificPxth<V> = V extends unknown[]
    ? RecordPxth<Omit<Array<V>, number>>
    : {};

declare const BrandKey: unique symbol;

export type Pxth<V> = {
    /**
     * Not an actual value - used to trick TypeScript. The trick is that
     * Pxth does not contain any value V. However, we still need type
     * safety for this type. For instance, we cannot assign value of type
     * Pxth<number> to type Pxth<string>. So to achieve this behavior, we
     * assign value, that cannot be accessed (because BrandKey is not exported)
     */
    [BrandKey]: V;
} & RecordPxth<PreparePxth<V>> &
    SpecificPxth<V>;
