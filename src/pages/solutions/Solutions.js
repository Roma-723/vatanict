import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
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
import { useTranslation } from 'react-i18next'

function Solutions() {
    const [cardComplited1, setCardComplited1] = useState(false)
    const [cardComplited2, setCardComplited2] = useState(false)
    const [cardComplited3, setCardComplited3] = useState(false)
    const [cardComplited4, setCardComplited4] = useState(false)
    const [cardComplited5, setCardComplited5] = useState(false)
    const [cardComplited6, setCardComplited6] = useState(false)

    const { t } = useTranslation()

    // Функция барои сохтани карточкаҳо бо эффектҳои Hover, Border ва Shadow
    const renderCard = (image1, image2, titleKey, textKey, isCompleted, setCompleted, index) => (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className='shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_30px_rgba(34,153,74,0.15)] dark:hover:shadow-[0_12px_30px_rgba(34,153,74,0.25)] rounded-[16px] bg-[#FFFFFF] dark:bg-[#131916] border border-[rgba(230,230,230,1)] dark:border-gray-800 hover:border-[rgba(34,153,74,0.5)] dark:hover:border-[#22994a] w-full pt-[36px] pb-[28px] px-[38px] flex flex-col justify-between transition-all duration-300 h-full'
        >
            <div>
                <div className='flex justify-center'>
                    <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                        <img src={image1} alt='icon' className='w-full h-full object-contain' width='100%' height='100%'/>
                    </div>
                    <div className={`lg:ml-[-121px] ml-[-112px] ${isCompleted ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                        <img src={image2} alt='icon-hover' className='w-full h-full object-contain' width='100%' height='100%'/>
                    </div>
                </div>
                <div className='w-full text-center mt-[24px]'>
                    <h3 className='text-[18px] leading-[22px] font-[600] text-slate-900 dark:text-white'>{t(titleKey)}</h3>
                </div>
            </div>
            
            <div className='mt-auto pt-4'>
                <p className={`${isCompleted ? '': 'textLimit'} text-[14px] mb-[20px] font-[400] leading-[19.8px] text-slate-600 dark:text-gray-300`}>
                    {t(textKey)}
                </p>
                <h5 
                    className='decoration-solid decoration underline text-[rgba(34,153,74,1)] dark:text-[#25b558] cursor-pointer inline font-medium text-sm hover:opacity-80 transition-opacity' 
                    onClick={() => setCompleted(!isCompleted)}
                >
                    {isCompleted ? t('solutions.hide') : t('solutions.more')}
                </h5>
            </div>
        </motion.div>
    )

  return (
    <div className='w-full bg-[rgba(242,242,242,1)] dark:bg-[#0A0F0D] 2xl:min-h-[80.8vh] mdMUI:pb-[267px] pb-[72px] mdMUI:pt-[192px] pt-[36px] transition-colors duration-300'>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content="Система управления для школ · Автоматизация рабочих процессов · AI системы распознавания · Автоматизация резервирования данных · IP Контакт-центр и CRM · Система управления медицинских учреждений" />
        </Helmet>
        
        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
            
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[56px] mb-[24px]'
            >
                <h1 className='text-[rgba(73,73,73,1)] dark:text-white'>{t("solutions.title")}</h1>
            </motion.div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] text-[rgba(73,73,73,1)] dark:text-gray-200'>
                
                {/* Column 1 */}
                <div className='flex flex-col gap-[40px]'>
                    {renderCard(card1_image1, card1_image2, 'solutions.card1.title', 'solutions.card1.text', cardComplited1, setCardComplited1, 0)}
                    {renderCard(card2_image1, card2_image2, 'solutions.card4.title', 'solutions.card4.text', cardComplited2, setCardComplited2, 1)}
                </div>

                {/* Column 2 */}
                <div className='flex flex-col gap-[40px]'>
                    {renderCard(card3_image1, card3_image2, 'solutions.card2.title', 'solutions.card2.text', cardComplited3, setCardComplited3, 2)}
                    {renderCard(card4_image1, card4_image2, 'solutions.card5.title', 'solutions.card5.text', cardComplited4, setCardComplited4, 3)}
                </div>

                {/* Column 3 */}
                <div className='flex flex-col gap-[40px] sm:col-span-2 lg:col-span-1'>
                    {renderCard(card5_image1, card5_image2, 'solutions.card3.title', 'solutions.card3.text', cardComplited5, setCardComplited5, 4)}
                    {renderCard(card6_image1, card6_image2, 'solutions.card6.title', 'solutions.card6.text', cardComplited6, setCardComplited6, 5)}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Solutions