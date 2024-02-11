import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

export function Investor(props) {

    const active = ({ isActive }) => isActive ? "link-menu active" : "link-menu";

    let getLanguageStore = localStorage.getItem("language")

    const { t } = useTranslation();
    const { i18n } = useTranslation();

    function changeLanguage(type) {
        localStorage.setItem("language", type);
        i18n.changeLanguage(type);
    }

    const Membership = true;

    if (!Membership) {
        window.location.href = '/membership';
    }

    return (
        <>

                <div className='container-fluid background'>
                    <div className="row">
                        <div className="col-md-2 px-0 position-relative">
                            <div className="vh-100 w-100 border-end border-secondary position-sticky top-0">
                                <div className="h-100 d-flex flex-column">
                                    <div className="logo p-4">
                                        <img src="/src/assets/img/logo.png" className="w-50 d-block" alt="" />
                                    </div>
                                    
                                    <ul className='mb-4 p-3 position-sticky top-5'>
                
                                        <li><NavLink to='/dashboard' 
                                                className={active}><img src="/src/assets/img/iconos/dashboard.png" className='icon-image' alt="" /> <span>{t('pages.dashboard')}</span></NavLink></li>
                                        <li><NavLink to='/investments' 
                                                className={active}><img src="/src/assets/img/iconos/inversiones.png" className='icon-image' alt="" /> <span>{t('Inversiones activas')}</span></NavLink></li>
                                        <li><NavLink to='/user' 
                                                className={active}><img src="/src/assets/img/iconos/usuarios.png" className='icon-image' alt="" /> <span>{t('Usuarios')}</span></NavLink></li>
                                        <li><NavLink to='/contracts' 
                                                className={active}><img src="/src/assets/img/iconos/contratos.png" className='icon-image' alt="" /> <span>{t('Contratos')}</span></NavLink></li>
                                        <li><NavLink to='/history' 
                                                className={active}><img src="/src/assets/img/iconos/historial.png" className='icon-image' alt="" /> <span>{t('Historial')}</span></NavLink></li>
                                        <li><NavLink to='/plans' 
                                                className={active}><img src="/src/assets/img/iconos/dashboard.png" className='icon-image' alt="" /> <span>{t('pages.dashboard')}</span></NavLink></li>
                                        <li><NavLink to='/referrals' 
                                                className={active}><img src="/src/assets/img/iconos/referidos.png" className='icon-image' alt="" /> <span>{t('Referidos')}</span></NavLink></li>
                                        <li><NavLink to='/announcements' 
                                                className={active}><img src="/src/assets/img/iconos/anuncios.png" className='icon-image' alt="" /> <span>{t('pages.announcements')}</span></NavLink></li>
                                        <li><NavLink to='/events' 
                                                className={active}><img src="/src/assets/img/iconos/eventos.png" className='icon-image' alt="" /> <span>{t('Próximos eventos')}</span></NavLink></li>

                                    </ul>

                                    <div className="mt-auto p-4">
                                        <div className='d-flex'>
                                            <div className='mx-1'>    
                                                <box-icon name='envelope' color='white'></box-icon>                                
                                            </div>
                                            <div className='mx-1'>    
                                                <box-icon type='logo' color='white' name='facebook'></box-icon> 
                                            </div>
                                            <div className='mx-1'>    
                                                <box-icon type='logo' color='white' name='instagram'></box-icon> 
                                            </div>
                                            <div className='mx-1'>    
                                                <box-icon type='logo' color='white' name='telegram'></box-icon>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-secondary">
                                            <p className="m-0">AUGURY CAPITAL &copy; 2023-2024</p>
                                            <p className="m-0">Todos los derechos reservados</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 px-0">
                            <div className="container-fluid px-0">
                                <div className="p-4 border-bottom border-secondary position-sticky top-0 background">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-auto me-3">
                                            <img src="/src/assets/img/iconos/wallet.png" style={{width: '25px'}} />
                                        </div>
                                        <div className="mx-3">
                                            <img src="/src/assets/img/iconos/idioma.png" style={{width: '25px'}} />
                                        </div>
                                        <div className="mx-3 d-flex">
                                            <div className="border border-secondary px-4 py-2 rounded-start">
                                                <span className="text-secondary">0x75d...79b4</span>
                                            </div>
                                            <button className="bg-transparent border-start-0 border-top border-bottom border-end border-secondary px-4 py-2 rounded-end">
                                                <p className="text-white m-0 d-flex align-items-center"><box-icon name='link' color='white'></box-icon> <span className='ms-2'>Copiar link de referido</span></p>
                                            </button>
                                        </div>
                                        <div className="ms-3">
                                            <img src="/src/assets/img/iconos/user.png" style={{width: '32px'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}