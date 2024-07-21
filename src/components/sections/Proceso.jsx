// React
import React from 'react';

// Translations
import { useTranslation } from 'react-i18next';

export const Proceso = () => {
    const [t] = useTranslation('global');

    return (
        <>
            <h1 className="text-center mb-5 proceso-title">NUESTRO PROCESO</h1>
            <div className="row d-flex justify-content-center align-items-center text-center mb-5">
                <div className="col-12">
                    <div className="row p-3">
                        <div className="main">
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    Contáctate con nosotros
                                </strong>
                                <br />
                                Envía tu documento o ponte en contacto con
                                nosotros a través de nuestro correo electrónico
                                thotranslations@gmail.com.
                            </p>
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    Te enviamos tu presupuesto
                                </strong>
                                <br />
                                Responderemos a tu correo electrónico con el
                                presupuesto de tu servicio.
                            </p>
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    Revisión y confirmación
                                </strong>
                                <br />
                                Una vez aceptado el presupuesto, confirmamos el
                                servicio y las formas de pago.
                            </p>
                            <p className="p-timeline" data-aos="fade-up">
                                <strong className="strong-timeline">
                                    Servicio
                                </strong>
                                <br />
                                Te entregamos tu servicio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
