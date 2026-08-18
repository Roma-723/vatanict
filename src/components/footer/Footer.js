import { Grid } from '@mui/material'
import { QRCode } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import phone_white from '../../images/Vector_phone.png'
import document_сertificate_vatan from '../../images/document_footer/1-Шаходатнома Ватан.PDF'
import document_inn from '../../images/document_footer/3-ИНН Ватан.PDF'
import icon_facebook from '../../images/facebook.png'
import email_white from '../../images/fi_mail.png'
import icon_instagram from '../../images/instagram.png'
import icon_linkedin from '../../images/linkedin.png'
import logo_light from '../../images/logo_light 1.png'
import map_white from '../../images/u_location-point (1).png'
import './Footer.css'

const WEBSITE_URL = 'https://maps.app.goo.gl/7TknopfX4vTGF1Po9'

function Footer() {
    const {t} = useTranslation()
  return (
    <div>
        {/* <footer className='w-full mdMUI:block hidden footerStyle text-[rgba(246,246,246,1)]'>
            <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto w-full pt-[80px] font-[400]'>
                <div className='w-full flex lgMUI:pb-[53px] justify-between'>
                    <div className='text-[16px] leading-[43px]'>
                        <div className='mb-[77px]'>
                            <img src={logo_light} className='max-w-[440px]'/>
                        </div>
                        <div className='flex mdMUI:flex-row flex-wrap justify-between ml-[14px]'>
                            <div className='mr-[52px]'>
                                <a href={document_inn} target='_blank' className='decoration-solid decoration underline block '>{t('layout.layoutFooter.text1')}</a>
                                <a href={document_сertificate_vatan} target='_blank' className='decoration-solid decoration underline block'>{t('layout.layoutFooter.text2')}</a>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-end text-end text-[20px] leading-[23px]'>
                        <div>
                            <Link className='block mb-[20px] block'>vatanict.info@gmail.com</Link>
                            <Link className='block mb-[45px]'>+992 44 640 0023</Link>
                            <div className='w-full mb-[25px] flex justify-end'>
                                <div>
                                    <img src={qr_code}/>
                                </div>
                            </div>
                            <h5 className='w-[310px]'>Таджикистан, г. Душанбе</h5>
                            <h5 className='w-[310px]'>улица Мирзо Турсунзода 27А</h5>
                            <div className='lgMUI:hidden w-full flex mt-[70px] justify-end items-center pb-[63px]'>
                                <div className='flex'>
                                    <a target='_blank' href='https://www.linkedin.com/company/79980009/admin/' className='mr-[8px]'><img src={icon_linkedin}/></a>
                                    <a target='_blank' href='https://www.facebook.com/vatanict.tj' className='mx-[8px]'><img src={icon_facebook}/></a>
                                    <a target='_blank' href='https://www.instagram.com/vatanict.tj/' className='mx-[8px]'><img src={icon_instagram}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lgMUI:flex hidden justify-end items-center pb-[63px]'>
                    <div className='flex'>
                        <a target='_blank' href='https://www.linkedin.com/company/79980009/admin/' className='mr-[8px]'><img src={icon_linkedin}/></a>
                        <a target='_blank' href='https://www.facebook.com/vatanict.tj' className='mx-[8px]'><img src={icon_facebook}/></a>
                        <a target='_blank' href='https://www.instagram.com/vatanict.tj/' className='mx-[8px]'><img src={icon_instagram}/></a>
                    </div>
                </div>
            </div>
        </footer> */}
        <footer className='footer_style min-h-[340px] w-full smMUI:block hidden'>
            <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] pt-[77px] mx-auto w-full h-full'>
                <div className='w-full h-full text-[rgba(246,246,246,1)] w-full h-full'>
                    <Grid container spacing={{lg:0,md:0,sm:5, xs:5}}>
                        <Grid item lg='5' md='5' sm='8' xs='12'>
                            <div className='w-full h-full flex flex-col justify-between  mdMUI:pb-[68px]'>
                                <div className='flex items-center'>
                                    <img src={phone_white} className='mr-[16px]' width='36px' height='36px'/>
                                    <h3 className='font-[500] text-[20px] leading-[24.38px]'>+992 44 640 0023</h3>
                                </div>
                                <div className='flex items-center mt-[32px]'>
                                    <img src={email_white} className='mr-[16px]' width='36px' height='36px'/>
                                    <h3 className='font-[500] text-[20px] leading-[24.38px]'>vatanict.info@gmail.com</h3>
                                </div>
                                <div className='flex items-center mt-[32px]'>
                                    <img src={map_white} className='mr-[16px]' width='36px' height='36px'/>
                                    <div className='flex flex-col justify-center '>
                                        <h3 className='font-[500] text-[20px] leading-[24.38px]'>{t('contact.address1')}</h3>
                                        <h3 className='font-[500] text-[20px] leading-[24.38px]'>{t('contact.address2')}</h3>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg='3' md='2' sm='4' xs='12'  sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                            <div className='flex justify-end w-full h-full'>
                                <div className=''>
                                    <QRCode value={WEBSITE_URL} size={135} bordered={false} color='#000' bgColor='transparent'/>
                                    <div className='flex justify-between mt-[24px]'>
                                        <a target='_blank' href='https://www.linkedin.com/company/79980009/admin/' className=''><img width='37px' height='36px'  src={icon_linkedin}/></a>
                                        <a target='_blank' href='https://www.facebook.com/vatanict.tj' className=''><img width='37px' height='36px'  src={icon_facebook}/></a>
                                        <a target='_blank' href='https://www.instagram.com/vatanict.tj/' className=''><img width='37px' height='36px'  src={icon_instagram}/></a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg='4' md='5' sm='8' xs='12'>
                            <div className='text-[20px] leading-[40.98px] w-full h-full mdMUI:pb-0 pb-[68px]'>
                                <a href={document_inn} target='_blank' className='decoration-solid decoration underline block '>{t('layout.layoutFooter.text1')}</a>
                                <a href={document_сertificate_vatan} target='_blank' className='decoration-solid decoration underline block'>{t('layout.layoutFooter.text2')}</a>
                            </div>
                        </Grid>
                        <Grid item lg='3' md='2' sm='4' xs='12'  sx={{display:{lg:'block',md:'block',sm:'none',xs:'none'}}}>
                            <div className='flex justify-end w-full h-full pb-[68px]'>
                                <div className=''>
                                    <QRCode value={WEBSITE_URL} size={135} bordered={false} color='#000' bgColor='transparent'/>
                                    <div className='flex justify-between mt-[24px]'>
                                        <a target='_blank' href='https://www.linkedin.com/company/79980009/admin/' className=''><img width='37px' height='36px'  src={icon_linkedin}/></a>
                                        <a target='_blank' href='https://www.facebook.com/vatanict.tj' className=''><img width='37px' height='36px'  src={icon_facebook}/></a>
                                        <a target='_blank' href='https://www.instagram.com/vatanict.tj/' className=''><img width='37px' height='36px'  src={icon_instagram}/></a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </footer>
        {/* mobile */}
        <footer className='w-full smMUI:hidden block min-[523px] footerStyle text-[rgba(246,246,246,1)]'>
            <div className='px-[24px]'>
                <div className='pt-[29px] mb-[28px]'>
                    <img src={logo_light} className='max-w-[251px]'/>
                </div>
                {/* <div className='text-[16px] leading-[19.5px] mb-[56px]'>
                    <div>
                        <Link className='font-[500] mb-[16px] block'>vatanict.info@gmail.com</Link>
                        <h5 className='font-[500] mb-[16px]'>+992 44 640 0023</h5>
                        <h5 className='font-[400]'>Таджикистан, г. Душанбе</h5>
                        <h5 className='font-[400]'>улица Мирзо Турсунзода 27А</h5>
                    </div>
                </div> */}
                <div className='w-full h-full flex flex-col justify-between  mdMUI:pb-[68px] text-[16px] font-[500]'>
                    <div className='flex items-center'>
                        <img src={phone_white} className='mr-[8px] w-[16px] h-[16px]'/>
                        <h3 className='leading-[19.5px]'>+992 44 640 0023</h3>
                    </div>
                    <div className='flex items-center mt-[16px]'>
                        <img src={email_white} className='mr-[8px] w-[16px] h-[16px]'/>
                        <h3 className='leading-[19.5px]'>vatanict.info@gmail.com</h3>
                    </div>
                    <div className='flex mt-[16px]'>
                        <img src={map_white} className='mr-[8px] w-[16px] h-[16px]'/>
                        <div className='flex flex-col justify-center '>
                            <h3 className='leading-[19.5px]'>{t('contact.address1')}</h3>
                            <h3 className='leading-[19.5px]'>{t('contact.address2')}</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mb-[20px] mt-[42px]'>
                    <div className='flex flex-wrap max-w-[160px]'>
                        <a target='_blank' href='https://www.linkedin.com/company/79980009/admin/' className='mr-[16px] '><img width='37px' height='36px'  src={icon_linkedin}/></a>
                        <a target='_blank' href='https://www.facebook.com/vatanict.tj' className='mr-[16px] '><img width='37px' height='36px'  src={icon_facebook}/></a>
                        <a target='_blank' href='https://www.instagram.com/vatanict.tj/' className='mr-[16px] '><img width='37px' height='36px'  src={icon_instagram}/></a>
                    </div>
                    <div>
                        <QRCode value={WEBSITE_URL} size={94} bordered={false} color='#000' bgColor='transparent'/>
                    </div>
                </div>
                <div className='font-[400px] text-[12px] leading-[12.83px] pb-[69px] flex flex-wrap'>
                    <div className='smMUI:mr-[52px]'>
                        <a href={document_inn} target='_blank' className='decoration-solid mb-[20px] decoration underline block '>{t('layout.layoutFooter.text1')}</a>
                        <a href={document_сertificate_vatan} target='_blank' className='decoration-solid mb-[20px] decoration underline block'>{t('layout.layoutFooter.text2')}</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer