import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes } from 'react';

declare const GRID_COLUMNS = 12;
declare const GRID_GUTTER = "1.5rem";
declare const GRID_BREAKPOINTS: {
    readonly sm: "576px";
    readonly md: "768px";
    readonly lg: "992px";
    readonly xl: "1200px";
    readonly xxl: "1400px";
};
declare const GRID_CONTAINER_MAX_WIDTHS: {
    readonly sm: "540px";
    readonly md: "720px";
    readonly lg: "960px";
    readonly xl: "1140px";
    readonly xxl: "1320px";
};
type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColValue = boolean | GridSize;
type Breakpoint = 'xs' | keyof typeof GRID_BREAKPOINTS;
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type AlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    fluid?: boolean;
}
declare function Container({ className, fluid, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;
interface RowProps extends HTMLAttributes<HTMLDivElement> {
    justifyContent?: JustifyContent;
    alignContent?: AlignContent;
}
declare function Row({ className, justifyContent, alignContent, ...props }: RowProps): react_jsx_runtime.JSX.Element;
interface ColProps extends HTMLAttributes<HTMLDivElement> {
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
declare function Col({ className, xs, sm, md, lg, xl, xxl, order, orderSm, orderMd, orderLg, orderXl, orderXxl, ...props }: ColProps): react_jsx_runtime.JSX.Element;

export { type AlignContent, type Breakpoint, Col, type ColProps, type ColValue, Container, type ContainerProps, GRID_BREAKPOINTS, GRID_COLUMNS, GRID_CONTAINER_MAX_WIDTHS, GRID_GUTTER, type GridSize, type JustifyContent, Row, type RowProps };
