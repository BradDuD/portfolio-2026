import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

type ExperienceKey = 'rosario' | 'omia' | '2de2';

const EXPERIENCE_KEYS: ExperienceKey[] = ['rosario', 'omia', '2de2'];

// Most recent first in the array, so default active = index 0
const DEFAULT_ACTIVE: ExperienceKey = 'rosario';

export const Experience = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<ExperienceKey>(DEFAULT_ACTIVE);

  const exp = t(`experience.roles.${active}`, { returnObjects: true }) as {
    company: string;
    role: string;
    period: string;
    description: string;
    responsibilities: string[];
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section__title">{t('experience.title')}</h2>
        <p className="section__subtitle">// work_history.json</p>

        <div className="exp__layout">
          {/* Left sidebar – company list */}
          <ul className="exp__sidebar">
            {EXPERIENCE_KEYS.map((key) => {
              const item = t(`experience.roles.${key}`, { returnObjects: true }) as {
                company: string;
                period: string;
              };
              return (
                <li key={key}>
                  <button
                    className={`exp__tab ${active === key ? 'exp__tab--active' : ''}`}
                    onClick={() => setActive(key)}
                  >
                    <span className="exp__tab-company">{item.company}</span>
                    <span className="exp__tab-period">{item.period}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right panel – details */}
          <div className="exp__panel" key={active}>
            <div className="exp__header">
              <div>
                <h3 className="exp__role">
                  {exp.role}{' '}
                  <span className="exp__company-name">@ {exp.company}</span>
                </h3>
                <p className="exp__period">
                  <span className="exp__period-dot" />
                  {exp.period}
                </p>
              </div>
            </div>

            <p className="exp__description">{exp.description}</p>

            <ul className="exp__responsibilities">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="exp__responsibility">
                  <span className="exp__bullet">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
