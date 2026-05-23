import { profile } from '../data/profile';

export function CadChrome() {
  return (
    <div className="cad-chrome" aria-hidden="true">
      <div className="cad-status-bar">
        <span className="cad-status-bar__mode">MODEL</span>
        <span>GRID</span>
        <span>ORTHO</span>
        <span>OSNAP</span>
        <span className="cad-status-bar__file">NB_PORTFOLIO.dwg</span>
        <span className="cad-status-bar__coords">X:0.00 Y:0.00 Z:0.00</span>
      </div>
      <div className="cad-command-line">
        <span className="cad-command-line__prompt">Command:</span>
        <span className="cad-command-line__input">
          _open {profile.name.replace(/\s/g, '_').toUpperCase()} *
        </span>
      </div>
    </div>
  );
}
