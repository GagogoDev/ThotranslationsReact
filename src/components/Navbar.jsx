import React from 'react';
import SpanishIcon from '/icons/language/Spanish-icon.png';
import LogoSimple from '/icons/Logo-simple.png';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={ LogoSimple } alt="Imagen" className="navbar-icon" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                    <li className="nav-item px-1">
                        <a className="nav-link fw-bold text-primary" href="#">INICIO</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link fw-bold text-primary" href="#">NOSOTROS</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link fw-bold text-primary" href="#">SERVICIOS</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link fw-bold text-primary" href="#">PROCESO</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link fw-bold text-primary" href="#">CONTACTO</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn fw-bold text-primary p-0 d-flex align-items-center" type="button">
                        <img src={ SpanishIcon } alt="Imagen" className="language-icon" /> ESPAÑOL
                    </button>
                </form>
            </div>
        </div>
    </nav>
  )
}
