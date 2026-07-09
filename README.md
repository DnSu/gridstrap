# gridstrap

Reusable React grid primitives and matching stylesheet exports for other projects.

## Install

```sh
yarn add gridstrap react
```

## Usage

### Include styles

Import prebuilt CSS:

```ts
import 'gridstrap/grid.css';
```

Or include SCSS in your own bundle:

```scss
@use 'gridstrap/grid.scss';
```

### Basic grid

Then use the components:

```tsx
import { Col, Container, Row } from 'gridstrap';

export function Example() {
	return (
		<Container>
			<Row>
				<Col md={8}>Main</Col>
				<Col md={4}>Sidebar</Col>
			</Row>
		</Container>
	);
}
```

### Row content alignment

Use `justifyContent` and `alignContent` on `Row`:

```tsx
import { Col, Container, Row } from 'gridstrap';

export function RowAlignmentExample() {
	return (
		<Container>
			<Row justifyContent="between" alignContent="center">
				<Col md={4}>One</Col>
				<Col md={4}>Two</Col>
				<Col md={4}>Three</Col>
			</Row>
		</Container>
	);
}
```

- `justifyContent`: `start | end | center | between | around | evenly`
- `alignContent`: `start | end | center | between | around | stretch`

### Fluid container

Use the `fluid` prop to render a full-width container:

```tsx
import { Col, Container, Row } from 'gridstrap';

export function FluidExample() {
	return (
		<Container fluid>
			<Row>
				<Col md={6}>Left</Col>
				<Col md={6}>Right</Col>
			</Row>
		</Container>
	);
}
```

### Ordering by breakpoint

Use `order*` props to change layout order at different breakpoints:

```tsx
import { Col, Container, Row } from 'gridstrap';

export function ResponsiveOrderExample() {
	return (
		<Container>
			<Row>
				<Col xs={12} md={8} order={2} orderMd={1}>
					Main content
				</Col>
				<Col xs={12} md={4} order={1} orderMd={2}>
					Sidebar
				</Col>
			</Row>
		</Container>
	);
}
```

### Override SCSS variables

When using SCSS, override defaults with `@use ... with (...)`:

```scss
@use 'gridstrap/grid.scss' with (
	$grid-columns: 12,
	$grid-gutter: 2rem,
	$breakpoints: (
		'sm': 640px,
		'md': 768px,
		'lg': 1024px,
		'xl': 1280px,
		'xxl': 1536px,
	),
	$container-max-widths: (
		'sm': 600px,
		'md': 760px,
		'lg': 980px,
		'xl': 1220px,
		'xxl': 1460px,
	)
);
```

## Known limitations

### Next.js 16 (Turbopack) Sass resolution

Some Next.js 16 Turbopack builds have been reported to fail resolving the relative
`@forward`/`@use` partial imports inside `gridstrap/grid.scss` when it's consumed from
`node_modules`, with an error like:

```
Error: Can't find stylesheet to import.
  1 │ @forward './variables';
    node_modules/gridstrap/dist/grid.scss 1:1  @forward
```

This is a known class of upstream Turbopack Sass-resolution bug (see
[vercel/next.js#87243](https://github.com/vercel/next.js/issues/87243) and
[vercel/next.js#60088](https://github.com/vercel/next.js/issues/60088)), most commonly
reported on Windows. It was not reproducible against current stable Next.js (16.0.0–16.2.10)
on Linux/macOS in flat `node_modules` or pnpm-workspace monorepo setups tested against this
package, but as a defensive measure `grid.scss` and its partials now import each other using
explicit underscore-prefixed paths (e.g. `@forward './_variables'` instead of `@forward
'./variables'`) instead of relying on Turbopack applying Sass's partial-naming convention, and
`package.json` exposes every `dist/*.scss` partial through `exports` so resolvers that enforce
package export maps can reach them directly.

If you still hit this error on Turbopack, the workaround is to point Sass at gridstrap's
`dist` directory directly via `sassOptions.loadPaths` in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ['./node_modules/gridstrap/dist'],
  },
};
```

or build with `next build --webpack` / `next dev --webpack`, which resolves these imports
correctly today.

## Exports

- `Container`
- `Row`
- `Col`
- `gridstrap/grid.css`
- `gridstrap/grid.scss`

## Scripts

- `yarn build` builds JS, types, and CSS assets into `dist/`
- `yarn lint` runs ESLint
- `yarn format` formats the project with Prettier
