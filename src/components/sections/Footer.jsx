// React
import React from 'react';

// Translations
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const [t] = useTranslation('global');

    return (
        <>
            <div className="row d-flex justify-content-center align-items-center text-center mb-5">
                <div className="col-12 col-sm-3 text-center">
                    <i className="fa-2x fa-solid fa-location-dot"></i>
                    <h5>Dirección</h5>
                    <p className="p-footer">Mi casita 1039</p>
                    <p className="p-footer">En mi cuadra, Chile</p>
                </div>
                <div className="col-12 col-sm-3 text-center mt-3 mt-sm-0">
                    <i className="fa-2x fa-solid fa-mobile"></i>
                    <h5>Llámanos</h5>
                    <p className="p-footer">Chile: +569 1111 1111</p>
                </div>
                <div className="col-12 col-sm-3 text-center mt-3 mt-sm-0">
                    <i className="fa-2x fa-solid fa-envelope"></i>
                    <h5>Escríbenos</h5>
                    <p className="p-footer">algo@algo.com</p>
                </div>
                <div className="col-12 text-center mt-4">
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-facebook"></i> </a>
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-linkedin"></i> </a>
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-pinterest"></i> </a>
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-tiktok"></i> </a>
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-twitter"></i> </a>
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-youtube"></i> </a>
                    <a className="a-footer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"> <i className="fa-brands fa-instagram"></i> </a>
                </div>
                <div className="col-12 text-center mt-3">
                    <span>Copyright © 2023 Thotranslations todos los derechos reservados</span>
                </div>
            </div>
        </>
    );
};
