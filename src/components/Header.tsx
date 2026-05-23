import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/profile';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <a
        href="#"
        className="header__brand"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <span className="header__autocad-a" aria-hidden="true">A</span>
        <span className="header__brand-text">
          <span className="header__name">AutoCAD</span>
          <span className="header__file">NB_PORTFOLIO.dwg</span>
        </span>
      </a>

      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        {navLinks.map((link) => (
          <button key={link.id} type="button" onClick={() => scrollTo(link.id)}>
            {link.label}
          </button>
        ))}
        <a
          href={profile.resume}
          className="header__resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="header__cta">
          LinkedIn
        </a>
      </nav>

      <button
        type="button"
        className="header__menu-btn"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
