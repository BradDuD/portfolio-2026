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
              <span className="about__card-icon">🧑‍💻</span>
              <h3 className="about__card-title">Bio</h3>
            </div>
            <p className="about__text">{t('about.bio')}</p>
          </div>

          {/* What I do */}
          <div className="about__card">
            <div className="about__card-header">
              <span className="about__card-icon">🚀</span>
              <h3 className="about__card-title">{t('about.doing')}</h3>
            </div>
            <p className="about__text">{t('about.doingText')}</p>
          </div>

          {/* Tech stack */}
          <div className="about__card about__card--full">
            <div className="about__card-header">
              <span className="about__card-icon">🛠️</span>
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