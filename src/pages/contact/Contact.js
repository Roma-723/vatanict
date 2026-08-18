import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask'
import { submitFormRequest } from '../../utils/submitForm'
import { resetFormFields, sendEmailNotification, showFormError, showFormSuccess } from '../../utils/formHelpers'

function Contact() {
    const {t} = useTranslation()
    const [submitting, setSubmitting] = useState(false)

    const sendMessage = async (event) => {
        event.preventDefault();
        const message = {
            name: event.target['name'].value,
            phonenumber: event.target['phonenumber'].value,
            email: event.target['email'].value,
            company: event.target['company'].value,
            message: event.target['message'].value,
        }

        setSubmitting(true)
        try {
            await submitFormRequest('contact', message)
            sendEmailNotification(message)
            resetFormFields(event.target)
            showFormSuccess(t)
        } catch {
            showFormError(t)
        } finally {
            setSubmitting(false)
        }
    }

  return (
    <div className='w-full mdMUI:min-h-[100vh] mdMUI:bg-white bg-[rgba(242,242,242,1)]'>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content="+992 44 640 0023 · vatanict.info@gmail.com · Таджикистан, г. Душанбе, улица Мирзо Турсунзода 27А" />
        </Helmet>
        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto mdMUI:pt-[241px] pt-[36px] mdMUI:pb-[159px] pb-[120px]'>
            <Grid container>
                <Grid item lg='6' md='6' sm='12' xs='12'>
                    <div className='text-[rgba(73,73,73,1)] pr-5 mdMUI:pb-0 pb-[44px]'>
                    <h1 className='font-[600] mdMUI:text-[48px] text-[30px] mdMUI:leading-[58.51px] leading-[36.57px] mdMUI:pb-[54px] pb-[36px] mdMUI:max-w-[320px] max-w-[200px]'>{t('career.card6.title1')} <span className='text-[rgba(34,153,74,1)]'>{t('career.card6.title2')}</span></h1>
                        <p className='mdMUI:text-[24px] text-[16px] font-[400] mdMUI:leading-[29.26px] leading-[19.5px] mdMUI:max-w-[372px] max-w-[308px]'>{t('contact.address1')} {t('contact.address2')}</p>
                        <p className='mdMUI:text-[24px] text-[16px] font-[400] mdMUI:leading-[29.26px] leading-[19.5px] mdMUI:my-[18px] my-[12px]'>+992 44 640 0023</p>
                        <p className='mdMUI:text-[24px] text-[16px] font-[400] mdMUI:leading-[29.26px] leading-[19.5px]'>vatanict.info@gmail.com</p>
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
                                <input {...inputProps} required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' />
                              )}
                            </InputMask>
                            <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='email' placeholder={t('contact.email')}/>
                            <input required className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' name='company' placeholder={t('contact.company')}/>
                            <textarea required rows='8' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' name='message' placeholder={t('contact.message')}/>
                            <button 
                            type='submit'
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[20px] text-[18px] mdMUI:leading-[24.38px] leading-[21.94px]'>{submitting ? '...' : t('contact.send')}</button>
                        </form>
                    </div>
                </Grid>
            </Grid>

        </div>
    </div>
  )
}

export default Contact