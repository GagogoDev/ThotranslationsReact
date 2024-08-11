// React
import React, { useState } from 'react';

// Images
import Discount from '/icons/Discount.png';

// Styles
import '../../assets/css/servicios.css';

// Translations
import { useTranslation } from 'react-i18next';

// Servicios
import { services } from '../../assets/services/services';

export const Servicios = () => {
    const [t] = useTranslation('global');

    const [activeTab, setActiveTab] = useState(1);

    const [classServicio, setClassServicio] = useState('servicio-traduccion');
    const [classTextServicio, setClassTextServicio] = useState(
        'text-servicio-traduccion'
    );

    const onClickTab = (tab) => {
        setActiveTab(tab);

        switch (tab) {
            case 1: // Traducción
                setClassServicio('servicio-traduccion');
                setClassTextServicio('text-servicio-traduccion');
                break;
            case 2: // Interpretación
                setClassServicio('servicio-interpretacion');
                setClassTextServicio('text-servicio-interpretacion');
                break;
            case 3: // Corrección y edición
                setClassServicio('servicio-correccion-edicion');
                setClassTextServicio('text-servicio-correccion-edicion');
                break;
            case 4: // Transcripción
                setClassServicio('servicio-transcripcion');
                setClassTextServicio('text-servicio-transcripcion');
                break;
            default:
                break;
        }
    };

    return (
        <>
            <h1 className="text-center mb-5 servicios-title">
                NUESTROS SERVICIOS
            </h1>
            <div className="row d-flex justify-content-center align-items-center text-center div-servicios">
                {services.map(({ id, image, title }) => {
                    return (
                        <div
                            key={id}
                            className={`col-6 col-lg-3 d-flex tab-servicios justify-content-center ${
                                activeTab == id ? 'active' : ''
                            }`}
                            onClick={(e) => onClickTab(id)}
                        >
                            <div className="row d-flex">
                                <div className="col-12 d-flex justify-content-center align-self-start mt-4">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="col-12 d-flex justify-content-center align-items-end mb-2 mb-xl-3">
                                    <h2 className="mt-2">
                                        {t(`servicios.${title}`)}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="col-12 mt-3">
                    <div className="row d-flex align-items-center justify-content-around">
                        <div className={`${classTextServicio}`}>
                            <p>
                                {services.map(({ id, description }) => {
                                    if (id == activeTab) {
                                        return t(`servicios.${description}`);
                                    }
                                })}
                            </p>
                        </div>
                        {services.map(({ id, precios }) => {
                            if (id == activeTab) {
                                return precios.map(
                                    ({ precio, title, detail }, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`d-flex justify-content-center ${classServicio} div-precio w-100 mt-2 mt-xl-0`}
                                            >
                                                <div className="row d-flex align-items-end justify-content-center">
                                                    <div className="col-12">
                                                        <h5>{title}</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4>{precio}</h4>
                                                    </div>
                                                    <div className="col-12">
                                                        <p>{detail}</p>
                                                    </div>
                                                    <div className="col-12 mt-1">
                                                        <button className="btn btn-secondary w-75">
                                                            COTIZAR
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                );
                            }
                        })}
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <div className="row div-descuento bg-secondary d-flex justify-content-center align-items-center">
                                <div className="col-12 col-sm-11">
                                    <p>¡DESCUENTO POR PRIMER CLIENTE!</p>
                                </div>
                                <div className="col-12 col-sm-1">
                                    <img src={Discount} alt="Discount" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
