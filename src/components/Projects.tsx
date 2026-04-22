import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CARDS_PER_VIEW = 2;

export const Projects = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const items = t('projects.items', { returnObjects: true }) as ProjectItem[];
  const totalSlides = Math.ceil(items.length / CARDS_PER_VIEW);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(totalSlides - 1, c + 1));

  const visibleItems = items.slice(current * CARDS_PER_VIEW, current * CARDS_PER_VIEW + CARDS_PER_VIEW);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title">{t('projects.title')}</h2>
        <p className="section__subtitle">// selected_works[]</p>

        {/* Carousel */}
        <div className="projects__carousel">
          <div className="projects__track" key={current}>
            {visibleItems.map((project) => (
              <article key={project.name} className="project__card">
                <div className="project__card-top">
                  <div className="project__folder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="project__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project__link-icon"
                        title={t('projects.github')}
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project__link-icon"
                        title={t('projects.demo')}
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project__name">{project.name}</h3>
                <p className="project__description">{project.description}</p>

                <div className="project__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="projects__controls">
            <button
              className="projects__arrow"
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
            >
              ←
            </button>

            <div className="projects__dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  className={`projects__dot ${i === current ? 'projects__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="projects__arrow"
              onClick={next}
              disabled={current === totalSlides - 1}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
