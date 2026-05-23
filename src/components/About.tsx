import { leadership, profile, skills } from '../data/profile';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" label="01" title="Skills & background">
      <div className="about-grid">
        <div className="about-grid__main">
          <p className="lead">{profile.summary}</p>
          <h3 className="subsection-title">Core competencies</h3>
          <ul className="skill-tags">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <h3 className="subsection-title">Languages</h3>
          <ul className="lang-list">
            {profile.languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong>
                <span>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="about-grid__aside">
          <div className="info-card">
            <h3>Leadership</h3>
            {leadership.map((item) => (
              <div key={item.role}>
                <p className="info-card__role">{item.role}</p>
                <p className="info-card__org">{item.org}</p>
                <ul>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
