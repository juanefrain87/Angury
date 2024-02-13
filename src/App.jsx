import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '/src/assets/css/style.css';
import 'boxicons';
import Contrato from './pages/investors/contratos/Contrato';
import Usuario from './pages/investors/usuarios/Usuarios';

import { Login } from './pages/auth/login/Login'
import { Register } from './pages/auth/register/Register'

import { Dashboard } from './pages/investors/dashboard/Dashboard';
import { User } from './pages/investors/user/User';
import { Plans } from './pages/investors/plans/Plans';
import { History } from './pages/investors/history/History'; 
import { Referrals } from './pages/investors/referrals/Referrals';
import { Announcement } from './pages/investors/announcements/Announcement';
import { UsersRanges } from './pages/investors/ranges/UsersRanges';
import { Membership } from './pages/investors/dashboard/Membership';
import { Events } from './pages/investors/events/Events';
import Referidos from './pages/investors/referrals/Referidos';
import Inversiones from './pages/investors/inversiones/Inversiones';
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import esTranslation from "./i18n/es.json";
import enTranslation from "./i18n/en.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './pages/investors/usuarios/Usuarios';

function App() {
    
    let getLanguageStore = localStorage.getItem("language")

    i18next.init({
        interpolation: { escapeValue: false },
        lng: getLanguageStore,
        fallbackLng: "es",
        resources: {
          es: {
            translation: esTranslation,
          },
          en: {
            translation: enTranslation,
          }
        },
    });

    return (

        <Login />
    )
}

export default App