import React from 'react' 
import hikvision_logo from '../../images/hikvision_logo.png'
import logo_dark from '../../images/logo-dark.png'
import logo_color from '../../images/logo_color_1x.png'
import logo_cassway from '../../images/Group (1).png'
import logo_dushnbe from '../../images/logo-smart-city 1.png'

import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next'


function MainPageSection5() {
    const {t} = useTranslation()
  return (
    <div className='w-full bg-[rgba(242,242,242,1)] min-h-[300px] mdMUI:pt-[150px] pt-[72px]'>
        <div className=' mx-auto max-w-[2100px]'>
            <div className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:pb-[56px]'>
                <h1 className='text-[rgba(73,73,73,1)]'>{t('mainPage.mainPageSection5.title')}</h1>
            </div>
            <div className='smMUI:block hidden w-full pb-[129px]'>
                <Swiper 
                // slidesPerView={5.3}
                freeMode={true}
                spaceBetween={35}
                pagination={{
                    clickable:true
                }}
                grabCursor
                touchRatio={1}
                // slidesPerGroup={3}
                breakpoints={{
                    1300:{
                        slidesPerView: 5.5,
                        slidesPerGroup: 4,
                    },
                    980:{
                        slidesPerView: 5,
                        slidesPerGroup: 3,
                    },
                    600:{
                        slidesPerView: 4.8,
                        slidesPerGroup: 3,
                    },
                    0:{
                        slidesPerView: 4.5,
                        slidesPerGroup: 3,
                    },
                }}
                modules={[Pagination,FreeMode]}
                className='w-full mdMUI:h-[200px] h-[150px] mySwiper swiperMainPagination2'>
                    <SwiperSlide className='ml-[35px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={hikvision_logo}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_dark}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_color}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_cassway}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_dushnbe}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={hikvision_logo}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_dark}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_color}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_cassway}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'><div className='flex items-center h-full justify-center mdMUI:pb-[50px] pb-[20px] mdMUI:max-w-[180px] smMUI:max-w-[80px] max-w-[50px] w-full'><img width='auto' height='100%' src={logo_dushnbe}/></div></SwiperSlide>
                    <SwiperSlide className='ml-[5px] flex items-center'></SwiperSlide>
                </Swiper>
            </div>
            <div className='smMUI:hidden flex flex-col justify-center'>
                <div className='flex items-center justify-center w-full h-full mb-[56px]'><img width='auto' height='100%' src={hikvision_logo}/></div>
                <div className='flex items-center justify-center w-full h-full mb-[56px]'><img width='auto' height='100%' src={logo_dark}/></div>
                <div className='flex items-center justify-center w-full h-full mb-[56px]'><img width='auto' height='100%' src={logo_color}/></div>
                <div className='flex items-center justify-center w-full h-full mb-[56px]'><img width='auto' height='100%' src={logo_cassway}/></div>
                <div className='flex items-center justify-center w-full h-full mb-[56px]'><img width='auto' height='100%' src={logo_dushnbe}/></div>
            </div>
        </div>
    </div>
  )
}

export default MainPageSection5