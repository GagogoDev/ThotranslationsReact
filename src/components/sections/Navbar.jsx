// React
import React, { useEffect, useState } from 'react';

// Images
import LogoSimple from '/icons/Logo-simple.png';

// Styles
import '../../assets/css/navbar.css';

// Translations
import { useTranslation } from 'react-i18next';

// React Scroll
import { Link } from 'react-scroll';

export const Navbar = () => {
    // Translations
    const [currentLanguage, setCurrentLanguage] = useState('es');
    const [t, i18n] = useTranslation('global');

    const onChangeLanguage = () => {
        switch (currentLanguage) {
            case 'es':
                i18n.changeLanguage('en');
                setCurrentLanguage('en');
                window.localStorage.setItem('language', 'en');
                break;
            case 'en':
                i18n.changeLanguage('es');
                setCurrentLanguage('es');
                window.localStorage.setItem('language', 'es');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const languageLocalStorage = window.localStorage.getItem('language');
        if (languageLocalStorage != currentLanguage) onChangeLanguage();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={LogoSimple}
                        alt="Imagen"
                        className="navbar-icon"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item px-1">
                            <a
                                className="nav-link fw-bold text-primary"
                                href="#"
                            >
                                {t('navbar.inicio')}
                            </a>
                        </li>

                        <Link
                            className="nav-item px-1"
                            to="section-nosotros"
                            offset={-60}
                        >
                            <a
                                className="nav-link fw-bold text-primary"
                                href="#"
                            >
                                {t('navbar.nosotros')}
                            </a>
                        </Link>

                        <Link
                            className="nav-item px-1"
                            to="section-servicios"
                            offset={-60}
                        >
                            <a
                                className="nav-link fw-bold text-primary"
                                href="#"
                            >
                                {t('navbar.servicios')}
                            </a>
                        </Link>

                        <Link
                            className="nav-item px-1"
                            to="section-proceso"
                            offset={-60}
                        >
                            <a
                                className="nav-link fw-bold text-primary"
                                href="#"
                            >
                                {t('navbar.proceso')}
                            </a>
                        </Link>

                        <Link
                            className="nav-item px-1"
                            to="section-contacto"
                            offset={-60}
                        >
                            <a
                                className="nav-link fw-bold text-primary"
                                href="#"
                            >
                                {t('navbar.contacto')}
                            </a>
                        </Link>
                    </ul>
                    <form className="d-flex">
                        <button
                            className="language-button btn fw-bold text-primary p-0 d-flex align-items-center"
                            type="button"
                            onClick={onChangeLanguage}
                        >
                            <img
                                src={t('navbar.lenguaje_imagen')}
                                alt="Imagen"
                                className="language-icon"
                            />{' '}
                            {t('navbar.lenguaje')}
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
