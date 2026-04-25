// src/utils.ts
var joinClasses = (...classes) => classes.filter(Boolean).join(" ");
var getColClassName = (prefix, value) => {
  if (value === true) return prefix;
  if (typeof value === "number") return `${prefix}-${value}`;
  return null;
};
var getOrderClassName = (prefix, value) => {
  if (typeof value === "number") return `${prefix}-${value}`;
  return null;
};

// src/Container.tsx
import { jsx } from "react/jsx-runtime";
function Container({ className, fluid = false, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: joinClasses(fluid ? "container-fluid" : "container", className),
      ...props
    }
  );
}

// src/Row.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Row({ className, justifyContent, alignContent, ...props }) {
  return /* @__PURE__ */ jsx2(
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

// src/Col.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
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
    getColClassName("col", xs),
    getColClassName("col-sm", sm),
    getColClassName("col-md", md),
    getColClassName("col-lg", lg),
    getColClassName("col-xl", xl),
    getColClassName("col-xxl", xxl)
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
  return /* @__PURE__ */ jsx3(
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

// src/constants.ts
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
  lg: "960px",
  xl: "1140px",
  xxl: "1320px"
};
export {
  Col,
  Container,
  GRID_BREAKPOINTS,
  GRID_COLUMNS,
  GRID_CONTAINER_MAX_WIDTHS,
  GRID_GUTTER,
  Row
};
