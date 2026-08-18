import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import './LayoutStyle.css'
import logo_vatan_ict from '../../images/logo_vatan ict 1.png'
import logo_light from '../../images/logo_light 1.png'
import icon_menu from '../../images/fi_menu.png'
import { useDispatch, useSelector } from 'react-redux'
import { setApplyModel, setOrderService, setPdfModel } from '../../Redux/reducers/GlobalState'
import { useLocation } from 'react-router-dom'
import i18n from 'i18next'

import { useTranslation } from 'react-i18next'
import { pdfjs } from 'react-pdf'
import Footer from '../../components/footer/Footer'
import { setLanguage } from '../../Redux/reducers/LocallhostStateIct'
import Order_service, { Apply_model, HeaderDrawerModal, PdfModal } from '../../components/modals/Modals'

// Иконкаҳо барои Light / Dark mode
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { useTheme } from '../../context/ThemeContext'

function Layout() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);

    const location = useLocation()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    // Context-и Theme
    const { theme, toggleTheme } = useTheme()

    const order_service = useSelector(({ GlobalState }) => GlobalState.order_service)
    const apply_model = useSelector(({ GlobalState }) => GlobalState.apply_model)
    const pdfModel = useSelector(({ GlobalState }) => GlobalState.pdfModel)
    const language = useSelector(({ LocallhostStateIct }) => LocallhostStateIct.language)

    const [drawerMobile, setDrawerMobile] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        dispatch(setLanguage(lang));
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        if (language !== t('language')) {
            changeLanguage(language)
        }
    }, [])

    useEffect(() => {
        document.location.href = '#up'
    }, [pathname])

    useEffect(() => {
        if (order_service || apply_model || drawerMobile || pdfModel.open) {
            document.body.setAttribute('style', 'overflow:hidden;');
        } else {
            document.body.setAttribute('style', 'overflow:visible;');
        }
    }, [order_service, apply_model, drawerMobile, pdfModel.open])

    const languages = [
        { code: 'tj', label: 'TJ' },
        { code: 'ru', label: 'RU' },
        { code: 'en', label: 'EN' },
    ]

    return (
        <div id='up' className='flex flex-col justify-between min-h-screen bg-white dark:bg-[#0A0F0D] text-gray-900 dark:text-white transition-colors duration-300'>
            <Order_service open={order_service} close={() => dispatch(setOrderService(false))} />
            <Apply_model open={apply_model} close={() => dispatch(setApplyModel(false))} />
            <PdfModal open={pdfModel.open} pdfModel={pdfModel} close={() => dispatch(setPdfModel({ open: false, image: null }))} onDocumentLoadSuccess={onDocumentLoadSuccess} />
            <HeaderDrawerModal open={drawerMobile} close={() => setDrawerMobile(false)} changeLanguage={changeLanguage} navigate={navigate} />

            <div>
                {/* Desktop Header */}
                <header className="w-full h-[72px] mdMUI:flex hidden items-center fixed top-0 left-0 z-20 bg-white/80 dark:bg-[#0A0F0D]/80 backdrop-blur-md transition-all duration-300 border-b border-gray-100 dark:border-white/10 shadow-sm">
                    <div className="2xl:px-[80px] xl:px-[5%] lg:px-[4%] px-[16px] items-center w-full justify-between max-w-[1920px] mx-auto flex gap-4">

                        {/* Logo - вобаста ба тема иваз мешавад */}
                        <Link to='/' className='max-w-[160px] xl:max-w-[180px] shrink-0 flex items-center'>
                            <img
                                src={logo_vatan_ict}
                                className='w-full h-8 sm:h-9 object-contain transition-all duration-300'
                                alt="Vatan ICT Logo"
                            />
                        </Link>

                        {/* Navigation Menu */}
                        <div className='font-semibold headerText items-center flex-1 max-w-[720px]'>
                            <div className='flex items-center justify-between text-[13px] xl:text-sm text-[#494949] dark:text-gray-300'>
                                <div className='navlink_main_hover'>
                                    <NavLink to='/aboutcompany' className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-all duration-200 flex items-center relative whitespace-nowrap ${isActive ? 'bg-[#F0FDF4] dark:bg-[#22994A]/20 text-[#22994A] font-bold' : 'hover:text-[#22994A]'}`}>
                                        {t("layout.layoutHeader.text1")}
                                    </NavLink>
                                </div>
                                <div className='navlink_main_hover'>
                                    <NavLink to='/projects' className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-all duration-200 flex items-center relative whitespace-nowrap ${isActive ? 'bg-[#F0FDF4] dark:bg-[#22994A]/20 text-[#22994A] font-bold' : 'hover:text-[#22994A]'}`}>
                                        {t("layout.layoutHeader.text2")}
                                    </NavLink>
                                </div>
                                <div className='navlink_main_hover'>
                                    <NavLink to='/services' className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-all duration-200 flex items-center relative whitespace-nowrap ${isActive ? 'bg-[#F0FDF4] dark:bg-[#22994A]/20 text-[#22994A] font-bold' : 'hover:text-[#22994A]'}`}>
                                        {t("layout.layoutHeader.text3")}
                                    </NavLink>
                                </div>
                                <div className='navlink_main_hover'>
                                    <NavLink to='/solutions' className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-all duration-200 flex items-center relative whitespace-nowrap ${isActive ? 'bg-[#F0FDF4] dark:bg-[#22994A]/20 text-[#22994A] font-bold' : 'hover:text-[#22994A]'}`}>
                                        {t("layout.layoutHeader.text4")}
                                    </NavLink>
                                </div>
                                <div className='navlink_main_hover'>
                                    <NavLink to='/career' className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-all duration-200 flex items-center relative whitespace-nowrap ${isActive ? 'bg-[#F0FDF4] dark:bg-[#22994A]/20 text-[#22994A] font-bold' : 'hover:text-[#22994A]'}`}>
                                        {t("layout.layoutHeader.text5")}
                                    </NavLink>
                                </div>
                                <div className='navlink_main_hover'>
                                    <NavLink to='/news' className={({ isActive }) => `px-2.5 py-1.5 rounded-lg transition-all duration-200 flex items-center relative whitespace-nowrap ${isActive ? 'bg-[#F0FDF4] dark:bg-[#22994A]/20 text-[#22994A] font-bold' : 'hover:text-[#22994A]'}`}>
                                        {t("layout.layoutHeader.text6")}
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        {/* Right Section */}
                        {/* Right Section: Theme + Language + Contact Button */}
                        <div className='flex items-center gap-3 xl:gap-4 shrink-0'>

                            {/* Theme Switcher Button */}
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1E2320] text-gray-700 dark:text-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-gray-200 dark:border-[#22994A]/20 shadow-xs"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <WbSunnyIcon fontSize="small" />
                                ) : (
                                    <NightlightIcon fontSize="small" className="text-gray-800" />
                                )}
                            </button>

                            {/* Languages Switcher */}
                            <div className='flex items-center bg-gray-100 dark:bg-[#1E2320] p-1 rounded-full border border-gray-200 dark:border-[#22994A]/30 shadow-xs'>
                                {languages.map((item) => (
                                    <button
                                        key={item.code}
                                        onClick={() => changeLanguage(item.code)}
                                        className={`px-3.5 py-1.5 text-[12px] font-bold rounded-full transition-all duration-300 cursor-pointer ${language === item.code
                                                ? 'bg-[#22994A] text-white shadow-sm'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-[#22994A] dark:hover:text-white'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            {/* Contacts Button */}
                            <button
                                onClick={() => navigate('/contact')}
                                className={`px-5 h-[40px] text-xs xl:text-sm border-2 border-[#22994A] rounded-full font-bold transition-all duration-300 hover:bg-[#22994A] hover:text-white cursor-pointer active:scale-95 ${location.pathname === '/contact'
                                        ? 'bg-[#22994A] text-white'
                                        : 'text-[#22994A] bg-transparent'
                                    }`}
                            >
                                {t("layout.layoutHeader.text7")}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Mobile Header */}
                <header className='mdMUI:hidden fixed top-0 left-0 z-20 w-full h-[65px] px-[16px] flex items-center bg-emerald-800/90 dark:bg-[#0A0F0D]/90 backdrop-blur-md transition-all duration-300 border-b border-white/10'>
                    <div className='flex w-full justify-between items-center'>
                        <button onClick={() => setDrawerMobile(true)}>
                            <img src={icon_menu} width='30px' height='30px' alt="Menu" />
                        </button>
                        <div>
                            <img src={logo_light} onClick={() => navigate('/')} width='145px' className='cursor-pointer' alt="Vatan ICT" />
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-yellow-400"
                        >
                            {theme === 'dark' ? <WbSunnyIcon fontSize="small" /> : <NightlightIcon fontSize="small" />}
                        </button>
                    </div>
                </header>

                {/* Outlet for Pages */}
                <div className='mdMUI:pt-[72px] pt-[65px]'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout