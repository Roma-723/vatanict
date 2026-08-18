import { Image } from '@mui/icons-material'
import { Grid, MenuItem } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

function AdminCareer() {
    const {t} = useTranslation()
    const [languageInput, setLanguageInput] = useState(1)
    const [professionState, setProfessionState] = useState(1)

    const postNewCareer = (e) => {
        e.preventDefault()
        const body = {
            language_tj:{
                profession: e.target['profession_tj'].value,
                city: e.target['city_tj'].value,
                description: e.target['description_tj'].value,
                requiments_1: e.target['requirements_1_tj'].value,
                requiments_2: e.target['requirements_2_tj'].value,
                requiments_3: e.target['requirements_3_tj'].value,
                requiments_4: e.target['requirements_4_tj'].value,
                responsibilities_1: e.target['responsibilities_1_tj'].value,
                responsibilities_2: e.target['responsibilities_2_tj'].value,
                responsibilities_3: e.target['responsibilities_3_tj'].value,
                responsibilities_4: e.target['responsibilities_4_tj'].value,
                we_offer_1: e.target['we_offer_1_tj'].value,
                we_offer_2: e.target['we_offer_2_tj'].value,
                we_offer_3: e.target['we_offer_3_tj'].value,
                we_offer_4: e.target['we_offer_4_tj'].value,
            },
            language_ru:{
                profession: e.target['profession_ru'].value,
                city: e.target['city_ru'].value,
                description: e.target['description_ru'].value,
                requiments_1: e.target['requirements_1_ru'].value,
                requiments_2: e.target['requirements_2_ru'].value,
                requiments_3: e.target['requirements_3_ru'].value,
                requiments_4: e.target['requirements_4_ru'].value,
                responsibilities_1: e.target['responsibilities_1_ru'].value,
                responsibilities_2: e.target['responsibilities_2_ru'].value,
                responsibilities_3: e.target['responsibilities_3_ru'].value,
                responsibilities_4: e.target['responsibilities_4_ru'].value,
                we_offer_1: e.target['we_offer_1_ru'].value,
                we_offer_2: e.target['we_offer_2_ru'].value,
                we_offer_3: e.target['we_offer_3_ru'].value,
                we_offer_4: e.target['we_offer_4_ru'].value,
            },
            language_en:{
                profession: e.target['profession_en'].value,
                city: e.target['city_en'].value,
                description: e.target['description_en'].value,
                requiments_1: e.target['requirements_1_en'].value,
                requiments_2: e.target['requirements_2_en'].value,
                requiments_3: e.target['requirements_3_en'].value,
                requiments_4: e.target['requirements_4_en'].value,
                responsibilities_1: e.target['responsibilities_1_en'].value,
                responsibilities_2: e.target['responsibilities_2_en'].value,
                responsibilities_3: e.target['responsibilities_3_en'].value,
                responsibilities_4: e.target['responsibilities_4_en'].value,
                we_offer_1: e.target['we_offer_1_en'].value,
                we_offer_2: e.target['we_offer_2_en'].value,
                we_offer_3: e.target['we_offer_3_en'].value,
                we_offer_4: e.target['we_offer_4_en'].value,
            }
        }
        console.log(body)
    }


  return (
    <div className='mdMUI:bg-white mdMUI:pt-10 pt-5 mdMUI:pb-20 pb-10'>
        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
            <div className='w-full text-center mdMUI:text-[40px] text-[20px] mdMUI:leading-[58.5px] font-[600] mdMUI:mb-[28px] mb-[8px]'>
                <h1 className='text-[rgba(73,73,73,1)]'>{t('career.title')}</h1>
            </div>
            <div className='w-full overflow-x-auto'>
                <form onSubmit={postNewCareer}>
                    <div className={`flex flex-row mdMUI:max-w-[700px] ${t('project.text1') == 'Все' ? 'min-w-[300px]': t('project.text1') == 'All' ? "min-w-[300px]" : 'min-w-[300px]'} mb-[20px] mdMUI:text-[22px] text-[12px] font-[500] mdMUI:leading-[26.82px] leading-[14.63px] my-5`}>
                        {
                            languageInput == 1 ? (
                                <button 
                                onClick={()=>setLanguageInput(1)}
                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                className='border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[16px]'>
                                    TJ
                                </button>
                            ) : (
                                <div className='button_project'>
                                <button
                                onClick={()=>setLanguageInput(1)}
                                 className='button_project_image border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]'>
                                    TJ
                                </button>
                                <button
                                onClick={()=>setLanguageInput(1)}
                                 className='button_project_image2 mdMUI:mt-[-59.81px] mt-[-40px] border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]'>
                                    TJ
                                </button>
                                </div>
                            )
                        }
                        {
                            languageInput == 2 ? (
                                <button 
                                onClick={()=>setLanguageInput(2)}
                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                className='border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                    RU
                                </button>
                            ) : (
                                <div className='button_project'>
                                <button
                                onClick={()=>setLanguageInput(2)}
                                 className='button_project_image border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    RU
                                </button>
                                <button
                                onClick={()=>setLanguageInput(2)}
                                 className='button_project_image2 mdMUI:mt-[-59.81px] mt-[-40px] border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    RU
                                </button>
                                </div>
                            )
                        }
                        {
                            languageInput == 3 ? (
                                <button 
                                onClick={()=>setLanguageInput(3)}
                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                className='border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                    EN
                                </button>
                            ) : (
                                <div className='button_project'>
                                <button
                                onClick={()=>setLanguageInput(3)}
                                 className='button_project_image border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    EN
                                </button>
                                <button
                                onClick={()=>setLanguageInput(3)}
                                 className='button_project_image2 mdMUI:mt-[-59.81px] mt-[-40px] border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    EN
                                </button>
                                </div>
                            )
                        }
                    </div>
                    <Grid container spacing={3}>
                        <Grid item lg='12' md='12' sm='12' xs='12'>
                            <div>
                                <Grid container spacing={0}>
                                    <Grid item lg='12' md='12' sm='12' xs='12' sx={languageInput != 1 ? {display:'none'} : {}}>
                                        <div className=''>
                                            <Grid container columnSpacing={3} >
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Тип профессии</label>
                                                <select name='profession_tj' value={professionState} onChange={(e)=>setProfessionState(e.target.value)} className='w-full bg-white p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]'>
                                                    <option value='1'>Back-end-разработчик</option>
                                                    <option value='2'>Front-end-разработчик</option>
                                                    <option value='3'>Android-разработчик</option>
                                                    <option value='4'>IOS-разработчик</option>
                                                </select>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Город</label>
                                                <input name='city_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='city_tj'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Описание</label>
                                                {/* <input name='description_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_tj'/> */}
                                                <textarea name='description_tj' rows='8' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' placeholder='description_tj'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Требования:</label>
                                                <input name='requirements_1_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_1_tj'/>
                                                <input name='requirements_2_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_2_tj'/>
                                                <input name='requirements_3_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_3_tj'/>
                                                <input name='requirements_4_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_4_tj'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Обязанности:</label>
                                                <input name='responsibilities_1_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_1_tj'/>
                                                <input name='responsibilities_2_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_2_tj'/>
                                                <input name='responsibilities_3_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_3_tj'/>
                                                <input name='responsibilities_4_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_4_tj'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Мы предлагаем:</label>
                                                <input name='we_offer_1_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_1_tj'/>
                                                <input name='we_offer_2_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_2_tj'/>
                                                <input name='we_offer_3_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_3_tj'/>
                                                <input name='we_offer_4_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_4_tj'/>
                                              </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item lg='12' md='12' sm='12' xs='12' sx={languageInput != 2 ? {display:'none'} : {}}>
                                        <div className=''>
                                            <Grid container columnSpacing={3} >
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Тип профессии</label>
                                                <select name='profession_ru' value={professionState} onChange={(e)=>setProfessionState(e.target.value)} className='w-full bg-white p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]'>
                                                    <option value='1'>Back-end-разработчик</option>
                                                    <option value='2'>Front-end-разработчик</option>
                                                    <option value='3'>Android-разработчик</option>
                                                    <option value='4'>IOS-разработчик</option>
                                                </select>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Город</label>
                                                <input name='city_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='city_ru'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Описание</label>
                                                {/* <input name='description_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_ru'/> */}
                                                <textarea name='description_ru' rows='8' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' placeholder='description_ru'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Требования:</label>
                                                <input name='requirements_1_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_1_ru'/>
                                                <input name='requirements_2_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_2_ru'/>
                                                <input name='requirements_3_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_3_ru'/>
                                                <input name='requirements_4_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_4_ru'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Обязанности:</label>
                                                <input name='responsibilities_1_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_1_ru'/>
                                                <input name='responsibilities_2_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_2_ru'/>
                                                <input name='responsibilities_3_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_3_ru'/>
                                                <input name='responsibilities_4_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_4_ru'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Мы предлагаем:</label>
                                                <input name='we_offer_1_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_1_ru'/>
                                                <input name='we_offer_2_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_2_ru'/>
                                                <input name='we_offer_3_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_3_ru'/>
                                                <input name='we_offer_4_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_4_ru'/>
                                              </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item lg='12' md='12' sm='12' xs='12' sx={languageInput != 3 ? {display:'none'} : {}}>
                                        <div className=''>
                                            <Grid container columnSpacing={3} >
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Тип профессии</label>
                                                <select name='profession_en' value={professionState} onChange={(e)=>setProfessionState(e.target.value)} className='w-full bg-white p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]'>
                                                    <option value='1'>Back-end-разработчик</option>
                                                    <option value='2'>Front-end-разработчик</option>
                                                    <option value='3'>Android-разработчик</option>
                                                    <option value='4'>IOS-разработчик</option>
                                                </select>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Город</label>
                                                <input name='city_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='city_en'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Описание</label>
                                                {/* <input name='description_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_en'/> */}
                                                <textarea name='description_en' rows='8' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' placeholder='description_en'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Требования:</label>
                                                <input name='requirements_1_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_1_en'/>
                                                <input name='requirements_2_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_2_en'/>
                                                <input name='requirements_3_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_3_en'/>
                                                <input name='requirements_4_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='requirements_4_en'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Обязанности:</label>
                                                <input name='responsibilities_1_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_1_en'/>
                                                <input name='responsibilities_2_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_2_en'/>
                                                <input name='responsibilities_3_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_3_en'/>
                                                <input name='responsibilities_4_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='responsibilities_4_en'/>
                                              </Grid>
                                              <Grid item lg='6' md='6' sm='12' xs='12'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Мы предлагаем:</label>
                                                <input name='we_offer_1_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_1_en'/>
                                                <input name='we_offer_2_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_2_en'/>
                                                <input name='we_offer_3_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_3_en'/>
                                                <input name='we_offer_4_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='we_offer_4_en'/>
                                              </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg='6' md='6' sm='12' xs='12'>
                            <button 
                            type='submit'
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[20px] text-[18px] mdMUI:leading-[24.38px] leading-[21.94px]'>
                                ОТПРАВИТЬ
                            </button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminCareer