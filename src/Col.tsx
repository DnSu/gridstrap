import type { HTMLAttributes } from 'react';
import type { ColValue, GridSize } from './types';
import { getColClassName, getOrderClassName, joinClasses } from './utils';

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
    getColClassName('col', xs),
    getColClassName('col-sm', sm),
    getColClassName('col-md', md),
    getColClassName('col-lg', lg),
    getColClassName('col-xl', xl),
    getColClassName('col-xxl', xxl),
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
