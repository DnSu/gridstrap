// src/grid.tsx
import { jsx } from "react/jsx-runtime";
var GRID_COLUMNS = 12;
var GRID_GUTTER = "1.5rem";
var GRID_BREAKPOINTS = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px"
};
var GRID_CONTAINER_MAX_WIDTHS = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  xxl: "1320px"
};
var joinClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
var getColClassName = ({ prefix, value }) => {
  if (value === true) {
    return prefix;
  }
  if (typeof value === "number") {
    return `${prefix}-${value}`;
  }
  return null;
};
var getOrderClassName = (prefix, value) => {
  if (typeof value === "number") {
    return `${prefix}-${value}`;
  }
  return null;
};
function Container({
  className,
  fluid = false,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: joinClasses(fluid ? "container-fluid" : "container", className),
      style,
      ...props
    }
  );
}
function Row({
  className,
  justifyContent,
  alignContent,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: joinClasses(
        "row",
        justifyContent ? `justify-content-${justifyContent}` : null,
        alignContent ? `align-content-${alignContent}` : null,
        className
      ),
      ...props
    }
  );
}
function Col({
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
}) {
  const sizeClasses = [
    getColClassName({ prefix: "col", value: xs }),
    getColClassName({ prefix: "col-sm", value: sm }),
    getColClassName({ prefix: "col-md", value: md }),
    getColClassName({ prefix: "col-lg", value: lg }),
    getColClassName({ prefix: "col-xl", value: xl }),
    getColClassName({ prefix: "col-xxl", value: xxl })
  ];
  const orderClasses = [
    getOrderClassName("order", order),
    getOrderClassName("order-sm", orderSm),
    getOrderClassName("order-md", orderMd),
    getOrderClassName("order-lg", orderLg),
    getOrderClassName("order-xl", orderXl),
    getOrderClassName("order-xxl", orderXxl)
  ];
  const hasExplicitSize = [xs, sm, md, lg, xl, xxl].some(
    (value) => value === true || typeof value === "number"
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: joinClasses(
        hasExplicitSize ? null : "col",
        ...sizeClasses,
        ...orderClasses,
        className
      ),
      ...props
    }
  );
}
export {
  Col,
  Container,
  GRID_BREAKPOINTS,
  GRID_COLUMNS,
  GRID_CONTAINER_MAX_WIDTHS,
  GRID_GUTTER,
  Row
};
