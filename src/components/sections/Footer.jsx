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
                    <h5>Dirección</h5>
                    <p className="p-footer">Mi casita 1039</p>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <img src={Mail} alt="Mail" className="footer-icon footer-icon-mail" />
                    <h5>Llámanos</h5>
                    <p className="p-footer">Chile: +569 1111 1111</p>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <img src={Phone} alt="Phone" className="footer-icon mb-1" />
                    <h5>Escríbenos</h5>
                    <p className="p-footer">algo@algo.com</p>
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
                        Copyright © {currentYear} Thotranslations todos los derechos
                        reservados
                    </small>
                </div>
            </div>
        </>
    );
};
