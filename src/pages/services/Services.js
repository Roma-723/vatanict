import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import icon_1_1 from '../../images/Group (2).png'
import icon_2_1 from '../../images/Group (3).png'
import icon_3_1 from '../../images/Group (4).png'
import icon_4_1 from '../../images/Group (5).png'
import icon_5_1 from '../../images/Group (6).png'
import icon_1_2 from '../../images/Group (7).png'
import icon_2_2 from '../../images/Group (8).png'
import icon_3_2 from '../../images/Group (9).png'
import icon_4_2 from '../../images/Group (10).png'
import icon_5_2 from '../../images/Group (11).png'
import icon_arrow_right from '../../images/Frame 2046.png'
import { useTranslation } from 'react-i18next'

function Services() {
    const [servicesState, setServicesState] = useState(0)
    const {t} = useTranslation()

  return (
    <div className='w-full bg-[rgba(242,242,242,1)] 2xl:min-h-[80.8vh] mdMUI:pt-[192px] pt-[36px]'>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content="ИТ Консалтинг · Дизайн · Проектирование · Разработка · Интеграция" />
        </Helmet>
        <div className='bg-[rgba(242,242,242,1)] mx-auto max-w-[2100px]'>
            <div className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[56px] mb-[24px]    2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
                <h1 className='text-[rgba(73,73,73,1)]'>{t('servise.title')}</h1>
            </div>
            <div className='mdMUI:block hidden'>
                <div 
                style={{background: 'linear-gradient(7.78deg, #0C642A 22.51%, #2F9F57 96.27%)'}}
                className='text-white'
                >
                    <div className='lgMUI:min-h-[330px] min-h-[250px] grid mdMUI:grid-cols-5 font-[600] lgMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px]'>
                        {
                            servicesState == 1 ?
                            <div className='bg-white border-r-[2px] border-b-[2px] border-dashed border-[rgba(34,153,74,1)] flex flex-col justify-center items-center w-full h-full'>
                                <div onClick={()=>setServicesState(0)} className='flex flex-col justify-center items-center text-white'>
                                    {/* <img src={icon_1_1} alt='icon_1_1' className=''/> */}
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_1_2} alt='icon_1_2' className='' width='100%' height='100%'/>
                                    </div>
                                    <h2 className='mt-[24px] text-[rgba(34,153,74,1)]'>{t('servise.card1.title')}</h2>
                                </div>
                            </div>
                                :
                            <div className={`${servicesState != 2 ? 'border-r-[2px] border-dashed border-white' : ''} flex flex-col justify-center items-center w-full h-full`}>
                                <div onClick={()=>setServicesState(1)} className='cursor-pointer flex flex-col justify-center items-center'>
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_1_1} alt='icon_1_1' className='' width='100%' height='100%'/>
                                    </div>
                                    {/* <img src={icon_1_2} alt='icon_1_2' className=''/> */}
                                    <h2 className='mt-[24px]'>{t('servise.card1.title')}</h2>
                                </div>
                            </div>
                        }
                        {
                            servicesState == 2 ?
                            <div className='bg-white border-x-[2px] border-b-[2px] border-dashed border-[rgba(34,153,74,1)] flex flex-col justify-center items-center w-full h-full'>
                                <div onClick={()=>setServicesState(0)} className='flex flex-col justify-center items-center text-white'>
                                    {/* <img src={icon_2_1} alt='icon_2_1' className=''/> */}
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_2_2} alt='icon_2_2' className='' width='100%' height='100%'/>
                                    </div>
                                    <h2 className='mt-[24px] text-[rgba(34,153,74,1)]'>{t('servise.card2.title')}</h2>
                                </div>
                            </div>
                                :
                            <div className={`${servicesState != 3 ? 'border-r-[2px] border-dashed border-white' : ''} flex flex-col justify-center items-center w-full h-full`}>
                                <div onClick={()=>setServicesState(2)} className='cursor-pointer flex flex-col justify-center items-center'>
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_2_1} alt='icon_2_1' className='' width='100%' height='100%'/>
                                    </div>
                                    {/* <img src={icon_2_2} alt='icon_2_2' className=''/> */}
                                    <h2 className='mt-[24px]'>{t('servise.card2.title')}</h2>
                                </div>
                            </div>
                        }
                        {
                            servicesState == 3 ?
                            <div className='bg-white border-x-[2px] border-b-[2px] border-dashed border-[rgba(34,153,74,1)] flex flex-col justify-center items-center w-full h-full'>
                                <div onClick={()=>setServicesState(0)} className='flex flex-col justify-center items-center text-white'>
                                    {/* <img src={icon_3_1} alt='icon_3_1' className=''/> */}
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_3_2} alt='icon_3_2' className='' width='100%' height='100%'/>
                                    </div>
                                    <h2 className='mt-[24px] text-[rgba(34,153,74,1)]'>{t('servise.card3.title')}</h2>
                                </div>
                            </div>
                                :
                            <div className={`${servicesState !=4 ? 'border-r-[2px] border-dashed border-white' : ''} flex flex-col justify-center items-center w-full h-full`}>
                                <div onClick={()=>setServicesState(3)} className='cursor-pointer flex flex-col justify-center items-center'>
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_3_1} alt='icon_3_1' className='' width='100%' height='100%'/>
                                    </div>
                                    {/* <img src={icon_3_2} alt='icon_3_2' className=''/> */}
                                    <h2 className='mt-[24px]'>{t('servise.card3.title')}</h2>
                                </div>
                            </div>
                        }
                        {
                            servicesState == 4 ?
                            <div className='bg-white border-l-[2px] border-b-[2px] border-dashed border-[rgba(34,153,74,1)] flex flex-col justify-center items-center w-full h-full'>
                                <div onClick={()=>setServicesState(0)} className='flex flex-col justify-center items-center text-white'>
                                    {/* <img src={icon_4_1} alt='icon_4_1' className=''/> */}
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_4_2} alt='icon_4_2' className='' width='100%' height='100%'/>
                                    </div>
                                    <h2 className='mt-[24px] text-[rgba(34,153,74,1)]'>{t('servise.card4.title')}</h2>
                                </div>
                            </div>
                                :
                            <div className={`${servicesState != 3 || servicesState !=5 ? 'border-r-[2px] border-dashed border-white' : ''} flex flex-col justify-center items-center w-full h-full`}>
                                <div onClick={()=>setServicesState(4)} className='cursor-pointer flex flex-col justify-center items-center'>
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_4_1} alt='icon_4_1' className='' width='100%' height='100%'/>
                                    </div>
                                    {/* <img src={icon_4_2} alt='icon_4_2' className=''/> */}
                                    <h2 className='mt-[24px]'>{t('servise.card4.title')}</h2>
                                </div>
                            </div>
                        }
                        {
                            servicesState == 5 ?
                            <div className='bg-white border-b-[2px] border-dashed border-[rgba(34,153,74,1)] flex flex-col justify-center items-center w-full h-full'>
                                <div onClick={()=>setServicesState(0)} className='flex flex-col justify-center items-center text-white'>
                                    {/* <img src={icon_5_1} alt='icon_5_1' className=''/> */}
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_5_2} alt='icon_5_2' className='' width='100%' height='100%'/>
                                    </div>
                                    <h2 className='mt-[24px] text-[rgba(34,153,74,1)]'>{t('servise.card5.title')}</h2>
                                </div>
                            </div>
                                :
                            <div className='flex flex-col justify-center items-center w-full h-full'>
                                <div onClick={()=>setServicesState(5)} className='cursor-pointer flex flex-col justify-center items-center'>
                                    <div className='mdMUI:w-[71.24px] mdMUI:h-[71.24px]'>
                                        <img src={icon_5_1} alt='icon_5_1' className='' width='100%' height='100%'/>
                                    </div>
                                    {/* <img src={icon_5_2} alt='icon_5_2' className=''/> */}
                                    <h2 className='mt-[24px]'>{t('servise.card5.title')}</h2>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={`${servicesState >= 1 && servicesState <=5 ? 'bg-white' : ''} 2xl:px-[130px] mdMUI:pb-[168px] pb-[72px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] mx-auto`}>
                    <div className='font-[500] mdMUI:text-[20px] text-[rgba(73,73,73,1)] mdMUI:pt-[64px] mdMUI:leading-[30.68px]'>
                        {
                            servicesState == 1 ? 
                            <>
                                <h3>{t('servise.card1.text1')}</h3>
                                <h3 className='mdMUI:mt-[30.68px]'>{t('servise.card1.text2')}</h3>
                            </>
                            : 
                            servicesState == 2 ?
                            <>
                                <h3>{t('servise.card2.text2')}.</h3>
                                <h3 className='mdMUI:mt-[30.68px]'>{t('servise.card2.text2')}</h3>
                            </>
                            : 
                            servicesState == 3 ?
                            <>
                                <h3>{t('servise.card3.text1')}</h3>
                                <h3 className='mdMUI:mt-[30.68px]'>{t('servise.card3.text2')}</h3>
                            </>
                            : 
                            servicesState == 4 ?
                            <>
                                <h3>{t('servise.card4.text1')}</h3>
                                <h3 className='mdMUI:mt-[30.68px]'>{t('servise.card4.text2')}</h3>
                            </>
                            :
                            servicesState == 5 ?
                            <>
                                <h3>{t('servise.card5.text1')}</h3>
                                <h3 className='mdMUI:mt-[30.68px]'>{t('servise.card5.text2')}</h3>
                            </>
                            : 
                            <></>
                        }
                    </div>
                </div>
            </div>
            <div className='mdMUI:hidden block pb-[120px]'>
                <div className='w-full'>
                    <div 
                    style={{ background:'linear-gradient(7.78deg, #0C642A 22.51%, #2F9F57 96.27%)'}}
                    className='w-full min-h-[480px]'
                    >
                        <div onClick={()=> servicesState == 1 ? setServicesState(0) : setServicesState(1)} className={`${servicesState != 1 ? 'border-b-[2px]' : ''} border-dashed border-white h-[97px] p-[24px] flex items-center cursor-pointer`}>
                            <img src={icon_1_1} alt='icon_1_1' width='48px' height='48px' className='mr-[8px]'/>
                            <h1 className='text-white font-[600] text-[16px] leading-[19.5px] mr-[8px]'>ИТ-консалтинг</h1>
                            {
                                servicesState == 1 ?
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=' rotate-90'/>
                                :
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=''/>
                            }
                        </div>
                        {
                            servicesState == 1 && 
                            <div className='bg-white px-[16px] py-[24px] text-[14px] leading-[21.48px] font-[500]'>
                                <h3>Современный бизнес не может функционировать отдельно от своих информационных активов или без применения информационных технологии. В определённом этапе развития компании возникает необходимость пересмотреть рабочие процессы, оптимизировать, автоматизировать и более шире применять цифровые технологии.</h3>
                                <h3 className='mt-[21.48px]'>Ватан ИКТ предоставляет широкий спектр услуг ИТ-консалтинга - начиная от оптимизации бизнес процессов до оценки стоимости информационных активов.</h3>
                            </div>
                        }




                        
                        <div onClick={()=> servicesState == 2 ? setServicesState(0) : setServicesState(2)} className={`${servicesState != 2 ? 'border-b-[2px]' : ''} border-dashed border-white h-[97px] p-[24px] flex items-center cursor-pointer`}>
                            <img src={icon_2_1} alt='icon_2_1' width='48px' height='48px' className='mr-[8px]'/>
                            <h1 className='text-white font-[600] text-[16px] leading-[19.5px] mr-[8px]'>Дизайн</h1>
                            {
                                servicesState == 2 ?
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=' rotate-90'/>
                                :
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=''/>
                            }
                        </div>
                        {
                            servicesState == 2 && 
                            <div className='bg-white px-[16px] py-[24px] text-[14px] leading-[21.48px] font-[500]'>
                                <h3>Дизайн пользовательского интерфейса стоит на одном ряду по важности с технической функциональностью приложения и вместе определяют степень успешности продукта на рынке. В условиях высокой конкуренции удачный дизайн является одним из залогов удержания пользователей.</h3>
                                <h3 className='mt-[21.48px]'>За годы деятельности Ватан ИКТ накопил большой опыт по созданию интуитивно понятного дизайна пользовательских интерфейсов и предлагает услуги профессионального дизайна пользовательских интерфейсов, как в рамках комплексных проектов, так и по отдельности по запросу заказчиков.</h3>
                            </div>
                        }



                        
                        <div onClick={()=> servicesState == 3 ? setServicesState(0) : setServicesState(3)} className={`${servicesState != 3 ? 'border-b-[2px]' : ''} border-dashed border-white h-[97px] p-[24px] flex items-center cursor-pointer`}>
                            <img src={icon_3_1} alt='icon_3_1' width='48px' height='48px' className='mr-[8px]'/>
                            <h1 className='text-white font-[600] text-[16px] leading-[19.5px] mr-[8px]'>Проектирование</h1>
                            {
                                servicesState == 3 ?
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=' rotate-90'/>
                                :
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=''/>
                            }
                        </div>
                        {
                            servicesState == 3 && 
                            <div className='bg-white px-[16px] py-[24px] text-[14px] leading-[21.48px] font-[500]'>
                                <h3>Важной частью при внедрении любой ИТ-системы, является проектирование - технический анализ, бизнес анализ, составление функциональных требовании, составление архитектуры, утверждение технического задания.</h3>
                                <h3 className='mt-[21.48px]'>Ватан ИКТ имеет большой опыт в проектировании информационных систем разной степени сложности и предлагает на рынке услуги проектирования информационных систем и перехода на цифровизацию услуг организации.</h3>
                            </div>
                        }




                        
                        <div onClick={()=> servicesState == 4 ? setServicesState(0) : setServicesState(4)} className={`${servicesState != 4 ? 'border-b-[2px]' : ''} border-dashed border-white h-[97px] p-[24px] flex items-center cursor-pointer`}>
                            <img src={icon_4_1} alt='icon_4_1' width='48px' height='48px' className='mr-[8px]'/>
                            <h1 className='text-white font-[600] text-[16px] leading-[19.5px] mr-[8px]'>Разработка</h1>
                            {
                                servicesState == 4 ?
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=' rotate-90'/>
                                :
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=''/>
                            }
                        </div>
                        {
                            servicesState == 4 && 
                            <div className='bg-white px-[16px] py-[24px] text-[14px] leading-[21.48px] font-[500]'>
                                <h3>Грамотная и своевременная реализация технического функционала приложения или более комплексных информационных систем в конечном итоге позволяет организациям сократить расходы на их техническое сопровождение и обновления.</h3>
                                <h3 className='mt-[21.48px]'>Ватан ИКТ владея экспертизой разработки цифровых платформ, предлагает заинтересованным заказчикам свои услуги, которая позволит сократить время на разработку и быстро запустить цифровые услуги с помощью разработанного приложения.</h3>
                            </div>
                        }



                        
                        <div onClick={()=> servicesState == 5 ? setServicesState(0) : setServicesState(5)} className='h-[97px] p-[24px] flex items-center cursor-pointer'>
                            <img src={icon_5_1} alt='icon_5_1' width='48px' height='48px' className='mr-[8px]'/>
                            <h1 className='text-white font-[600] text-[16px] leading-[19.5px] mr-[8px]'>Интеграция</h1>
                            {
                                servicesState == 5 ?
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=' rotate-90'/>
                                :
                                <img src={icon_arrow_right} alt='icon_arrow_right' width='16px' height='16px' className=''/>
                            }
                        </div>
                        {
                            servicesState == 5 && 
                            <div className='bg-white px-[16px] py-[24px] text-[14px] leading-[21.48px]  font-[500]'>
                                <h3>В глобальной экосистеме технологии, приложение не может функционировать изолированно от других прикладных систем. Для полноценной и эффективной работы приложения необходима интеграция с внешними или внутренными информационными системами.</h3>
                                <h3 className='mt-[21.48px]'>Практика Ватан ИКТ позволяет компании предоставлять услуги по интеграции приложении с любыми облачными платформами или внутренными информационными системами организации.</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services