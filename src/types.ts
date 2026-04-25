import type { GRID_BREAKPOINTS } from './constants';

export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColValue = boolean | GridSize;
export type Breakpoint = 'xs' | keyof typeof GRID_BREAKPOINTS;

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export type AlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'stretch';
