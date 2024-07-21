// React
import React, { useState } from 'react';

// Images
import Discount from '/icons/Discount.png';

// Translations
import { useTranslation } from 'react-i18next';

// Servicios
import { services } from '../../assets/services/services';

export const Servicios = () => {
    const [t] = useTranslation('global');

    const [activeTab, setActiveTab] = useState(1);

    const [colSmServicio, setColSmServicio] = useState(12);
    const [colSmPrecio, setColSmPrecio] = useState(5);

    const [colLgServicio, setColLgServicio] = useState(5);
    const [colLgPrecio, setColLgPrecio] = useState(3);

    const [classServicioCorreccionEdicion, setClassServicioCorreccionEdicion] = useState('');

    const onClickTab = (tab) => {
        setActiveTab(tab);

        switch (tab) {
            case 1: // Traducción
            case 2: // Interpretación
                setColSmServicio(12);
                setColSmPrecio(5);

                setColLgServicio(5);
                setColLgPrecio(3);
                break;
            case 3: // Corrección y edición
                setColSmServicio(12);
                setColSmPrecio(5);

                setColLgServicio(12);
                setColLgPrecio(2);

                setClassServicioCorreccionEdicion('servicio-correccion-edicion');
                break;
            case 4: // Transcripción
                setColSmServicio(12);
                setColSmPrecio(3);

                setColLgServicio(3);
                setColLgPrecio(2);

                // setClassServicioCorreccionEdicion('servicio-transcripcion');
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
                            className={`col-6 col-lg-3 d-flex tab-servicios ${
                                activeTab == id ? 'active' : ''
                            }`}
                            onClick={(e) => onClickTab(id)}
                        >
                            <div className="row d-flex">
                                <div className="col-12 d-flex justify-content-center align-self-start mt-3">
                                    <img src={image} alt="Typewriter" />
                                </div>
                                <div className="col-12 d-flex justify-content-center align-items-end mb-3">
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
                        <div
                            className={`col-11 col-sm-${colSmServicio} col-lg-${colLgServicio}`}
                        >
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
                                                className={`d-flex col-11 col-sm-${colSmPrecio} col-lg-${colLgPrecio} ${classServicioCorreccionEdicion} div-precio mt-2 mt-lg-0`}
                                            >
                                                <div className="row d-flex align-items-end">
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
