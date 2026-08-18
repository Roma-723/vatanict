import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import icon_all from '../../images/fi_list (1).png'
import icon_back_end from '../../images/u_server.png'
import icon_front_end from '../../images/u_laptop.png'
import icon_modile from '../../images/u_mobile-android.png'
import icon_internship from '../../images/u_users-alt.png'
import icon_education from '../../images/u_book-open (1).png'
import icon_location from '../../images/u_location-point.png'
import icon_all_white from '../../images/fi_list.png'
import icon_back_end_white from '../../images/u_server (1).png'
import icon_front_end_white from '../../images/u_laptop (1).png'
import icon_modile_white from '../../images/u_mobile-android (1).png'
import icon_internship_white from '../../images/u_users-alt (1).png'
import icon_education_white from '../../images/u_book-open.png'
import { Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import InputMask from 'react-input-mask'

function Career() {
    const navigate = useNavigate()
    const [career_state, setCareerState] = useState(5)
    const {t} = useTranslation()

    const sendMessage = (event) => {
        event.preventDefault();
        const message = {
            name: event.target['name'].value,
            phonenumber: event.target['phonenumber'].value,
            email: event.target['email'].value,
            company: event.target['company'].value,
            message: event.target['message'].value,
        }
        const config = {
            // Host : "smtp.elasticemail.com",
            // Username : "xbox.series.s@yopmail.com",
            // Password : "D0A3F73FDB96C50BD783AFA2BE3C6DE1BEB5",
            // Port: 2525,
            SecureToken: '017304df-145b-4d42-a5db-623255b0eda6',
            To : 'xbox.series.s@yopmail.com',
            From : message.email,
            Subject : `Hello we ${message.company} want sey ${message.message}`,
            Body : `my name ${message.name} and my phone number ${message.phonenumber} ${message.message}`
        }

        if(window.Email){
            window.Email.send(config)
            // .then(()=>console.log('succsess'))
        }
        event.target['name'].value = ''
        event.target['phonenumber'].value = ''
        event.target['email'].value = ''
        event.target['company'].value = ''
        event.target['message'].value = ''
    }

  return (
    <div className='w-full bg-[rgba(242,242,242,1)] 2xl::min-h-[80.8vh] mdMUI:pt-[192px] pt-[36px]'>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content="Мы предоставляем возможность поработать в команде с ведущими разработчиками и пройти стажировку в интересных проектах.." />
        </Helmet>
        <div className=''>
            <div className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[45px] md-[24px]'>
                <h1 className='text-[rgba(73,73,73,1)]'>{t('career.title')}</h1>
            </div>
            <div className='w-full overflow-x-auto mdMUI:mb-[58px] mb-[30px] '>
                <div className={`flex ${t('project.text1') == 'Все' ? 'mdMUI:min-w-[1240px] min-w-[690px] max-w-[1240px]': t('project.text1') == 'All' ? "mdMUI:min-w-[1250px] min-w-[694px] max-w-[1150px]" : 'mdMUI:min-w-[1430px] min-w-[791px] max-w-[1430px]'} mb-[10px] mdMUI:text-[22px] text-[12px] font-[500] mdMUI:leading-[26.82px] leading-[14.63px] mx-auto pl-[16px]`}>
                    {
                        career_state == 1 ? (
                            <button 
                            onClick={()=>setCareerState(career_state)}
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[16px]'>
                                <img src={icon_all_white} alt='icon_all_white' className='mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                {/* Все */}
                                {t('project.text1')}
                            </button>
                        ) : (
                            <div className='button_project'>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]'>
                                <div className=''>
                                    <img src={icon_all_white} alt='icon_all_white' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                {/* Все */}
                                {t('project.text1')}
                            </button>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]'>
                                <div className=''>
                                    <img src={icon_all} alt='icon_all' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                {/* Все */}
                                {t('project.text1')}
                            </button>
                            </div>
                        )
                    }
                    {
                        career_state == 2 ? (
                            <button 
                            onClick={()=>setCareerState(career_state)}
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                <img src={icon_back_end_white} alt='icon_back_end_white' className='mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                Back-end
                            </button>
                        ) : (
                            <div className='button_project'>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_back_end_white} alt='icon_back_end_white' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                Back-end
                            </button>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_back_end} alt='icon_back_end' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                Back-end
                            </button>
                            </div>
                        )
                    }
                    {
                        career_state == 3 ? (
                            <button 
                            onClick={()=>setCareerState(career_state)}
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                <img src={icon_front_end_white} alt='icon_front_end_white' className='mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                Front-end
                            </button>
                        ) : (
                            <div className='button_project'>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_front_end_white} alt='icon_front_end_white' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                Front-end
                            </button>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_front_end} alt='icon_front_end' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                Front-end
                            </button>
                            </div>
                        )
                    }
                    {
                        career_state == 4 ? (
                            <button 
                            onClick={()=>setCareerState(career_state)}
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                <img src={icon_modile_white} alt='icon_modile_white' className='mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                Mobile
                            </button>
                        ) : (
                            <div className='button_project'>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_modile_white} alt='icon_modile_white' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                Mobile
                            </button>
                            <button
                            onClick={()=>setCareerState(career_state)}
                             className='button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_modile} alt='icon_modile' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                Mobile
                            </button>
                            </div>
                        )
                    }
                    {
                        career_state == 5 ? (
                            <button 
                            onClick={()=>setCareerState(5)}
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                <img src={icon_internship_white} alt='icon_internship_white' className='mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                {/* Стажировка */}
                                {t('career.text5')}
                            </button>
                        ) : (
                            <div className='button_project'>
                            <button
                            onClick={()=>setCareerState(5)}
                             className='button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_internship_white} alt='icon_internship_white' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                {/* Стажировка */}
                                {t('career.text5')}
                            </button>
                            <button
                            onClick={()=>setCareerState(5)}
                             className='button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_internship} alt='icon_internship' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                {/* Стажировка */}
                                {t('career.text5')}
                            </button>
                            </div>
                        )
                    }
                    {
                        career_state == 6 ? (
                            <button 
                            onClick={()=>setCareerState(6)}
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                <img src={icon_education_white} alt='icon_education_white' className='mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                {/* Обучение */}
                                {t('career.text6')}
                            </button>
                        ) : (
                            <div className='button_project'>
                            <button
                            onClick={()=>setCareerState(6)}
                             className='button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_education_white} alt='icon_education_white' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                {/* Обучение */}
                                {t('career.text6')}
                            </button>
                            <button
                            onClick={()=>setCareerState(6)}
                             className='button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                <div className=''>
                                    <img src={icon_education} alt='icon_education' className=' mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]' width='16px' height='16px'/>
                                </div>
                                {/* Обучение */}
                                {t('career.text6')}
                            </button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className=''>
                {
                    (career_state == 1) || (career_state == 2) || (career_state == 3) || (career_state == 4) ? (
                        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto    mdMUI:pb-[150px] pb-[120px]'>
                            <Grid container>
                                <Grid item lg='10' md='10' sm='12' xs='12'>
                                    <div onClick={()=>navigate('/career/1')} className='cursor-pointer rounded-[8px] mdMUI:mb-[24px] mb-[8px] w-full border-[0px_4px_6px] border-[rgba(118,118,118,0.25)] min-h-[275px] bg-white mdMUI:px-[49px] px-[24px] mdMUI:py-[18px] py-[16px] text-[rgba(73,73,73,1)]'>
                                        <div className='mdMUI:mb-[18px] mb-[16px] mdMUI:flex items-center'>
                                            <h1 className='font-[600] mdMUI:text-[24px] text-[18px] leading-[48.49px] mdMUI:leading-[64.66px] mr-[20px]'>Android-разработчик</h1>
                                            <div className=' text-[rgba(139,139,139,1)] flex items-center'>
                                                <img src={icon_location} alt='icon_location' width='24px' height='24px' className=' mr-[4px]'/>
                                                <h3 className='mdMUI:text-[20px] text-[14px] mdMUI:leading-[58.88px] leading-[37.72px]'>Душанбе</h3>
                                            </div>
                                        </div>
                                        <h5 className='font-[400] mdMUI:text-[16px] text-[14px] mdMUI:leading-[19.5px] leading-[17.07px] mdMUI:mb-[24px] mb-[16px] mdMUI:hidden block textLimit2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                                        <Link className='decoration-solid decoration underline text-[rgba(34,153,74,1)] font-[500] mdMUI:text-[16px] text-[14px] mdMUI:leading-[21.66px] leading-[18.96px]'>Подробнее</Link>
                                    </div>
                                    <div onClick={()=>navigate('/career/1')} className='cursor-pointer rounded-[8px] mdMUI:mb-[24px] mb-[8px] w-full border-[0px_4px_6px] border-[rgba(118,118,118,0.25)] min-h-[275px] bg-white mdMUI:px-[49px] px-[24px] mdMUI:py-[18px] py-[16px] text-[rgba(73,73,73,1)]'>
                                        <div className='mdMUI:mb-[18px] mb-[16px] mdMUI:flex items-center'>
                                            <h1 className='font-[600] mdMUI:text-[24px] text-[18px] leading-[48.49px] mdMUI:leading-[64.66px] mr-[20px]'>IOS-разработчик</h1>
                                            <div className=' text-[rgba(139,139,139,1)] flex items-center'>
                                                <img src={icon_location} alt='icon_location' width='24px' height='24px' className=' mr-[4px]'/>
                                                <h3 className='mdMUI:text-[20px] text-[14px] mdMUI:leading-[58.88px] leading-[37.72px]'>Душанбе</h3>
                                            </div>
                                        </div>
                                        <h5 className='font-[400] mdMUI:text-[16px] text-[14px] mdMUI:leading-[19.5px] leading-[17.07px] mdMUI:mb-[24px] mb-[16px] mdMUI:hidden block textLimit2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                                        <Link className='decoration-solid decoration underline text-[rgba(34,153,74,1)] font-[500] mdMUI:text-[16px] text-[14px] mdMUI:leading-[21.66px] leading-[18.96px]'>Подробнее</Link>
                                    </div>
                                    <div onClick={()=>navigate('/career/1')} className='cursor-pointer rounded-[8px] mdMUI:mb-[24px] mb-[8px] w-full border-[0px_4px_6px] border-[rgba(118,118,118,0.25)] min-h-[275px] bg-white mdMUI:px-[49px] px-[24px] mdMUI:py-[18px] py-[16px] text-[rgba(73,73,73,1)]'>
                                        <div className='mdMUI:mb-[18px] mb-[16px] mdMUI:flex items-center'>
                                            <h1 className='font-[600] mdMUI:text-[24px] text-[18px] leading-[48.49px] mdMUI:leading-[64.66px] mr-[20px]'>Android-разработчик</h1>
                                            <div className=' text-[rgba(139,139,139,1)] flex items-center'>
                                                <img src={icon_location} alt='icon_location' width='24px' height='24px' className=' mr-[4px]'/>
                                                <h3 className='mdMUI:text-[20px] text-[14px] mdMUI:leading-[58.88px] leading-[37.72px]'>Душанбе</h3>
                                            </div>
                                        </div>
                                        <h5 className='font-[400] mdMUI:text-[16px] text-[14px] mdMUI:leading-[19.5px] leading-[17.07px] mdMUI:mb-[24px] mb-[16px] mdMUI:hidden block textLimit2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                                        <Link className='decoration-solid decoration underline text-[rgba(34,153,74,1)] font-[500] mdMUI:text-[16px] text-[14px] mdMUI:leading-[21.66px] leading-[18.96px]'>Подробнее</Link>
                                    </div>
                                        <div onClick={()=>navigate('/career/1')} className='cursor-pointer rounded-[8px] w-full border-[0px_4px_6px] border-[rgba(118,118,118,0.25)] min-h-[275px] bg-white mdMUI:py-[18px] px-[24px] mdMUI:text-[rgb py-[16px]a(73,73,73,1)]'>
                                        <div className='mdMUI:mb-[18px] mb-[16px] mdMUI:flex items-center'>
                                            <h1 className='font-[600] mdMUI:text-[24px] text-[18px] leading-[48.49px] mdMUI:leading-[64.66px] mr-[20px]'>IOS-разработчик</h1>
                                            <div className=' text-[rgba(139,139,139,1)] flex items-center'>
                                                <img src={icon_location} alt='icon_location' width='24px' height='24px' className=' mr-[4px]'/>
                                                <h3 className='mdMUI:text-[20px] text-[14px] mdMUI:leading-[58.88px] leading-[37.72px]'>Душанбе</h3>
                                            </div>
                                        </div>
                                        <h5 className='font-[400] mdMUI:text-[16px] text-[14px] mdMUI:leading-[19.5px] leading-[17.07px] mdMUI:mb-[24px] mb-[16px] mdMUI:hidden block textLimit2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
                                        <Link className='decoration-solid decoration underline text-[rgba(34,153,74,1)] font-[500] mdMUI:text-[16px] text-[14px] mdMUI:leading-[21.66px] leading-[18.96px]'>Подробнее</Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ) : career_state == 2 ? (
                        null
                    ) : career_state == 3 ? (
                        null
                    ) : career_state == 4 ? (
                        null
                    ) : career_state == 5 ? (
                        <div className='mdMUI:bg-white'>
                            <div className='w-full mdMUI:pt-[75px] pt-[0px] mdMUI:pb-[150px] pb-[120px]    2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
                                <Grid container>
                                    <Grid item lg='6' md='6' sm='12' xs='12'>
                                        <div className='text-[rgba(73,73,73,1)] pr-5 mdMUI:pb-0 pb-[24px]'>
                                            <h1 className='font-[600] mdMUI:text-[48px] text-[30px] mdMUI:leading-[58.51px] leading-[36.57px] mdMUI:pb-[54px] pb-[36px] mdMUI:max-w-[320px] max-w-[200px]'>{t('career.card5.title1')} <span className='text-[rgba(34,153,74,1)]'>{t('career.card5.title2')}</span></h1>
                                            <p className='mdMUI:text-[16px] text-[12px] font-[400] mdMUI:leading-[23.66px] leading-[17.75px] max-w-[472px]'>{t('career.card5.text')}.</p>
                                        </div>
                                    </Grid>
                                    <Grid item lg='6' md='6' sm='12' xs='12'>
                                        <div className='lgMUI:mr-[18%] mdMUI:mr-[25%]'>
                                            <form onSubmit={sendMessage}>
                                                <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='name' placeholder={t('contact.name')}/>
                                                <InputMask
                                                  name="phonenumber"
                                                  mask={"99 999 9999"}
                                                  placeholder={t('contact.phoneNumber')}
                                                >
                                                  {(inputProps) => (
                                                    <input required {...inputProps} className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]'/>
                                                  )}
                                                </InputMask>
                                                <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='email' placeholder={t('contact.email')}/>
                                                <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='company' placeholder={t('contact.company')}/>
                                                <textarea rows='8' required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' name='message' placeholder={t('contact.message')}/>
                                                <button 
                                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                                className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[20px] text-[18px] mdMUI:leading-[24.38px] leading-[21.94px]'>{t('contact.send')}</button>
                                            </form>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    ) : (
                        <div className='mdMUI:bg-white'>
                            <div className='w-full mdMUI:pt-[75px] pt-[0px] mdMUI:pb-[150px] pb-[120px]    2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
                                <Grid container>
                                    <Grid item lg='6' md='6' sm='12' xs='12'>
                                        <div className='text-[rgba(73,73,73,1)] pr-5 mdMUI:pb-0 pb-[24px]'>
                                            <h1 className='font-[600] mdMUI:text-[48px] text-[30px] mdMUI:leading-[58.51px] leading-[36.57px] mdMUI:pb-[54px] pb-[36px] mdMUI:max-w-[320px] max-w-[200px]'>{t('career.card6.title1')} <span className='text-[rgba(34,153,74,1)]'>{t('career.card6.title2')}</span></h1>
                                            <p className='mdMUI:text-[16px] text-[12px] font-[400] mdMUI:leading-[23.66px] leading-[17.75px] max-w-[472px]'>{t('career.card6.text')}</p>
                                        </div>
                                    </Grid>
                                    <Grid item lg='6' md='6' sm='12' xs='12'>
                                        <div className='lgMUI:mr-[18%] mdMUI:mr-[25%]'>
                                            <form  onSubmit={sendMessage}>
                                                <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='name' placeholder={t('contact.name')}/>
                                                <InputMask
                                                  name="phonenumber"
                                                  mask={"99 999 9999"}
                                                  placeholder={t('contact.phoneNumber')}
                                                >
                                                  {(inputProps) => (
                                                    <input required {...inputProps} className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]'/>
                                                  )}
                                                </InputMask>
                                                <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='email' placeholder={t('contact.email')}/>
                                                <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='company' placeholder={t('contact.company')}/>
                                                <textarea rows='8' required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' name='message' placeholder={t('contact.message')}/>
                                                <button 
                                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                                className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[20px] text-[18px] mdMUI:leading-[24.38px] leading-[21.94px]'>{t('contact.send')}</button>
                                            </form>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    </div>
  )
}

export default Career