import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom' // Аз react-router-dom иваз шуд (на next/link)
import { Document, Page } from 'react-pdf'

import InputMask from 'react-input-mask'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircularProgress from '@mui/material/CircularProgress'

// Иконкаҳо ва логотипҳое, ки намерасиданд (масирҳоро мувофиқи файли худ танзим кунед):
// import icon_menu_close from '@/assets/icons/close.svg'
// import logo_light from '@/assets/images/logo-light.svg'

// Мок-тағйирёбандаҳо барои пешгирии хатогӣ агар файлҳо набошанд
const icon_menu_close = '/icons/close.svg'
const logo_light = '/images/logo-light.svg'

// Функсияҳои ёридиҳанда
const submitFormRequest = async (type, data) => {
    return new Promise((resolve) => setTimeout(resolve, 1500))
}

const sendEmailNotification = (data) => {}

const resetFormFields = (form) => {
    form.reset()
}

const showFormError = (t) => {
    console.error('Хатогӣ ҳангоми фиристодани форма')
}

const showFormSuccess = () => {
    console.log('Муваффақият афтод')
}

export default function Order_service({ open, close = () => {} }) {
    const { t } = useTranslation()
    const [submitting, setSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleClose = () => {
        setIsSuccess(false)
        close()
    }

    const sendMessage = async (event) => {
        event.preventDefault()
        const message = {
            name: event.target['name'].value,
            phonenumber: event.target['phonenumber'].value,
            email: event.target['email'].value,
            company: event.target['company'].value,
            message: event.target['message'].value,
        }

        setSubmitting(true)
        try {
            await submitFormRequest('order', message)
            sendEmailNotification(message)
            resetFormFields(event.target)
            setIsSuccess(true)
            showFormSuccess()
        } catch (err) {
            showFormError(t)
        } finally {
            setSubmitting(false)
        }
    }

    if (!open) return null

    return (
        <div 
            onClick={handleClose} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-md p-4 transition-all duration-300"
        >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="animated-dotted-border relative p-[3px] rounded-[28px] w-full max-w-[540px] shadow-2xl overflow-hidden bg-white dark:bg-[#18181b]"
            >
                <div className="w-full rounded-[25px] bg-white dark:bg-[#18181b] p-6 sm:p-8 min-h-[400px] flex flex-col justify-center transition-colors">
                    
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                            <div className="relative flex items-center justify-center mb-6">
                                <div className="absolute w-20 h-20 bg-[#22994A]/20 rounded-full animate-ping" />
                                <div className="relative w-16 h-16 bg-[#22994A] rounded-full flex items-center justify-center shadow-lg shadow-[#22994A]/30">
                                    <CheckCircleIcon style={{ fontSize: 40, color: '#ffffff' }} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl mb-2">
                                {t('contact.successTitle')}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-[320px] mb-8 text-sm sm:text-base">
                                {t('contact.successSubtitle')}
                            </p>

                            <button 
                                onClick={handleClose}
                                className="w-full max-w-[200px] rounded-2xl bg-[#22994A] py-3.5 text-base font-semibold text-white shadow-lg shadow-[#22994A]/30 transition-all duration-200 hover:bg-[#1b7a3a] active:scale-[0.98]"
                            >
                                {t('contact.close')}
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-xs font-bold tracking-wider text-[#22994A] uppercase">
                                        Get in touch
                                    </span>
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl mt-1">
                                        {t('mainPage.mainPageSection1.button')}
                                    </h2>
                                </div>
                                <IconButton 
                                    onClick={handleClose} 
                                    className="rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-all"
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </div>

                            <form onSubmit={sendMessage} className="space-y-4">
                                <div>
                                    <input 
                                        required 
                                        name="name" 
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#22994A] focus:bg-white focus:ring-4 focus:ring-[#22994A]/10 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-[#22994A] dark:focus:bg-gray-800" 
                                        placeholder={t('contact.name')}
                                    />
                                </div>

                                <div>
                                    <InputMask
                                        name="phonenumber"
                                        mask={"99 999 9999"}
                                        placeholder={t('contact.phoneNumber')}
                                    >
                                        {(inputProps) => (
                                            <input 
                                                {...inputProps} 
                                                required 
                                                className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#22994A] focus:bg-white focus:ring-4 focus:ring-[#22994A]/10 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-[#22994A] dark:focus:bg-gray-800"
                                            />
                                        )}
                                    </InputMask>
                                </div>

                                <div>
                                    <input 
                                        required 
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#22994A] focus:bg-white focus:ring-4 focus:ring-[#22994A]/10 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-[#22994A] dark:focus:bg-gray-800" 
                                        placeholder={t('contact.email')} 
                                    />
                                </div>

                                <div>
                                    <input 
                                        required 
                                        name="company"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#22994A] focus:bg-white focus:ring-4 focus:ring-[#22994A]/10 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-[#22994A] dark:focus:bg-gray-800" 
                                        placeholder={t('contact.company')} 
                                    />
                                </div>

                                <div>
                                    <textarea 
                                        rows="3" 
                                        required 
                                        name="message"
                                        className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#22994A] focus:bg-white focus:ring-4 focus:ring-[#22994A]/10 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-[#22994A] dark:focus:bg-gray-800" 
                                        placeholder={t('contact.message')} 
                                    />
                                </div>

                                <div className="pt-2">
                                    <button 
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full rounded-2xl bg-[#22994A] py-4 text-base font-semibold text-white shadow-lg shadow-[#22994A]/30 transition-all duration-200 hover:bg-[#1b7a3a] hover:shadow-xl active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {submitting ? (
                                            <CircularProgress size={22} color="inherit" />
                                        ) : (
                                            <span>{t('contact.send')}</span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

// Application Form Modal
export const Apply_model = ({ open, close = () => {} }) => {
    const { t } = useTranslation()
    const [submitting, setSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleClose = () => {
        setIsSuccess(false)
        close()
    }

    const sendMessage = async (event) => {
        event.preventDefault()
        const message = {
            name: event.target['name'].value,
            phonenumber: event.target['phonenumber'].value,
            email: event.target['email'].value,
            company: event.target['company'].value,
            message: event.target['message'].value,
        }

        setSubmitting(true)
        try {
            await submitFormRequest('apply', message)
            sendEmailNotification(message)
            resetFormFields(event.target)
            setIsSuccess(true)
            showFormSuccess(t)
        } catch {
            showFormError(t)
        } finally {
            setSubmitting(false)
        }
    }

    if (!open) return null

    return (
        <div onClick={handleClose} className="fixed inset-0 z-30 flex h-screen w-full items-center justify-center bg-black/20 px-5 py-[5vh]">
            <div onClick={(e) => e.stopPropagation()} className="animated-dotted-border m-auto max-w-[343px] overflow-y-auto rounded-[16px] bg-white p-[3px] mdMUI:max-w-[637px] mdMUI:rounded-[24px]">
                <div className="rounded-[14px] bg-white p-4 mdMUI:rounded-[22px]">
                    <div className="flex h-[50px] w-full items-center justify-end pr-2">
                        <IconButton onClick={handleClose}>
                            <CloseIcon color="error" />
                        </IconButton>
                    </div>

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                            <div className="relative flex items-center justify-center mb-4">
                                <div className="absolute w-16 h-16 bg-[#22994A]/20 rounded-full animate-ping" />
                                <div className="relative w-14 h-14 bg-[#22994A] rounded-full flex items-center justify-center shadow-lg">
                                    <CheckCircleIcon style={{ fontSize: 32, color: '#ffffff' }} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.successTitle')}</h3>
                            <button 
                                onClick={handleClose}
                                className="mt-4 rounded-full bg-[#22994A] px-8 py-2 text-white font-medium"
                            >
                                {t('contact.close')}
                            </button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <h1 className="mt-[-20px] text-center text-[24px] font-[600] leading-[29.26px] mdMUI:text-[44px] mdMUI:leading-[53.64px]">
                                    {t('mainPage.mainPageSection1.button')}
                                </h1>
                            </div>
                            <div className="scrollModel flex flex-col justify-between overflow-y-auto px-[18px] pt-4 mdMUI:px-[30px]">
                                <form onSubmit={sendMessage}>
                                    <input 
                                        required 
                                        name="name" 
                                        className="mb-[8px] w-full rounded-[100px] border border-gray-200 p-[16px] text-[14px] outline-none focus:border-[#22994A] mdMUI:mb-[14px] mdMUI:text-[18px]" 
                                        placeholder={t('contact.name')} 
                                    />
                                    <InputMask
                                        name="phonenumber"
                                        mask={"99 999 9999"}
                                        placeholder={t('contact.phoneNumber')}
                                    >
                                        {(inputProps) => (
                                            <input 
                                                {...inputProps} 
                                                required 
                                                className="mb-[8px] w-full rounded-[100px] border border-gray-200 p-[16px] text-[14px] outline-none focus:border-[#22994A] mdMUI:mb-[14px] mdMUI:text-[18px]" 
                                            />
                                        )}
                                    </InputMask>
                                    <input 
                                        required 
                                        type="email"
                                        name="email"
                                        className="mb-[8px] w-full rounded-[100px] border border-gray-200 p-[16px] text-[14px] outline-none focus:border-[#22994A] mdMUI:mb-[14px] mdMUI:text-[18px]" 
                                        placeholder={t('contact.email')} 
                                    />
                                    <input 
                                        required 
                                        name="company"
                                        className="mb-[8px] w-full rounded-[100px] border border-gray-200 p-[16px] text-[14px] outline-none focus:border-[#22994A] mdMUI:mb-[14px] mdMUI:text-[18px]" 
                                        placeholder={t('contact.company')} 
                                    />
                                    <textarea 
                                        rows="4" 
                                        required 
                                        name="message"
                                        className="mb-[8px] w-full rounded-[20px] border border-gray-200 p-[16px] text-[14px] outline-none focus:border-[#22994A] mdMUI:mb-[14px] mdMUI:text-[18px]" 
                                        placeholder={t('contact.message')} 
                                    />
                                    <button 
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full rounded-[44px] bg-[#22994A] py-[16px] text-[18px] font-[600] text-white transition-all hover:bg-[#1b7a3a]"
                                    >
                                        {submitting ? '...' : t('contact.send')}
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

// PDF Viewer Modal
export const PdfModal = ({ open, close = () => {}, pdfModel = {}, onDocumentLoadSuccess = () => {} }) => {
    if (!open) return null

    const pageWidths = ['1050', '800', '650', '450', '350', '290', '230']

    return (
        <div onClick={close} className="scrollModel fixed z-30 flex h-screen w-full overflow-y-auto bg-black/20 px-5 py-[10vh] justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="m-auto overflow-y-auto rounded-[16px] bg-white mdMUI:rounded-[24px]">
                <div className="grid grid-rows-[50px_1fr_16px] overflow-hidden mdMUI:grid-rows-[50px_1fr_17px]">
                    <div className="flex h-[50px] w-full items-center justify-end pr-2">
                        <IconButton onClick={close}>
                            <CloseIcon color="error" />
                        </IconButton>
                    </div>
                    <div className="flex flex-col justify-between px-[16px] mdMUI:px-[30px]">
                        <div className="pdfMinWidth flex justify-center py-5 mdMUI:py-10">
                            {pageWidths.map((width, index) => (
                                <div key={width} className={`pdfModelSize${index + 1}`}>
                                    <Document file={pdfModel.image} onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={1} width={width} />
                                    </Document>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Mobile Header Navigation Drawer Modal
export const HeaderDrawerModal = ({ open, close = () => {}, navigate, changeLanguage = () => {} }) => {
    const { t } = useTranslation()

    if (!open) return null

    const navLinks = [
        { to: '/aboutcompany', labelKey: 'layout.layoutHeader.text1' },
        { to: '/projects', labelKey: 'layout.layoutHeader.text2' },
        { to: '/services', labelKey: 'layout.layoutHeader.text3' },
        { to: '/solutions', labelKey: 'layout.layoutHeader.text4' },
        { to: '/career', labelKey: 'layout.layoutHeader.text5' },
        { labelKey: 'layout.layoutHeader.text6' },
        { to: '/contact', labelKey: 'layout.layoutHeader.text7' },
    ]

    const activeLang = t('project.text1')

    return (
        <header 
            style={{ background: 'linear-gradient(316.34deg, #0B6329 1.98%, #32A55C 108.66%)' }}
            className="drawerMobileAnimation fixed top-0 left-0 z-20 h-screen w-full overflow-y-auto mdMUI:hidden"
        >
            <div className="flex h-[85px] w-full items-center px-[16px]">
                <div className="flex w-full items-center justify-between">
                    <button onClick={close}>
                        <img src={icon_menu_close} alt="Close Menu" width="36px" height="36px" />
                    </button>
                    <div>
                        <img 
                            src={logo_light} 
                            alt="Logo" 
                            onClick={() => { navigate?.('/'); close() }} 
                            width="182px" 
                            className="cursor-pointer" 
                        />
                    </div>
                    <div className="w-[40px]" />
                </div>
            </div>
            <div className="mb-[115px] mt-[64px] w-full text-center">
                <div className="mx-auto mb-[121px] flex flex-col text-[20px] font-[600] leading-[24.38px] text-[#FFF9F9]">
                    {navLinks.map(({ to, labelKey }, idx) => (
                        <Link 
                            key={idx} 
                            to={to || '#'} 
                            onClick={close} 
                            className="mb-[36px] last:mb-0"
                        >
                            {t(labelKey)}
                        </Link>
                    ))}
                </div>
                <div className="mx-auto">
                    <div className="text-[14px] font-[600] leading-[17px] text-white/70">
                        <button 
                            onClick={() => changeLanguage('tj')} 
                            className={`mr-[16px] h-[24px] w-[24px] ${activeLang === 'Пурра' ? 'text_shadow text-white' : ''}`}>
                            TJ
                        </button>
                        <button 
                            onClick={() => changeLanguage('ru')} 
                            className={`mr-[16px] h-[24px] w-[24px] ${activeLang === 'Все' ? 'text_shadow text-white' : ''}`}
                        >
                            RU
                        </button>
                        <button 
                            onClick={() => changeLanguage('en')} 
                            className={`h-[24px] w-[24px] ${activeLang === 'All' ? 'ste text-white' : ''}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}