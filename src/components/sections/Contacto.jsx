// React
import React, { useState } from 'react';

// Axios
import axios from 'axios';

// SweetAlert2
import Swal from 'sweetalert2';

// Images
import SendingEmails from '/images/Sending-Emails.svg';
import LogoSimple from '/icons/Logo-simple.png';

// Styles
import '../../assets/css/contacto.css';

// Translations
import { useTranslation } from 'react-i18next';

const initialForm = {
    nombre: '',
    correo: '',
    telefono: '',
    servicio: 1,
    mensaje: '',
};

const fireSwalSuccess = (title, text) => {
    Swal.fire({
        title,
        iconHtml: `<img class='swal-custom-icon' src="${LogoSimple}">`,
        customClass: {
            icon: 'no-border',
        },
        customClass: {
            confirmButton: 'swal-custum-button',
        },
        background: '#f0f2f1',
        text,
        icon: 'success',
    });
};

const fireSwalError = (
    title,
    text,
) => {
    Swal.fire({
        title,
        iconHtml: `<img class='swal-custom-icon' src="${LogoSimple}">`,
        customClass: {
            icon: 'no-border',
        },
        customClass: {
            confirmButton: 'swal-custum-button',
        },
        background: '#f0f2f1',
        text,
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
            const axiosConfig = {
                url: '/email/sendEmailThotranslations',
                baseURL: 'https://www.gabrielquirozdev.com/api',
                // baseURL: 'http://127.0.0.1:8000/api',
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                data: { nombre, correo, telefono, servicio, mensaje },
            };
            data = await axios.request(axiosConfig);
        } catch (error) {
            if (parseInt(error?.response?.status) == 429) {
                fireSwalError(t('contacto.mensaje_no_enviado'), t('contacto.mensaje_no_enviado_text_solicitudes'));
                return false;
            }
        } finally {
            onResetForm();
            setIsLoading(false);
        }

        if (parseInt(data?.status) !== 200) {
            fireSwalError(t('contacto.mensaje_no_enviado'), t('contacto.mensaje_no_enviado_text_default'));
            return false;
        }

        if (parseInt(data?.data?.status) !== 1) {
            fireSwalError(t('contacto.mensaje_no_enviado'), t('contacto.mensaje_no_enviado_text_default'));
            return false;
        }

        fireSwalSuccess(t('contacto.mensaje_enviado'), t('contacto.mensaje_enviado_text'));
    };

    const { nombre, correo, telefono, servicio, mensaje } = formState;

    const textButtonSubmit = isLoading ? (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
        </div>
    ) : (
        t('contacto.enviar')
    );
    return (
        <>
            <h1 className="text-center mb-3 contacto-title">
                {t('contacto.titulo')}
            </h1>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-12 col-md-6">
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="nombre">
                                        {t('contacto.nombre')}
                                    </label>
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
                                    <label htmlFor="correo">
                                        {t('contacto.correo')}
                                    </label>
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
                                    <label htmlFor="telefono">
                                        {t('contacto.telefono')}
                                    </label>
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
                                    <label htmlFor="servicio">
                                        {t('contacto.servicio')}
                                    </label>
                                    <br />
                                    <select
                                        id="servicio"
                                        onChange={onFormChange}
                                        name="servicio"
                                        value={servicio}
                                        required
                                    >
                                        <option value="1">
                                            {t('contacto.alternativa_1')}
                                        </option>
                                        <option value="2">
                                            {t('contacto.alternativa_2')}
                                        </option>
                                        <option value="3">
                                            {t('contacto.alternativa_3')}
                                        </option>
                                        <option value="4">
                                            {t('contacto.alternativa_4')}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="mensaje">
                                        {t('contacto.mensaje')}
                                    </label>
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
