import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
.use(HttpApi)
    .use(LanguageDetector)
   .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'cz', 'pl'],
        fallbackLng: "en",
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookies'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json', 
        },
});

const loadingMarkup = (
  <div className="loadingMarkup">
    <div className="loader">Loading...</div>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);