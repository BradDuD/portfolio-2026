import { useTranslation } from 'react-i18next';
import './Home.css';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home section">
      <div className="home__bg-glow" />
      <div className="container home__container">
        <div className="home__content">
          <p className="home__greeting">
            <span className="home__cursor">&gt;</span>{' '}
            {t('home.greeting')}{' '}
            <span className="home__wave">👋</span>
          </p>

          <h1 className="home__name">
            {t('home.name')}
          </h1>

          <h2 className="home__role">
            <span className="home__role-bracket">&lt;</span>
            {t('home.role')}
            <span className="home__role-bracket"> /&gt;</span>
          </h2>

          <p className="home__description">{t('home.description')}</p>

          <div className="home__actions">
            <a href="#about" className="home__btn home__btn--primary">
              {t('nav.about')}
              <span className="home__btn-arrow">→</span>
            </a>
            <a href="#projects" className="home__btn home__btn--ghost">
              {t('home.cta')}
            </a>
          </div>
        </div>

        <div className="home__deco" aria-hidden="true">
          <div className="home__terminal">
            <div className="home__terminal-bar">
              <span className="dot dot--green" />
              <span className="dot dot--yellow" />
              <span className="dot dot--red" />
              <span className="home__terminal-title">portfolio.ts</span>
            </div>
            <div className="home__terminal-body">
              <p><span className="t-kw">const</span> <span className="t-var">dev</span> = {'{'}</p>
              <p>&nbsp;&nbsp;<span className="t-prop">name</span>: <span className="t-str">"{t('home.name')}"</span>,</p>
              <p>&nbsp;&nbsp;<span className="t-prop">role</span>: <span className="t-str">"{t('home.role')}"</span>,</p>
              <p>&nbsp;&nbsp;<span className="t-prop">passion</span>: <span className="t-str">"Coding"</span>,</p>
              <p>&nbsp;&nbsp;<span className="t-prop">Hobbies</span>: <span className="t-str">["🎥", "🎸", "📖", "🕹️", "🍔"]​​</span>,</p>
              <p>&nbsp;&nbsp;<span className="t-prop">available</span>: <span className="t-bool">true</span>,</p>
              <p>{'}'}</p>
              <p className="t-comment">// Let's build something great.</p>
              <p className="home__blink">_</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};