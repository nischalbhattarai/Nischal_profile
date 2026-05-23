import { projects } from '../data/profile';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projects" label="04" title="Projects & research">
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-card__org">{project.org}</p>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
