"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Col: () => Col,
  Container: () => Container,
  GRID_BREAKPOINTS: () => GRID_BREAKPOINTS,
  GRID_COLUMNS: () => GRID_COLUMNS,
  GRID_CONTAINER_MAX_WIDTHS: () => GRID_CONTAINER_MAX_WIDTHS,
  GRID_GUTTER: () => GRID_GUTTER,
  Row: () => Row
});
module.exports = __toCommonJS(index_exports);

// src/grid.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: joinClasses(fluid ? "container-fluid" : "container", className),
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Col,
  Container,
  GRID_BREAKPOINTS,
  GRID_COLUMNS,
  GRID_CONTAINER_MAX_WIDTHS,
  GRID_GUTTER,
  Row
});
