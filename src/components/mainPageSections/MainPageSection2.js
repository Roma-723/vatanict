import React from 'react'
import card1_image1 from '../../images/Frame 44.png'
import card1_image2 from '../../images/Frame 17.png'
import card2_image1 from '../../images/Frame 26.png'
import card2_image2 from '../../images/Frame 27.png'
import card3_image1 from '../../images/Frame 19.png'
import card3_image2 from '../../images/Frame 23.png'
import card4_image1 from '../../images/Frame 31.png'
import card4_image2 from '../../images/Frame 29.png'
import card5_image1 from '../../images/Frame 24.png'
import card5_image2 from '../../images/Frame 25.png'
import card6_image1 from '../../images/Frame 30.png'
import card6_image2 from '../../images/Group.png'
import { useDispatch } from 'react-redux'
import { setOrderService } from '../../Redux/reducers/GlobalState'
import { useTranslation } from 'react-i18next'

function MainPageSection2() {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const cardsData = [
        { id: '01', img1: card1_image1, img2: card1_image2, titleKey: 'solutions.card1.title', textKey: 'solutions.card1.text', defaultText: 'Автоматизация бизнес-процессов' },
        { id: '02', img1: card2_image1, img2: card2_image2, titleKey: 'solutions.card2.title', textKey: 'solutions.card2.text', defaultText: 'Разработка веб-приложений' },
        { id: '03', img1: card3_image1, img2: card3_image2, titleKey: 'solutions.card3.title', textKey: 'solutions.card3.text', defaultText: 'Мобильные решения' },
        { id: '04', img1: card4_image1, img2: card4_image2, titleKey: 'solutions.card4.title', textKey: 'solutions.card4.text', defaultText: 'Интеграция систем' },
        { id: '05', img1: card5_image1, img2: card5_image2, titleKey: 'solutions.card5.title', textKey: 'solutions.card5.text', defaultText: 'CRM и ERP системы' },
        { id: '06', img1: card6_image1, img2: card6_image2, titleKey: 'solutions.card6.title', textKey: 'solutions.card6.text', defaultText: 'Цифровая система для автоматизации медицинских учреждений и клиник.' },
    ]

    return (
        <div className='relative w-full bg-[#F4F6F5] dark:bg-[#0D120F] min-h-[1000px] mdMUI:py-[80px] py-[50px] overflow-hidden transition-colors duration-300'>
            
            {/* Ambient Background Light */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22994A]/10 dark:bg-[#22994A]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className='relative z-10 2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
                
                {/* Mobile Welcome Banner */}
                <div className='mdMUI:hidden block pt-[10px] pb-[20px] text-gray-800 dark:text-gray-100 transition-colors duration-300'>
                    <h1 className='font-bold text-[20px] leading-[28px] max-w-[800px] uppercase'>
                        {t('mainPage.mainPageSection1.title1')}{' '}
                        <span className='text-[#22994A]'>{t('mainPage.mainPageSection1.title2')}</span>{' '}
                        {t('mainPage.mainPageSection1.title3')}{' '}
                        <span className='text-[#22994A]'>{t('mainPage.mainPageSection1.title4')}</span>
                    </h1>
                    <h3 className='leading-[20px] font-normal text-[13px] mt-[16px] text-gray-600 dark:text-gray-300'>
                        {t('mainPage.mainPageSection1.text1')}
                    </h3>
                    <div className='mt-[20px] mb-[32px]'>
                        <button 
                            onClick={() => dispatch(setOrderService(true))} 
                            className='py-[12px] px-[24px] rounded-full text-[13px] font-semibold text-white bg-[#22994A] hover:bg-[#1e8540] active:scale-95 transition-all duration-200 shadow-md shadow-[#22994A]/25'
                        >
                            {t('mainPage.mainPageSection1.button')}
                        </button>
                    </div>
                </div>

                {/* Section Title */}
                <div className='w-full text-center mdMUI:text-[38px] text-[24px] leading-[44px] font-bold mb-[40px]'>
                    <h1 className='text-gray-900 dark:text-white tracking-wide transition-colors duration-300'>
                        {t("solutions.title", "Наши решения")}
                    </h1>
                </div>

                {/* Grid of Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                    {cardsData.map((card) => {
                        const cardText = t(card.textKey, { defaultValue: card.defaultText })
                        
                        return (
                            <div 
                                key={card.id}
                                className="group relative rounded-[28px] bg-white dark:bg-[#131915] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-none border border-[#22994A]/40 dark:border-[#22994A]/50"
                            >
                                {/* Top-Right Radial Glow inside card */}
                                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#22994A]/20 to-transparent rounded-bl-full pointer-events-none" />

                                <div>
                                    {/* Top Row: Circular Green Background + Original Images */}
                                    <div className="flex items-center justify-between mb-6 relative z-10">
                                        <div className="w-16 h-16 rounded-full bg-[#188A42] flex items-center justify-center shadow-md shadow-[#188A42]/20 relative overflow-hidden">
                                            <img 
                                                src={card.img1} 
                                                alt={`Solution ${card.id}`} 
                                                className="absolute inset-0 w-full h-full object-contain p-3.5 transition-opacity duration-300 opacity-100 group-hover:opacity-0" 
                                            />
                                            <img 
                                                src={card.img2} 
                                                alt={`Solution ${card.id} Hover`} 
                                                className="absolute inset-0 w-full h-full object-contain p-3.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                                            />
                                        </div>

                                        <span className="text-4xl font-extrabold text-[#9EE2B8] dark:text-[#22994A]/60 tracking-wider">
                                            {card.id}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="text-left relative z-10">
                                        <h3 className="text-[20px] font-bold text-[#188A42] dark:text-[#22994A] mb-3 leading-snug">
                                            {t(card.titleKey, { defaultValue: `Card ${card.id}` })}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-[14px] leading-relaxed">
                                            {cardText || card.defaultText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default MainPageSection2