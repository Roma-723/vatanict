import { Grid } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image_404 from '../../images/Layer_2.png'
import image_404_mobile from '../../images/404 2.png'
import { setOrderService } from '../../Redux/reducers/GlobalState'

function Page404() {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div className='h-[100vh] min_height_404 mdMUI:max-h-[1066px] max-h-[900px] mdMUI:mb-0 mb-[-85px]'>
        <div className='2xl:pl-[100px] max-[1370px]:pl-[6%] max-[1200px]:pl-[4%] max-[1080px]:pl-[16px] max-[1150px]:pl-[3%] pl-[9.17%] ml-auto'>
            <div className=' w-full'>
                <Grid container>
                    <Grid item lg='4' md='4' sm='12' xs='12'>
                        <div className=' mdMUI:pt-[148px] pt-[54px] mdMUI:pb-0 pb-[85px] min_height_404 mdMUI:max-h-[1066px] max-h-[900px] w-full h-full flex flex-col font-[700] mdMUI:leading-[107.27px] leading-[39.01px] mdMUI:text-[88px] text-[32px] text-[rgba(73,73,73,1)]'>
                            <div className=''>
                                <h1>404</h1>
                                <h1>{t('error404.error')}</h1>
                                <p className='font-[400] mdMUI:text-[36px] text-[16px] mdMUI:leading-[43.88px] leading-[19.5px] mdMUI:mt-[24px] mt-[11px]'>{t('error404.text1')}</p>
                            </div>
                            <div className='button_404 mdMUI:mt-[112px] mt-[54px] z-10'>
                              <div className='button_container rounded-[144px]'>
                                <div className='button_div'>
                                  <button onClick={()=>navigate('/')} className='uppercase py-[37px] px-[73px] rounded-[144px] mdMUI:text-[20px] text-[14px] font-[600] mdMUI:leading-[24.38px] leading-[17.07px] text-[white] buttonMainPage'>
                                    {t('error404.text2')}
                                  </button>
                                </div>
                              </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg='8' md='8' sm='12' xs='12'>
                        <div className='w-full flex justify-end margin_404 overflow-x-hidden'>
                            <div className=' w-full mdMUI:pt-[130px] pt-0 mdMUI:pb-0 pb-[85px] h-[100vh] min_height_404 mdMUI:max-h-[1066px] max-h-[900px] max-w-[1550px] z-0 '>
                                <img src={image_404} className='w-full h-full mdMUI:block hidden ml-[80px]'/>
                                <img src={image_404_mobile} className='w-full h-full mdMUI:hidden block'/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default Page404