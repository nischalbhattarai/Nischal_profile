import { CadDraftAnimation } from './CadDraftAnimation';
import { education, profile } from '../data/profile';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__crosshair" aria-hidden="true" />
      <div className="hero__ucs" aria-hidden="true">
        <span className="hero__ucs-x">X</span>
        <span className="hero__ucs-y">Y</span>
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">
          FILE: NB_PORTFOLIO.DWG · {profile.location.toUpperCase()}
        </p>
        <h1 className="hero__title">
          {profile.name.split(' ')[0]}
          <br />
          <span className="hero__title-accent">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__subtitle">{profile.subtitle}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Get in touch</a>
          <a
            href={profile.resume}
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
          <a href="#experience" className="btn btn--ghost">View experience</a>
          <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            LinkedIn
          </a>
        </div>
        <dl className="hero__meta">
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>2+ years CAD & manufacturing</dd>
          </div>
          <div className="hero__meta-item hero__meta-item--edu">
            <dt>Education</dt>
            <dd>
              {education.map((item) => (
                <span key={item.degree}>
                  {item.degree}
                  <em>
                    {item.school}
                    {item.location ? `, ${item.location}` : ''}
                  </em>
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
      <aside className="hero__aside">
        <div className="hero__visual">
          <div className="viewport-label" aria-hidden="true">VIEWPORT · PROFILE</div>
          <figure className="profile-photo">
            <div className="profile-photo__frame">
              <img src={profile.photo} alt={profile.photoAlt} width={400} height={400} />
            </div>
            <figcaption className="profile-photo__caption">
              <span>LAYER: PROFILE</span>
              <span className="profile-photo__location">{profile.location}</span>
            </figcaption>
          </figure>
        </div>
        <CadDraftAnimation />
      </aside>
    </section>
  );
}
