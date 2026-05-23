import { profile } from '../data/profile';
import { Section } from './Section';

export function Contact() {
  return (
    <Section id="contact" label="05" title="Let's connect" alt>
      <div className="contact-grid">
        <p className="lead">
          Open to mechanical design, CAD, and engineering roles in Melbourne.
          References available upon request.
        </p>
        <div className="contact-cards">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <span className="contact-card__label">Email</span>
            <span className="contact-card__value">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-card">
            <span className="contact-card__label">Phone</span>
            <span className="contact-card__value">{profile.phone}</span>
          </a>
          <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-card__label">LinkedIn</span>
            <span className="contact-card__value">Nischal Bhattarai</span>
          </a>
          <a
            href={profile.resume}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__label">Resume</span>
            <span className="contact-card__value">View PDF</span>
          </a>
          <div className="contact-card contact-card--static">
            <span className="contact-card__label">Location</span>
            <span className="contact-card__value">{profile.location}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
