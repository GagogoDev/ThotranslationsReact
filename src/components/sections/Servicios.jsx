// React
import React, { useState } from 'react';

// Translations
import { useTranslation } from 'react-i18next';

// Servicios
import { services } from '../../assets/services/services';

export const Servicios = () => {
    const [t] = useTranslation('global');

    const [activeTab, setActiveTab] = useState(1);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
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
                        <div className="col-5">
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
                                    ({ precio, title, detail }) => {
                                        return (
                                            <div className="col-3 div-precio">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h5>{title}</h5>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4>{precio}</h4>
                                                    </div>
                                                    <div className="col-12">
                                                        <p>{detail}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
