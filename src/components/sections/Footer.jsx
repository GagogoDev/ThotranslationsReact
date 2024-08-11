// React
import React from 'react';

// Images
import Home from '/icons/footer/Home.png';
import Mail from '/icons/footer/Mail.png';
import Phone from '/icons/footer/Phone.png';
import Instagram from '/icons/footer/Instagram.png';
import TikTok from '/icons/footer/Tik-Tok.png';

// Styles
import '../../assets/css/footer.css';

// Translations
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const [t] = useTranslation('global');

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="row d-flex justify-content-center align-items-center text-center">
                <div className="col-6 col-sm-3 text-center">
                    <img src={Home} alt="Home" className="footer-icon mb-1" />
                    <h5>{t('footer.direccion')}</h5>
                    <p className="p-footer">{t('footer.direccion_text')}</p>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <img src={Mail} alt="Mail" className="footer-icon footer-icon-mail" />
                    <h5>{t('footer.llamanos')}</h5>
                    <p className="p-footer">{t('footer.llamanos_text')}</p>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <img src={Phone} alt="Phone" className="footer-icon mb-1" />
                    <h5>{t('footer.escribenos')}</h5>
                    <p className="p-footer">{t('footer.escribenos_text')}</p>
                </div>
                <div className="col-12 text-center">
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        target="_blank"
                    >
                        <img
                            src={Instagram}
                            alt="Instagram"
                            className="footer-icon-social"
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        target="_blank"
                    >
                        <img
                            src={TikTok}
                            alt="TikTok"
                            className="footer-icon-social"
                        />
                    </a>
                </div>
                <div className="col-12 text-center mt-3 mb-3">
                    <small>
                        Copyright © {currentYear} {t('footer.copyright')}
                    </small>
                </div>
            </div>
        </>
    );
};
