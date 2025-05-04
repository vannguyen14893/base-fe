import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: "vi",
        supportedLngs: ['en', 'vi'],
        ns: ['common', 'auth'],
        defaultNS: 'common',
        lng: "vi",
        saveMissing: true,
        saveMissingTo: 'all',
        updateMissing: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: 'http://localhost:8089/test/translations/{{lng}}/{{ns}}.json',
            addPath: 'http://localhost:8089/test/translations/add/{{lng}}/{{ns}}',
            crossDomain: true,
            allowMultiLoading: false,
            requestOptions: {
                cache: 'default',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['cookie', 'localStorage'],
            lookupQuerystring: 'lang',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
        },
    });
export default i18n;