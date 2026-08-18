import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import fon_image_1 from '../../images/image.png'
import fon_image_2 from '../../images/Rectangle 24.png'
import fon_image_3 from '../../images/Rectangle 24 (1).png'
import fon_image_mobile_1 from '../../images/Rectangle 32.png'
import fon_image_mobile_2 from '../../images/Rectangle 32 (1).png'
import fon_image_mobile_3 from '../../images/Rectangle 32 (2).png'

function AboutCompanySection2() {
  const [whichSection, setWhichSection] = useState(1)
  const { t } = useTranslation()

  const sectionsData = [
    {
      id: 1,
      year: '2014',
      title: t('aboutCompany.aboutCompanySection2.title1'),
      text1: t('aboutCompany.aboutCompanySection2.text1_1'),
      text2: t('aboutCompany.aboutCompanySection2.text1_2'),
      imgDesktop: fon_image_1,
      imgMobile: fon_image_mobile_1,
    },
    {
      id: 2,
      year: '2014',
      title: t('aboutCompany.aboutCompanySection2.title2'),
      text1: t('aboutCompany.aboutCompanySection2.text2_1'),
      text2: t('aboutCompany.aboutCompanySection2.text2_2'),
      imgDesktop: fon_image_2,
      imgMobile: fon_image_mobile_2,
    },
    {
      id: 3,
      year: '2020',
      title: t('aboutCompany.aboutCompanySection2.title3'),
      text1: t('aboutCompany.aboutCompanySection2.text3_1'),
      text2: t('aboutCompany.aboutCompanySection2.text3_2'),
      imgDesktop: fon_image_3,
      imgMobile: fon_image_mobile_3,
    },
  ]

  const current = sectionsData.find((item) => item.id === whichSection) || sectionsData[0]

  return (
    <div className='w-full min-h-[835px] flex justify-center relative bg-[#0f1715] overflow-hidden'>
      {/* Background Image бо сурати ҷории десктоп ё мобилӣ */}
      <div className='absolute inset-0 z-0'>
        <img 
          src={current.imgDesktop} 
          alt='Background' 
          className='w-full h-full object-cover opacity-90' 
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30' />
      </div>

      <div className='relative z-10 w-full max-w-[1440px] min-h-[835px] flex flex-col justify-between p-[24px] mdMUI:p-[60px]'>
        
        {/* Заголовок */}
        <h1 className='text-white text-[28px] mdMUI:text-[36px] font-bold mb-[20px] drop-shadow-md'>
          {current.title}
        </h1>

        {/* Карточкаи Матн (Glassmorphism / Карточкаи шишагии шаффоф) */}
        <div className='max-w-[680px] backdrop-blur-md bg-white/10 border border-white/20 rounded-[24px] p-[24px] mdMUI:p-[36px] text-white shadow-2xl transition-all duration-500'>
          <p className='text-[14px] mdMUI:text-[16px] leading-[1.6] font-normal mb-[16px] text-white/90'>
            {current.text1}
          </p> 
          <p className='text-[14px] mdMUI:text-[16px] leading-[1.6] font-normal text-white/90'>
            {current.text2}
          </p>
        </div>

        {/* Timeline / Индикатори дурахшон (Glow Lines & Dots) */}
        <div className='w-full mt-[40px] relative pb-[20px]'>
          
          {/* Хатти дурахшон */}
          {/* <div className='absolute top-1/2 left-0 right-0 h-[4px] bg-white/30 -translate-y-1/2 z-0 shadow-[0_0_12px_rgba(255,255,255,0.8)]' /> */}

          {/* Нуқтаҳо ва Солҳо */}
          

        </div>

      </div>
    </div>
  )
}

export default AboutCompanySection2