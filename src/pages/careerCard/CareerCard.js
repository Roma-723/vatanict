import { Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import icon_location from '../../images/u_location-point - Copy (2).png'
import { setApplyModel } from '../../Redux/reducers/GlobalState'

function CareerCard() {
    const {id} = useParams()
    const dispatch = useDispatch()
  return (
    <div className='w-full 2xl:min-h-[80.8vh] bg-[rgba(242,242,242,1)]'>
        <div className='mdMUI:bg-white'>
            <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto mdMUI:pt-[157px] pt-[24px]'>
                <Grid container>
                    <Grid item lg='7' md='7' sm='12' xs='12'>
                        <div>
                            <div className='mdMUI:block hidden text-[rgba(123,123,123,1)] font-[500] text-[22px] leading-[26.82px] mb-[33px]'>
                                <Link to='/career'>Карьера / </Link>
                                <Link>Android-разработчик</Link>
                            </div>
                            <div className='mdMUI:border-b-[3px] border-[rgba(34,153,74,1)]'>
                                <h1 className='font-[600] mdMUI:text-[40px] text-[18px] mdMUI:leading-[107.76px] leading-[48.49px] text-[rgba(73,73,73,1)]'>Android-разработчик</h1>
                                <div className='flex items-center mdMUI:mb-[15px] mdMUI:mt-[-25px]'>
                                    <img src={icon_location} className='w-[24px] h-[24px] mr-[8px]'/>
                                    <h4 className='font-[500] mdMUI:text-[20px] text-[14px] mdMUI:leading-[53.88px] leading-[37.72px] text-[rgba(139,139,139,1)]'>Душанбе</h4>
                                </div>
                            </div>
                            <div className=''>
                                <p className='font-[400] mdMUI:text-[16px] leading-[19.5px] mdMUI:mt-[29px] mt-[22px] mdMUI:mb-[74px] mb-[24px] textLimit2 text-[rgba(73,73,73,1)]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg='5' md='5' sm='12' xs='12'>
                        <div className='flex mdMUI:justify-end career_card_button '>
                            <div>
                                <button onClick={()=>dispatch(setApplyModel(true))} className='mdMUI:py-[26px] py-[16px] mdMUI:top-[236px] mt-0      mdMUI:px-[56px] px-[30px] rounded-[54px] font-[600] mdMUI:text-[20px] text-[14px] mdMUI:leading-[24.38px] leading-[17.07px] text-[white] button_bg mdMUI:sticky'>ПОДАТЬ ЗАЯВКУ</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div className=' mdMUI:pt-[55px] pt-[43px]  '>
            <div className='  2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto  '>
                <Grid container>
                    <Grid item lg='7' md='7' sm='12' xs='12'>
                        <div className=''>
                            <h1 className='text-[rgba(73,73,73,1)] mdMUI:text-[30px] text-[20px] mdMUI:leading-[36.57px] leading-[24.38px] font-[600]'>Требования:</h1>
                            <div className='mdMUI:mt-[16px] mt-[12px]'>
                                <ol className='mdMUI:text-[16px] text-[14px] font-[400] mdMUI:leading-[25.74px] leading-[22.53px] w-full'>
                                    <li className='list-decimal ml-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li className='list-decimal ml-5'> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </li>
                                    <li className='list-decimal ml-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li className='list-decimal ml-5'> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  </li>
                                </ol>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg='7' md='7' sm='12' xs='12'>
                        <div className=''>
                            <h1 className='text-[rgba(73,73,73,1)] mdMUI:text-[30px] text-[20px] mdMUI:leading-[36.57px] leading-[24.38px] font-[600] mdMUI:mt-[72px] mt-[24px]'>Обязанности:</h1>
                            <div className='mt-[16px]'>
                                <ol className='mdMUI:text-[16px] text-[14px] font-[400] mdMUI:leading-[25.74px] leading-[22.53px] w-full'>
                                    <li className='list-decimal ml-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li className='list-decimal ml-5'> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </li>
                                    <li className='list-decimal ml-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li className='list-decimal ml-5'> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  </li>
                                </ol>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg='7' md='7' sm='12' xs='12'>
                        <div className=''>
                            <h1 className='text-[rgba(73,73,73,1)] mdMUI:text-[30px] text-[20px] mdMUI:leading-[36.57px] leading-[24.38px] font-[600] mdMUI:mt-[72px] mt-[24px]'>Мы предлагаем:</h1>
                            <div className='mt-[16px]'>
                                <ol className='mdMUI:text-[16px] text-[14px] font-[400] mdMUI:leading-[25.74px] leading-[22.53px] w-full'>
                                    <li className='list-decimal ml-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li className='list-decimal ml-5'> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </li>
                                    <li className='list-decimal ml-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                                    <li className='list-decimal ml-5'> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  </li>
                                </ol>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <button onClick={()=>dispatch(setApplyModel(true))} className='mdMUI:py-[26px] py-[16px] mdMUI:top-[236px] mt-[36px] mdMUI:px-[56px] px-[30px] rounded-[54px] font-[600] mdMUI:text-[20px] text-[14px] mdMUI:leading-[24.38px] leading-[17.07px] text-[white] button_bg mdMUI:mb-[150px] mb-[125px]'>ПОДАТЬ ЗАЯВКУ</button>
                {/* <button onClick={()=>dispatch(setApplyModel(true))} className='mdMUI:py-[26px] py-[16px] mdMUI:mt-[72px] mt-[36px] mdMUI:px-[56px] px-[46px] rounded-[54px] font-[600] mdMUI:text-[20px] text-[14px] mdMUI:leading-[24.38px] leading-[17.07px] text-[white] button_bg mdMUI:mb-[150px] mb-[125px]'>ПОДАТЬ ЗАЯВКУ</button> */}
            </div>
        </div>
    </div>
  )
}

export default CareerCard