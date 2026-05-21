import { useTranslation } from 'react-i18next';
import './About.css';

const TECHNOLOGIES = [
  { name: 'JavaScript', svg: 'javascript.svg' },
  { name: 'TypeScript', svg: 'typescript.svg' },
  { name: 'React',      svg: 'react.svg' },
  { name: 'Python',     svg: 'python.svg' },
  { name: 'Flask',      svg: 'flask.svg' },
  { name: 'Django',     svg: 'django.svg' },
  { name: 'PHP',        svg: 'php.svg' },
  { name: 'Java',       svg: 'java.svg' },
  { name: 'PostgreSQL', svg: 'postgresql.svg' },
  { name: 'MySQL',      svg: 'mysql.svg' },
  { name: 'MongoDB',    svg: 'mongodb.svg' },
  { name: 'REST APIs',  svg: 'restapi.svg' },
  { name: 'Docker',     svg: 'docker.svg' },
  { name: 'Azure',      svg: 'azure.svg' },
  { name: 'Git',        svg: 'git.svg' },
  { name: 'Power BI',   svg: 'powerbi.svg' },
  // https://uxwing.com/ -> THANKSSS
];

const BioIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="about__card-svg" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <polyline points="16 3 18 5 22 1" />
  </svg>
);

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="about__card-svg" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
    <line x1="12" y1="2" x2="12" y2="22" strokeOpacity="0.4"/>
  </svg>
);

const StackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="about__card-svg" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section__title">{t('about.title')}</h2>
        <p className="section__subtitle">// who_am_i.ts</p>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__card">
            <div className="about__card-header">
              <BioIcon />
              <h3 className="about__card-title">Bio</h3>
            </div>
            <p className="about__text">{t('about.bio')}</p>
          </div>

          {/* What I do */}
          <div className="about__card">
            <div className="about__card-header">
              <CodeIcon />
              <h3 className="about__card-title">{t('about.doing')}</h3>
            </div>
            <p className="about__text">{t('about.doingText')}</p>
          </div>

          {/* Tech stack */}
          <div className="about__card about__card--full">
            <div className="about__card-header">
              <StackIcon />
              <h3 className="about__card-title">{t('about.techTitle')}</h3>
            </div>
            <div className="about__tech-grid">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.name} className="about__tech-tag">
                  <img
                    src={`/icons/${tech.svg}`}
                    alt={tech.name}
                    className="about__tech-icon"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};