import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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

    const {t} = useTranslation()

  return (
    <div className='w-full bg-[rgba(242,242,242,1)] 2xl:min-h-[80.8vh] mdMUI:pb-[267px] pb-[72px] mdMUI:pt-[192px] pt-[36px]'>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content="Система управления для школ · Автоматизация рабочих процессов · AI системы распознавания · Автоматизация резервирования данных · IP Контакт-центр и CRM · Система управления медицинских учреждений" />
        </Helmet>
        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
            <div className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[56px] mb-[24px]'>
                <h1 className='text-[rgba(73,73,73,1)] '>{t("solutions.title")}</h1>
            </div>
            <div className='w-full min-h-[930px] flex flex-wrap justify-between gap-y-[40px] text-[rgba(73,73,73,1)]'>
                <div className='flex flex-col flex-wrap gap-x-[44px] mdMUI:gap-y-[40px] gap-y-[36px] lg:w-[31%] sm:w-[47%] w-[100%]'>
                    
                <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover flex flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card1_image1} alt='card1_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited1 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card1_image2} alt='card1_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card1.title')}</h3>
                        </div>
                        <div className=''>
                                <p className={`${cardComplited1 ? "": "textLimit"} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card1.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited1(!cardComplited1)}>{cardComplited1 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>
                
                    
                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover flex flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card2_image1} alt='card2_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited2 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card2_image2} alt='card2_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card4.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited2 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card4.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited2(!cardComplited2)}>{cardComplited2 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>



                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover lg:hidden sm:flex hidden flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card5_image1} alt='card5_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited5 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card5_image2} alt='card5_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card3.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited5 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card3.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited5(!cardComplited5)}>{cardComplited5 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>
                    
                </div>

                
                <div className='flex flex-col flex-wrap gap-x-[44px] lg:gap-y-[40px] gap-y-[36px] lg:w-[31%] sm:w-[47%] w-[100%]'>
                    
                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover flex flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card3_image1} alt='card3_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited3 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card3_image2} alt='card3_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card2.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited3 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card2.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited3(!cardComplited3)}>{cardComplited3 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>
                    
                    
                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover flex flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card4_image1} alt='card4_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited4 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card4_image2} alt='card4_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card5.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited4 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card5.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited4(!cardComplited4)}>{cardComplited4 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>


                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover lg:hidden sm:flex hidden flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card6_image1} alt='card6_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited6 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card6_image2} alt='card6_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card6.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited6 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card6.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited6(!cardComplited6)}>{cardComplited6 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>
                    
                </div>


                <div className='lg:flex sm:hidden flex flex-col flex-wrap gap-x-[44px] lg:gap-y-[40px] gap-y-[36px] lg:w-[31%] sm:w-[47%] w-[100%]'>
                    
                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover flex flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card5_image1} alt='card5_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited5 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card5_image2} alt='card5_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card3.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited5 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card3.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited5(!cardComplited5)}>{cardComplited5 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>
                    
                    
                    <div className='shadow-[-1px_5px_9px] shadow-[rgba(120,120,120,0.25)] rounded-[16px] bg-[#FFFFFF] w-full min-h-[426px] sm:min-h-[446px] pt-[36px] pb-[28px] px-[38px] card_hover flex flex-col justify-between'>
                        <div className='flex justify-center'>
                            <div className='card_icon_first lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]'>
                                <img src={card6_image1} alt='card6_image1' className='' width='100%' height='100%'/>
                            </div>
                            <div className={`lg:ml-[-121px] ml-[-112px] ${cardComplited6 ? '' : 'card_icon_hover'} lg:w-[121px] lg:h-[120px] w-[112px] h-[112px]`}>
                                <img src={card6_image2} alt='card6_image2' className='' width='100%' height='100%'/>
                            </div>
                        </div>
                        <div className='w-full text-center mt-[24px]'>
                            <h3 className='text-[18px] leading-[22px] font-[600]'>{t('solutions.card6.title')}</h3>
                        </div>
                        <div className=''>
                            <p className={`${cardComplited6 ? '': 'textLimit'} text-[14px] my-[24px] font-[400] leading-[19.8px]`}>{t('solutions.card6.text')}</p>
                            <h5 className='decoration-solid decoration underline text-[rgba(34,153,74,1)] cursor-pointer inline' onClick={()=>setCardComplited6(!cardComplited6)}>{cardComplited6 ? t('solutions.hide') : t('solutions.more')}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions