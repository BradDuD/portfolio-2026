import { useTranslation } from 'react-i18next';
import './About.css';

const TECHNOLOGIES = [
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '🔀' },
  { name: 'REST APIs', icon: '🔌' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Vite', icon: '⚡' },
  { name: 'CSS / SCSS', icon: '🎨' },
  { name: 'Redis', icon: '🔴' },
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
                  <span className="about__tech-icon">{tech.icon}</span>
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
