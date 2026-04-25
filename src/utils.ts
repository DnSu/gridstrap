import type { ColValue, GridSize } from './types';

export const joinClasses = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export const getColClassName = (prefix: string, value: ColValue | undefined) => {
  if (value === true) return prefix;
  if (typeof value === 'number') return `${prefix}-${value}`;
  return null;
};

export const getOrderClassName = (prefix: string, value: GridSize | undefined) => {
  if (typeof value === 'number') return `${prefix}-${value}`;
  return null;
};
