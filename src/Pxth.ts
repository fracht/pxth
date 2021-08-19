declare const NumberPxthToken: unique symbol;

type NumberPxth = {
    _token: typeof NumberPxthToken;
};

declare const StringPxthToken: unique symbol;

type StringPxth = {
    _token: typeof StringPxthToken;
};

declare const BooleanPxthToken: unique symbol;

type BooleanPxth = {
    _token: typeof BooleanPxthToken;
};

declare const BigIntPxthToken: unique symbol;

type BigIntPxth = {
    _token: typeof BigIntPxthToken;
};

declare const UnknownPxthToken: unique symbol;

type UnknownPxth = {
    _token: typeof UnknownPxthToken;
};

declare const DatePxthToken: unique symbol;

type DatePxth = {
    _token: typeof DatePxthToken;
};

export type PrimitivePxth<V> = V extends string
    ? StringPxth
    : V extends number
    ? NumberPxth
    : V extends boolean
    ? BooleanPxth
    : V extends bigint
    ? BigIntPxth
    : UnknownPxth;

export type Pxth<V> = V extends object
    ? V extends Date
        ? DatePxth
        : {
              [K in keyof V]: Pxth<V[K]>;
          }
    : PrimitivePxth<V>;
