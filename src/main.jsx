// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Styles
import 'bootstrap/dist/js/bootstrap.min.js';

// Translations i18n
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import translation_es from './assets/translations/es/global.json';
import translation_en from './assets/translations/en/global.json';

i18next.init({
    interpolation: { scapeValue: false },
    lng: "es",
    resources: {
        es: { global: translation_es },
        en: { global: translation_en },
    },
});

// ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
