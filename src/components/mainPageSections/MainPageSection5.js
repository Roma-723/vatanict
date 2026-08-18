import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper'

import hikvision_logo from '../../images/hikvision_logo.png'
import logo_dark from '../../images/logo-dark.png'
import logo_color from '../../images/logo_color_1x.png'
import logo_cassway from '../../images/Group (1).png'
import logo_dushnbe from '../../images/logo-smart-city 1.png'

import 'swiper/css'
import 'swiper/css/pagination'

function MainPageSection5() {
    const { t } = useTranslation()

    const partnerLogos = [
        { id: 1, src: hikvision_logo, alt: 'Hikvision' },
        { id: 2, src: logo_dark, alt: 'Partner' },
        { id: 3, src: logo_color, alt: 'Partner' },
        { id: 4, src: logo_cassway, alt: 'Cassway' },
        { id: 5, src: logo_dushnbe, alt: 'Smart City Dushanbe' },
        { id: 6, src: hikvision_logo, alt: 'Hikvision' },
        { id: 7, src: logo_dark, alt: 'Partner' },
        { id: 8, src: logo_color, alt: 'Partner' },
    ]

    return (
        <section className="w-full bg-[#F4F6F5] dark:bg-[#0D120F] py-16 lg:py-24 transition-colors duration-300 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                
                {/* Title Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191C1A] dark:text-white tracking-tight">
                        {t('mainPage.mainPageSection5.title')}
                    </h2>
                    <div className="w-12 h-1 bg-[#22994A] rounded-full mx-auto mt-4" />
                </div>

                {/* Swiper Carousel */}
                <div className="w-full">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        freeMode={true}
                        grabCursor={true}
                        spaceBetween={20}
                        breakpoints={{
                            1280: { slidesPerView: 5, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                            640: { slidesPerView: 3, spaceBetween: 16 },
                            0: { slidesPerView: 2, spaceBetween: 12 },
                        }}
                        modules={[Pagination, FreeMode, Autoplay]}
                        className="w-full pb-12 mySwiper"
                    >
                        {partnerLogos.map((logo) => (
                            <SwiperSlide key={logo.id} className="h-auto">
                                {/* Card Background White */}
                                <div className="group relative w-full h-[120px] sm:h-[140px] rounded-2xl bg-white p-6 flex items-center justify-center border border-[#22994A]/25 dark:border-[#22994A]/40 hover:border-[#22994A] dark:hover:border-[#22994A] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(34,153,74,0.2)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    
                                    {/* Top Line Accent */}
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#22994A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}

export default MainPageSection5