import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {year} {profile.name} · DRAWING UNITS: MM
      </p>
      <p className="footer__note">LAYOUT: PORTFOLIO · SCALE 1:1</p>
    </footer>
  );
}
