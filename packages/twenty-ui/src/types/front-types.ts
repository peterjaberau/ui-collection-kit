import { z } from 'zod';

export type ComponentParameters<
    ComponentTypeToExtract extends (args: object) => any,
> = Parameters<ComponentTypeToExtract>[0];

export type ExcludeLiteral<T, U extends T> = T extends U ? never : T;

export type PickLiteral<T, U extends T> = U;

export type ReadonlyKeysArray<T> = readonly (keyof T)[];

export type ScopeContextProps<T = unknown> = {
    scopeId: string;
} & T;

export type StringKeyOf<T> = Extract<keyof T, string>;

export type WithNarrowedStringLiteralProperty<
    T,
    K extends keyof T,
    Sub extends T[K],
> = Omit<T, K> & {
    [P in K]: Extract<T[K], Sub>;
};


export const zodNonEmptyString = z.string().min(1);
