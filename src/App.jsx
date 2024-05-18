// React
import { useEffect, useState } from 'react';

// Components
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

// Styles
import './assets/css/styles.css';

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
            { loading ? <Loader/> : '' }
            <Navbar />
            <div className="row m-0 mt-5">
                <div className="col-12 text-center">
                    <h1 className="text-primary">Thotranslation</h1>
                    <h2 className="text-secondary">En construcción</h2>
                </div>
            </div>
        </>
    );
}

export default App;
