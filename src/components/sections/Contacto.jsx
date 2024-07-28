// React
import React, { useState } from 'react';

// SweetAlert2
import Swal from 'sweetalert2';

// Images
import SendingEmails from '/images/Sending-Emails.svg';
import LogoSimple from '/icons/Logo-simple.png';

// Translations
import { useTranslation } from 'react-i18next';

const initialForm = {
    nombre: '',
    correo: '',
    telefono: '',
    servicio: 1,
    mensaje: '',
};

const fireSwalSuccess = () => {
    Swal.fire({
        title: 'Mensaje enviado',
        iconHtml: `<img class='swal-custom-icon' src="${LogoSimple}">`,
        customClass: {
            icon: 'no-border',
        },
        customClass: {
            confirmButton: 'swal-custum-button',
        },
        background: '#f0f2f1',
        text: '¿A dónde? A tu corazón <3',
        icon: 'success',
    });
};

const fireSwalError = (
    mensaje = 'Ocurrió un problema inesperado, intente nuevamente más tarde'
) => {
    Swal.fire({
        title: 'Mensaje no enviado',
        iconHtml: `<img class='swal-custom-icon' src="${LogoSimple}">`,
        customClass: {
            icon: 'no-border',
        },
        customClass: {
            confirmButton: 'swal-custum-button',
        },
        background: '#f0f2f1',
        text: mensaje,
        icon: 'success',
    });
};

export const Contacto = () => {
    const [t] = useTranslation('global');
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState(initialForm);

    const onFormChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ ...formState, [name]: value });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const validateForm = () => {
        if (nombre.length < 5) return false;
        if (correo.length < 5) return false;
        if (telefono.length < 5) return false;
        if (mensaje.length < 5) return false;

        return true;
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (isLoading) return false;
        if (!validateForm()) return false;

        let data = {};
        setIsLoading(true);
        try {
            // const axiosConfig = {
            //     url: '/email/sendEmailThotranslations',
            //     baseURL: 'https://api-utilities.gabrielquirozdev.com/api',
            //     // baseURL: 'http://127.0.0.1:8000/api',
            //     method: 'post',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Headers': '*',
            //         'X-Requested-With': 'XMLHttpRequest',
            //     },
            //     data: { nombre, correo, telefono, servicio, mensaje },
            // };
            // data = await axios.request(axiosConfig);
        } catch (error) {
            // if (parseInt(error.response.status) == 429) {
            //     fireSwalError('Demasiadas solicitudes, espere un tiempo');
            //     return false;
            // }
        } finally {
            onResetForm();
            setIsLoading(false);
        }

        // if (parseInt(data.status) !== 200) {
        //     fireSwalError();
        //     return false;
        // }

        // if (parseInt(data.data.status) !== 1) {
        //     fireSwalError();
        //     return false;
        // }

        fireSwalSuccess();
    };

    const { nombre, correo, telefono, servicio, mensaje } = formState;

    const textButtonSubmit = isLoading ? (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
        </div>
    ) : (
        'ENVIAR'
    );
    return (
        <>
            <h1 className="text-center mb-3 contacto-title">
                CONTACTA CON NOSOTROS
            </h1>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-12 col-md-6">
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        className="form-control"
                                        id="nombre"
                                        onChange={onFormChange}
                                        name="nombre"
                                        value={nombre}
                                        required
                                        minLength={5}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="correo">Correo</label>
                                    <input
                                        className="form-control"
                                        id="correo"
                                        type="email"
                                        onChange={onFormChange}
                                        name="correo"
                                        value={correo}
                                        required
                                        minLength={5}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input
                                        className="form-control"
                                        id="telefono"
                                        onChange={onFormChange}
                                        name="telefono"
                                        value={telefono}
                                        required
                                        minLength={5}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="servicio">Servicio</label>
                                    <br />
                                    <select
                                        id="servicio"
                                        onChange={onFormChange}
                                        name="servicio"
                                        value={servicio}
                                        required
                                    >
                                        <option value="1">Traducción</option>
                                        <option value="2">
                                            Interpretación
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="mensaje"
                                        rows="3"
                                        name="mensaje"
                                        value={mensaje}
                                        onChange={onFormChange}
                                        required
                                        minLength={5}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <button className="button-enviar w-50">
                                    {textButtonSubmit}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <img src={SendingEmails} alt="SendingEmails" />
                </div>
            </div>
        </>
    );
};
