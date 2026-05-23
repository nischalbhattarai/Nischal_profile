import { education } from '../data/profile';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" label="03" title="Education" alt>
      <div className="edu-grid">
        {education.map((item) => (
          <article key={item.degree} className="edu-card">
            <span className="edu-card__period">{item.period}</span>
            <h3>{item.degree}</h3>
            <p className="edu-card__school">{item.school}</p>
            <p className="edu-card__location">{item.location}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
