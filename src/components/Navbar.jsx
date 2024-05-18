// React
import React, { useState } from 'react';

// Images
import LogoSimple from '/icons/Logo-simple.png';

// Translations
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const [ language, setlanguage ] = useState( 'es' );
    const [ t, i18n ] = useTranslation( "global" );

    const onChangeLanguage = () => {
        switch (language) {
            case 'es':
                i18n.changeLanguage('en');
                setlanguage('en');
                break;
            case 'en':
                i18n.changeLanguage('es');
                setlanguage('es');
                break;
            default:
                break;
        }
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={ LogoSimple } alt="Imagen" className="navbar-icon" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item px-1">
                            <a className="nav-link fw-bold text-primary" href="#">{ t( "navbar.home" ) }</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-bold text-primary" href="#">{ t( "navbar.about_us" ) }</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-bold text-primary" href="#">{ t( "navbar.services" ) }</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-bold text-primary" href="#">{ t( "navbar.process" ) }</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-bold text-primary" href="#">{ t( "navbar.contact" ) }</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn fw-bold text-primary p-0 d-flex align-items-center" type="button" onClick={onChangeLanguage}>
                            <img src={ t( "navbar.test" ) } alt="Imagen" className="language-icon" /> { t( "navbar.language" ) }
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
