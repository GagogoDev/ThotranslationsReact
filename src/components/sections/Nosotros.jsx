// React
import React from 'react';

// Images
import TeamMeeting from '/images/Team-Meeting.svg';
import TeamBrainstorming from '/images/Team-Brainstorming.svg';
import Handshake from '/images/Handshake.svg';

// Styles
import '../../assets/css/nosotros.css';

// Translations
import { useTranslation } from 'react-i18next';

export const Nosotros = () => {
    const [t] = useTranslation('global');

    return (
        <>
            {/* Quienes somos */}
            <div className="row d-flex align-items-center justify-content-center text-center">
                <div className="col-12 col-md-7 col-lg-8 justify-content-center">
                    <h1 className="mb-4">
                        {t('nosotros.quienes_somos_titulo')}
                    </h1>
                    <p className="p-nosotros">
                        {t('nosotros.quienes_somos_texto')}
                    </p>
                </div>
                <div className="col-7 col-md-5 col-lg-4">
                    <img src={TeamMeeting} alt="TeamMeeting" />
                </div>
            </div>

            {/* Nuestro enfoque */}
            <div className="row d-flex align-items-center justify-content-center text-center">
            <div className="order-1 order-md-0 col-7 col-md-5 col-lg-4">
            <img src={TeamBrainstorming} alt="TeamBrainstorming" />
                </div>
                <div className="col-12 col-md-7 col-lg-8 justify-content-center">
                    <h1 className="mb-4">
                        {t('nosotros.nuestro_enfoque_titulo')}
                    </h1>
                    <p className="p-nosotros">
                        {t('nosotros.nuestro_enfoque_texto')}
                    </p>
                </div>
            </div>

            {/* Valores y compromisos */}
            <div className="row d-flex align-items-center justify-content-center text-center">
                <div className="col-12 col-md-7 col-lg-8 justify-content-center">
                    <h1 className="mb-4">
                        {t('nosotros.valores_y_compromisos_titulo')}
                    </h1>
                    <p className="p-nosotros">
                        {t('nosotros.valores_y_compromisos_texto')}
                    </p>
                </div>
                <div className="col-7 col-md-5 col-lg-4">
                    <img src={Handshake} alt="Handshake" />
                </div>
            </div>
        </>
    );
};
