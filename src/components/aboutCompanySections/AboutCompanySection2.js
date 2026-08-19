import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import fon_image_1 from '../../images/image.png'
import fon_image_2 from '../../images/Rectangle 24.png'
import fon_image_3 from '../../images/Rectangle 24 (1).png'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function AboutCompanySection2() {
  const [whichSection, setWhichSection] = useState(3)
const { t } = useTranslation('translation', { keyPrefix: 'aboutCompany' })
const sectionsData = [
  {
    id: 1,
    num: '01',
    badge: t('aboutCompanySection2.badge1', 'History'),
    tabTitle: t('aboutCompanySection2.tab1', 'Foundation of the company'),
    chapter: t('aboutCompanySection2.chapter1', 'CHAPTER 01'),
    title: t('aboutCompanySection2.title1', 'Foundation of the company'),
    text1: t('aboutCompanySection2.text1_1'),
    text2: t('aboutCompanySection2.text1_2'),
    imgDesktop: fon_image_1,
  },
  {
    id: 2,
    num: '02',
    badge: t('aboutCompanySection2.badge2', 'Development'),
    tabTitle: t('aboutCompanySection2.tab2', 'VATAN ICT today'),
    chapter: t('aboutCompanySection2.chapter2', 'CHAPTER 02'),
    title: t('aboutCompanySection2.title2', 'VATAN ICT today'),
    text1: t('aboutCompanySection2.text2_1'),
    text2: t('aboutCompanySection2.text2_2'),
    imgDesktop: fon_image_2,
  },
  {
    id: 3,
    num: '03',
    badge: t('aboutCompanySection2.badge3', 'Our Principles'),
    tabTitle: t('aboutCompanySection2.tab3', 'Social responsibility'),
    chapter: t('aboutCompanySection2.chapter3', 'CHAPTER 03'),
    title: t('aboutCompanySection2.title3', 'Social responsibility'),
    text1: t('aboutCompanySection2.text3_1'),
    text2: t('aboutCompanySection2.text3_2'),
    imgDesktop: fon_image_3,
  },
]

  const current = sectionsData.find((item) => item.id === whichSection) || sectionsData[0]

  const handleNext = () => {
    setWhichSection((prev) => (prev % sectionsData.length) + 1)
  }

  const handlePrev = () => {
    setWhichSection((prev) => (prev === 1 ? sectionsData.length : prev - 1))
  }

  return (
    <div className='w-full bg-[#f4f6f5] dark:bg-[#0A0F0D] py-[40px] mdMUI:py-[60px] transition-colors duration-300'>
      <div className='max-w-[1440px] mx-auto px-[16px] mdMUI:px-[60px]'>
        
        {/* 1. Блоки болоӣ: Сарлавҳа ва Табҳо */}
        <div className='mb-[32px]'>
          <h3 className='text-[12px] mdMUI:text-[13px] font-bold text-[#22994A] tracking-[0.15em] uppercase mb-4'>
            {t('aboutCompanySection2.subtitle', 'НАША ИСТОРИЯ')}
          </h3>

          {/* Табҳо (Tabs Header) */}
          <div className='flex flex-wrap items-center gap-3'>
            {sectionsData.map((item) => {
              const isActive = item.id === whichSection
              return (
                <button
                  key={item.id}
                  onClick={() => setWhichSection(item.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-[14px] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#22994A] text-white shadow-md'
                      : 'bg-white dark:bg-[#1E2320] text-gray-700 dark:text-gray-300 hover:border-[#22994A]/40 border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  <span className={isActive ? 'text-white/80 font-semibold' : 'text-gray-400'}>
                    {item.num}
                  </span>
                  <span>{item.tabTitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. Карточкаи асосии дутарафа бо андозаи якхела */}
        <div className='w-full rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#1E2320] shadow-xl border border-gray-100 dark:border-gray-800 lg:h-[580px]'>
          
          {/* Тарафи чап: Қисми Сабз */}
          <div className='bg-[#22994A] p-[28px] mdMUI:p-[48px] text-white flex flex-col justify-between h-full overflow-y-auto'>
            
            <div>
              <div className='flex items-center gap-3 mb-5'>
                <span className='text-[12px] font-bold uppercase tracking-wider text-white/80'>
                  {current.chapter}
                </span>
                <span className='px-3 py-1 rounded-full text-[12px] bg-white/15 border border-white/20 text-white font-medium'>
                  {current.badge}
                </span>
              </div>

              <h2 className='text-[26px] mdMUI:text-[36px] font-bold mb-5 leading-tight'>
                {current.title}
              </h2>

              <div className='space-y-3 text-[13px] mdMUI:text-[14.5px] font-normal leading-[1.65] text-white/90 max-w-[560px]'>
                <p>{current.text1}</p>
                {current.text2 && <p>{current.text2}</p>}
              </div>
            </div>

            {/* Навигатсияи поёнӣ (Пагинатсия ва Тирчаҳо) */}
            <div className='flex items-center justify-between pt-6 border-t border-white/15 mt-6 shrink-0'>
              
              <div className='flex items-center gap-2'>
                {sectionsData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWhichSection(item.id)}
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      item.id === whichSection ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${item.id}`}
                  />
                ))}
              </div>

              <div className='flex items-center gap-3'>
                <button
                  onClick={handlePrev}
                  className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all duration-200 cursor-pointer'
                  aria-label="Previous section"
                >
                  <ArrowBackIcon style={{ fontSize: '18px' }} />
                </button>
                <button
                  onClick={handleNext}
                  className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all duration-200 cursor-pointer'
                  aria-label="Next section"
                >
                  <ArrowForwardIcon style={{ fontSize: '18px' }} />
                </button>
              </div>

            </div>

          </div>

          {/* Тарафи рост: Акс */}
          <div className='w-full h-[320px] lg:h-full relative overflow-hidden bg-gray-100 dark:bg-gray-800'>
            <img
              key={current.id}
              src={current.imgDesktop}
              alt={current.title}
              className='w-full h-full object-cover transition-all duration-500'
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutCompanySection2