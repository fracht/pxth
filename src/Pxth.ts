type OmitMethods<V extends object> = Pick<
    V,
    {
        [K in keyof V]: V[K] extends Function ? never : K;
    }[keyof V]
>;

type RecordPxth<V extends object> = {
    [K in keyof OmitMethods<V>]: Pxth<V[K]>;
};

type ArrayPxth<V extends unknown[]> = {
    [K in number]: Pxth<V[number]>;
} &
    RecordPxth<Omit<V, number>>;

type ObjectPxth<V extends object> = V extends unknown[]
    ? ArrayPxth<V>
    : RecordPxth<V>;

declare const BrandKey: unique symbol;
declare const PrimitiveKey: unique symbol;

export type Pxth<V> = {
    /**
     * Not an actual value - used to trick TypeScript. The trick is that
     * Pxth does not contain any value V. However, we still need type
     * safety for this type. For instance, we cannot assign value of type
     * Pxth<number> to type Pxth<string>. So to achieve this behavior, we
     * assign value, that cannot be accessed (because BrandKey is not exported)
     */
    [BrandKey]: V;
} & (V extends object
    ? ObjectPxth<V>
    : {
          /**
           * Another trick - if we leave this object empty, typescript will
           * automatically unwrap all non-object types (Pxth<number> becomes
           * { [BrandKey]: number }). Because of that, we cannot infer type
           * when using in generic functions. To prevent this behavior, we
           * add another inaccessible property.
           */
          [PrimitiveKey]: true;
      });
