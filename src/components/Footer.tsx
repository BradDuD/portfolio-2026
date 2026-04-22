import { useTranslation } from 'react-i18next';
import './Footer.css';

export const Footer = () => {
  const { i18n } = useTranslation();
  const year = new Date().getFullYear();

  const label = i18n.language === 'es'
    ? 'Diseñado y desarrollado con'
    : 'Designed and built with';

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text">
          {label}{' '}
          <span className="footer__heart" aria-label="love">♥</span>
          {' '}— {year}
        </p>
        <p className="footer__code">
          <span className="footer__bracket">&lt;/&gt;</span>
        </p>
      </div>
    </footer>
  );
};
