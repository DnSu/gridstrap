import '../src/styles/grid.scss';
import './dev.css';
import { Col, Container, Row } from '../src/index';
import type { AlignContent, GridSize, JustifyContent } from '../src/index';

const PALETTE = [
  '#4a90d9',
  '#7b68ee',
  '#50c878',
  '#ff7043',
  '#ffa726',
  '#26c6da',
  '#ec407a',
  '#66bb6a',
];

const JUSTIFY_VALUES: JustifyContent[] = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
];

const ALIGN_VALUES: AlignContent[] = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'stretch',
];

function cell(color: string, minHeight = '2rem'): React.CSSProperties {
  return {
    background: color,
    color: '#fff',
    padding: '0.35rem 0.25rem',
    textAlign: 'center',
    fontSize: '0.65rem',
    borderRadius: '3px',
    minHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2px',
    lineHeight: 1.2,
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Demo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="demo">
      <p className="demo-label">{label}</p>
      {children}
    </div>
  );
}

function cells(n: number, height?: string) {
  return Array.from({ length: n }, (_, i) => ({ color: PALETTE[i % PALETTE.length], height }));
}

export default function App() {
  return (
    <div className="page">
      <div className="screen-size-indicator" />
      <h1>gridstrap</h1>

      {/* ── Container ── */}
      <Section title="Container">
        <Demo label="fixed (max-width constrains at each breakpoint)">
          <Container style={{ background: '#f5f5f5' }}>
            <Row>
              <Col xs={8}>
                <div style={cell(PALETTE[0])}>xs=8</div>
              </Col>
              <Col xs={4}>
                <div style={cell(PALETTE[1])}>xs=4</div>
              </Col>
            </Row>
          </Container>
        </Demo>
        <Demo label="fluid (always full width)">
          <Container fluid style={{ background: '#f5f5f5' }}>
            <Row>
              <Col xs={8}>
                <div style={cell(PALETTE[0])}>xs=8</div>
              </Col>
              <Col xs={4}>
                <div style={cell(PALETTE[1])}>xs=4</div>
              </Col>
            </Row>
          </Container>
        </Demo>
      </Section>

      {/* ── Auto columns ── */}
      <Section title="Auto columns (equal width, no size props)">
        {[2, 3, 4, 5, 6].map((n) => (
          <Demo key={n} label={`${n} equal cols`}>
            <Container fluid>
              <Row>
                {cells(n).map(({ color }, i) => (
                  <Col key={i}>
                    <div style={cell(color)}>col</div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Demo>
        ))}
      </Section>

      {/* ── Fixed sizes ── */}
      <Section title="Fixed-size columns (xs=1 – 12)">
        <Container fluid>
          {Array.from({ length: 12 }, (_, i) => (
            <Row key={i}>
              <Col xs={(i + 1) as GridSize}>
                <div style={cell(PALETTE[i % PALETTE.length])}>xs={i + 1}</div>
              </Col>
            </Row>
          ))}
        </Container>
      </Section>

      {/* ── Responsive breakpoints ── */}
      <Section title="Responsive breakpoints (resize window to see changes)">
        <Demo label="xs=12 sm=6 md=4 lg=3">
          <Container fluid>
            <Row>
              {cells(4).map(({ color }, i) => (
                <Col key={i} xs={12} sm={6} md={4} lg={3}>
                  <div style={cell(color)}>xs=12 sm=6 md=4 lg=3</div>
                </Col>
              ))}
            </Row>
          </Container>
        </Demo>
        <Demo label="xs=12 sm=6 md=4 lg=3 xl=2 xxl=1">
          <Container fluid>
            <Row>
              {cells(6).map(({ color }, i) => (
                <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                  <div style={cell(color)}>all bps</div>
                </Col>
              ))}
            </Row>
          </Container>
        </Demo>
        <Demo label="xs=12 md=6 xl=4">
          <Container fluid>
            <Row>
              {cells(3).map(({ color }, i) => (
                <Col key={i} xs={12} md={6} xl={4}>
                  <div style={cell(color)}>xs=12 md=6 xl=4</div>
                </Col>
              ))}
            </Row>
          </Container>
        </Demo>
        <Demo label="auto-width (true) at xs, fixed md=4">
          <Container fluid>
            <Row>
              {cells(3).map(({ color }, i) => (
                <Col key={i} xs={true} md={4}>
                  <div style={cell(color)}>auto → md=4</div>
                </Col>
              ))}
            </Row>
          </Container>
        </Demo>
        <Demo label="mixed: xs=12 md=8 / xs=12 md=4">
          <Container fluid>
            <Row>
              <Col xs={12} md={8}>
                <div style={cell(PALETTE[0])}>xs=12 md=8</div>
              </Col>
              <Col xs={12} md={4}>
                <div style={cell(PALETTE[1])}>xs=12 md=4</div>
              </Col>
            </Row>
          </Container>
        </Demo>
      </Section>

      {/* ── justifyContent ── */}
      <Section title="Row justifyContent">
        <Container fluid>
          {JUSTIFY_VALUES.map((jc) => (
            <Demo key={jc} label={`justifyContent="${jc}"`}>
              <Row justifyContent={jc} style={{ background: '#f5f5f5' }}>
                {[0, 1, 2].map((i) => (
                  <Col key={i} xs={2}>
                    <div style={cell(PALETTE[i])}>xs=2</div>
                  </Col>
                ))}
              </Row>
            </Demo>
          ))}
        </Container>
      </Section>

      {/* ── alignContent ── */}
      <Section title="Row alignContent (fixed-height rows, content wraps to 2 lines)">
        <Container fluid>
          {ALIGN_VALUES.map((ac) => (
            <Demo key={ac} label={`alignContent="${ac}"`}>
              <Row alignContent={ac} style={{ height: '90px', background: '#f5f5f5' }}>
                {cells(6).map(({ color }, i) => (
                  <Col key={i} xs={4}>
                    <div style={{ ...cell(color), minHeight: 'auto', padding: '0.4rem' }}>
                      xs=4
                    </div>
                  </Col>
                ))}
              </Row>
            </Demo>
          ))}
        </Container>
      </Section>

      {/* ── Ordering ── */}
      <Section title="Column ordering">
        <Demo label="order: DOM order A B C, visual order B C A (order 3 / 1 / 2)">
          <Container fluid>
            <Row>
              <Col xs={4} order={3}>
                <div style={cell(PALETTE[0])}>DOM 1 → order 3</div>
              </Col>
              <Col xs={4} order={1}>
                <div style={cell(PALETTE[1])}>DOM 2 → order 1</div>
              </Col>
              <Col xs={4} order={2}>
                <div style={cell(PALETTE[2])}>DOM 3 → order 2</div>
              </Col>
            </Row>
          </Container>
        </Demo>
        <Demo label="orderMd: columns swap only at ≥768px (resize to see)">
          <Container fluid>
            <Row>
              <Col xs={6} orderMd={2}>
                <div style={cell(PALETTE[0])}>left@xs → right@md</div>
              </Col>
              <Col xs={6} orderMd={1}>
                <div style={cell(PALETTE[1])}>right@xs → left@md</div>
              </Col>
            </Row>
          </Container>
        </Demo>
        <Demo label="orderLg: 4 cols reverse at lg">
          <Container fluid>
            <Row>
              {([4, 3, 2, 1] as GridSize[]).map((ord, i) => (
                <Col key={i} xs={3} orderLg={ord}>
                  <div style={cell(PALETTE[i])}>DOM {i + 1} → lg:{ord}</div>
                </Col>
              ))}
            </Row>
          </Container>
        </Demo>
      </Section>

      {/* ── Mixed layout ── */}
      <Section title="Mixed layout">
        <Demo label="header / sidebar+main / 4-up card grid">
          <Container>
            <Row>
              <Col xs={12}>
                <div style={cell(PALETTE[0], '3rem')}>xs=12 header</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3}>
                <div style={cell(PALETTE[1], '5rem')}>xs=12 md=3 sidebar</div>
              </Col>
              <Col xs={12} md={9}>
                <div style={cell(PALETTE[2], '5rem')}>xs=12 md=9 main</div>
              </Col>
            </Row>
            <Row>
              {cells(4).map(({ color }, i) => (
                <Col key={i} xs={6} lg={3}>
                  <div style={cell(color)}>xs=6 lg=3</div>
                </Col>
              ))}
            </Row>
            <Row>
              {cells(3).map(({ color }, i) => (
                <Col key={i}>
                  <div style={cell(color)}>auto</div>
                </Col>
              ))}
            </Row>
          </Container>
        </Demo>
      </Section>
    </div>
  );
}
