import type { HTMLAttributes } from 'react';

export const GRID_COLUMNS = 12;
export const GRID_GUTTER = '1.5rem';

export const GRID_BREAKPOINTS = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
} as const;

export const GRID_CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
} as const;

export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColValue = boolean | GridSize;
export type Breakpoint = 'xs' | keyof typeof GRID_BREAKPOINTS;

interface BreakpointConfig {
  prefix: string;
  value: ColValue | undefined;
}

const joinClasses = (...classes: Array<string | false | null | undefined>) => {
  return classes.filter(Boolean).join(' ');
};

const getColClassName = ({ prefix, value }: BreakpointConfig) => {
  if (value === true) {
    return prefix;
  }

  if (typeof value === 'number') {
    return `${prefix}-${value}`;
  }

  return null;
};

const getOrderClassName = (prefix: string, value: GridSize | undefined) => {
  if (typeof value === 'number') {
    return `${prefix}-${value}`;
  }

  return null;
};

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

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export function Container({
  className,
  fluid = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={joinClasses(fluid ? 'container-fluid' : 'container', className)}
      {...props}
    />
  );
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
}

export function Row({
  className,
  justifyContent,
  alignContent,
  ...props
}: RowProps) {
  return (
    <div
      className={joinClasses(
        'row',
        justifyContent ? `justify-content-${justifyContent}` : null,
        alignContent ? `align-content-${alignContent}` : null,
        className,
      )}
      {...props}
    />
  );
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xs?: ColValue;
  sm?: ColValue;
  md?: ColValue;
  lg?: ColValue;
  xl?: ColValue;
  xxl?: ColValue;
  order?: GridSize;
  orderSm?: GridSize;
  orderMd?: GridSize;
  orderLg?: GridSize;
  orderXl?: GridSize;
  orderXxl?: GridSize;
}

export function Col({
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  order,
  orderSm,
  orderMd,
  orderLg,
  orderXl,
  orderXxl,
  ...props
}: ColProps) {
  const sizeClasses = [
    getColClassName({ prefix: 'col', value: xs }),
    getColClassName({ prefix: 'col-sm', value: sm }),
    getColClassName({ prefix: 'col-md', value: md }),
    getColClassName({ prefix: 'col-lg', value: lg }),
    getColClassName({ prefix: 'col-xl', value: xl }),
    getColClassName({ prefix: 'col-xxl', value: xxl }),
  ];

  const orderClasses = [
    getOrderClassName('order', order),
    getOrderClassName('order-sm', orderSm),
    getOrderClassName('order-md', orderMd),
    getOrderClassName('order-lg', orderLg),
    getOrderClassName('order-xl', orderXl),
    getOrderClassName('order-xxl', orderXxl),
  ];

  const hasExplicitSize = [xs, sm, md, lg, xl, xxl].some(
    (value) => value === true || typeof value === 'number',
  );

  return (
    <div
      className={joinClasses(
        hasExplicitSize ? null : 'col',
        ...sizeClasses,
        ...orderClasses,
        className,
      )}
      {...props}
    />
  );
}
