import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  alt?: boolean;
};

export function Section({ id, label, title, children, alt }: SectionProps) {
  const layerName = id.replace(/-/g, '_').toUpperCase();

  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`}>
      <div className="section__inner">
        <header className="section__header">
          <span className="section__label">
            LAYER {label} · {layerName}
          </span>
          <h2 className="section__title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
