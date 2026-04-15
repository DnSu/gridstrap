# gridstrap

Reusable React grid primitives and matching stylesheet exports for other projects.

## Install

```sh
yarn add gridstrap react
```

## Usage

Import the packaged stylesheet once in your app:

```ts
import 'gridstrap/grid.css';
```

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
