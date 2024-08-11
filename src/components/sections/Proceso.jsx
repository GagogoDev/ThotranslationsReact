// React
import React from 'react';

// Styles
import '../../assets/css/proceso.css';

// Translations
import { useTranslation } from 'react-i18next';

export const Proceso = () => {
    const [t] = useTranslation('global');

    return (
        <>
            <h1 className="text-center mb-5 proceso-title">
                {t('proceso.titulo')}
            </h1>
            <div className="row d-flex justify-content-center align-items-center text-center mb-5">
                <div className="col-12">
                    <div className="row p-3">
                        <div className="main">
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    {t('proceso.title_1')}
                                </strong>
                                <br />
                                {t('proceso.descripcion_1')}
                            </p>
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    {t('proceso.title_2')}
                                </strong>
                                <br />
                                {t('proceso.descripcion_2')}
                            </p>
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    {t('proceso.title_3')}
                                </strong>
                                <br />
                                {t('proceso.descripcion_3')}
                            </p>
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    {t('proceso.title_4')}
                                </strong>
                                <br />
                                {t('proceso.descripcion_4')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
