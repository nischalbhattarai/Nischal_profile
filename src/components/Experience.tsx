import { experience } from '../data/profile';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" label="02" title="Professional experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="timeline__item">
            <div className="timeline__marker" />
            <article className="timeline__card">
              <div className="timeline__card-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <div className="timeline__meta">
                  {job.current && <span className="badge">Current</span>}
                  <time>{job.period}</time>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
