const commands = ['LINE', 'CIRCLE', 'DIM', 'OFFSET', 'TRIM'];

export function CadDraftAnimation() {
  return (
    <div className="cad-draft" aria-hidden="true">
      <div className="cad-draft__label">MODEL SPACE · 2D DRAFT</div>
      <div className="cad-draft__viewport">
        <svg viewBox="0 0 200 200" className="cad-draft__svg">
          <rect
            x="30"
            y="50"
            width="140"
            height="100"
            className="cad-draft__path cad-draft__path--1"
          />
          <circle
            cx="100"
            cy="100"
            r="28"
            className="cad-draft__path cad-draft__path--2"
          />
          <line
            x1="100"
            y1="22"
            x2="100"
            y2="178"
            className="cad-draft__path cad-draft__path--3 cad-draft__path--dim"
          />
          <line
            x1="22"
            y1="100"
            x2="178"
            y2="100"
            className="cad-draft__path cad-draft__path--4 cad-draft__path--dim"
          />
          <line
            x1="30"
            y1="165"
            x2="170"
            y2="165"
            className="cad-draft__path cad-draft__path--5 cad-draft__path--dim"
          />
          <line
            x1="45"
            y1="155"
            x2="45"
            y2="175"
            className="cad-draft__path cad-draft__path--6 cad-draft__path--dim"
          />
          <line
            x1="155"
            y1="155"
            x2="155"
            y2="175"
            className="cad-draft__path cad-draft__path--7 cad-draft__path--dim"
          />
          <path
            d="M 55 130 L 75 70 L 95 130 Z"
            className="cad-draft__path cad-draft__path--8"
          />
          <g className="cad-draft__cursor">
            <line x1="128" y1="88" x2="128" y2="112" />
            <line x1="116" y1="100" x2="140" y2="100" />
            <rect x="126" y="98" width="4" height="4" className="cad-draft__cursor-box" />
          </g>
        </svg>
        <div className="cad-draft__snap" />
      </div>
      <div className="cad-draft__readout">
        <span className="cad-draft__coord cad-draft__coord--x">X: 128.4500</span>
        <span className="cad-draft__coord cad-draft__coord--y">Y: 100.0000</span>
      </div>
      <div className="cad-draft__commands">
        {commands.map((cmd, i) => (
          <span
            key={cmd}
            className="cad-draft__cmd"
            style={{ animationDelay: `${i * 1.4}s` }}
          >
            Command: <em>{cmd}</em>
          </span>
        ))}
      </div>
    </div>
  );
}
