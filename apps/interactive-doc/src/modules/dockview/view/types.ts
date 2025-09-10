import { Parameters } from '../core';

export interface PanelParameters<T extends {} = Parameters> {
    params: T;
}
