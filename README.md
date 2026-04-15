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
