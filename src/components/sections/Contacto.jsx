// React
import React from 'react';

// Images
import SendingEmails from '/images/Sending-Emails.svg';

// Translations
import { useTranslation } from 'react-i18next';

export const Contacto = () => {
    const [t] = useTranslation('global');

    const onSubmitForm = (e) => {
        e.preventDefault();
        // Swal.fire({
        //     title: 'Formulario de cotización enviada',
        //     text: '¿A dónde? A tu corazón <3',
        //     icon: 'success',
        // });
        console.log( "Pa juera" );
    };

    return (
        <>
            <h1 className="text-center mb-5 contacto-title">
                CONTACTA CON NOSOTROS
            </h1>
            <div className="row d-flex justify-content-center align-items-center text-center mb-5">
                <div className="col-12 col-lg-6">
                    <h3 className="mb-3 text-center">
                        Formulario de cotización
                    </h3>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="form-nombre">Nombre</label>
                                    <input
                                        className="form-control"
                                        id="form-nombre"
                                    />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="form-nombre">Correo</label>
                                    <input
                                        className="form-control"
                                        id="form-nombre"
                                    />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="form-nombre">
                                        Teléfono
                                    </label>
                                    <input
                                        className="form-control"
                                        id="form-nombre"
                                    />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="form-servicio">
                                        Servicio
                                    </label>
                                    <br />
                                    <select id="form-servicio">
                                        <option value="1">Traducción</option>
                                        <option value="2">
                                            Interpretación
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="form-mensaje">
                                        Mensaje
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="form-mensaje"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <button className="button-presupuesto">
                                    Pide tu presupuesto
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col">
                <img src={SendingEmails} alt="SendingEmails" />
                </div>
            </div>
        </>
    );
};
