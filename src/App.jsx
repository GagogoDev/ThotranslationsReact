// React
import { useEffect, useState } from 'react';

// Components
import { Loader } from './components/';
import {
    Navbar,
    Nosotros,
    Servicios,
    Proceso,
    Contacto,
    Footer,
} from './components/sections/';

// Images
import LogoCompleto from '/LogoCompleto.png';

// Styles
import './assets/css/styles.css';

// Animations
import 'animate.css';

function App() {
    // Loading
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? <Loader /> : ''}
            <Navbar />
            <div className="row d-flex justify-content-center align-items-center portada m-0">
                <div className="col-12">
                    <img src={LogoCompleto} alt="LogoCompleto" className='logo-thotranslations animate__animated animate__fadeInUp' />
                </div>
            </div>
            <div className="row d-flex justify-content-center bg-primary text-light m-0" id="section-nosotros">
                <div className="col-11 col-md-10 align-items-center pt-5">
                    <Nosotros />
                </div>
            </div>
            <div className="row d-flex justify-content-center bg-light text-primary m-0" id="section-servicios">
                <div className="col-11 col-md-10 align-items-center pt-5">
                    <Servicios />
                </div>
            </div>
            <div className="row d-flex justify-content-center bg-primary text-light m-0" id="section-proceso">
                <div className="col-11 col-md-10 align-items-center pt-5">
                    <Proceso />
                </div>
            </div>
            <div className="row d-flex justify-content-center bg-light text-primary m-0" id="section-contacto">
                <div className="col-11 col-md-10 align-items-center pt-5">
                    <Contacto />
                </div>
            </div>
            <div className="row d-flex justify-content-center bg-primary text-light m-0">
                <div className="col-11 col-md-10 align-items-center pt-5">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
