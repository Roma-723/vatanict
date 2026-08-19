import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

function AboutCompanySection4() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    company: '',
    message: ''
  })

  // Холатҳои раванди фиристодан ва муваффақият
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Симулятсияи фиристодан ба сервер (2 сония)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Пок кардани форма
      setFormData({
        name: '',
        phonenumber: '',
        email: '',
        company: '',
        message: ''
      })
    }, 2000)
  }

  const handleResetSuccess = () => {
    setIsSuccess(false)
  }

  // Вариантҳои аниматсия
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemFadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  }

  return (
    <div className='w-full mdMUI:min-h-[787px] bg-[#f8f9fa] dark:bg-[#0A0F0D] transition-colors duration-300 overflow-hidden relative'>
      <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto mdMUI:pt-[72px] pt-[40px] pb-[60px]'>
        <Grid container spacing={4} alignItems="center">
          
          {/* Қисми чап: Сарлавҳа ва Матн */}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <motion.div 
              className='pr-5 mdMUI:pb-0 pb-[24px]'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h1 
                variants={itemFadeInUp}
                className='font-[700] mdMUI:text-[48px] text-[30px] max-w-[434px] mdMUI:leading-[58px] leading-[38px] mdMUI:pb-[40px] pb-[24px] tracking-tight text-gray-900 dark:text-gray-100'
              >
                {t('aboutCompany.aboutCompanySection4.title1')}{' '}
                <span className='text-[#22994A] relative inline-block'>
                  {t('aboutCompany.aboutCompanySection4.title2')}
                </span>
              </motion.h1>

              <motion.p 
                variants={itemFadeInUp}
                className='mdMUI:text-[16px] text-[14px] font-[400] mdMUI:leading-[26px] leading-[22px] max-w-[473px] text-gray-600 dark:text-gray-300'
              >
                {t('aboutCompany.aboutCompanySection4.description')}
              </motion.p>
            </motion.div>
          </Grid>

          {/* Қисми рост: Форма бо Аниматсия ва Маҳкамшавӣ */}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <motion.div 
              className='relative lgMUI:mr-[10%] mdMUI:mr-[5%] bg-white dark:bg-[#1E2320] p-6 mdMUI:p-8 rounded-[24px] shadow-xl dark:shadow-black/40 border border-gray-100 dark:border-gray-800 transition-colors duration-300 min-h-[460px] flex flex-col justify-center overflow-hidden'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemFadeInUp}
            >
              
              {/* Overlay ва Аниматсияи Боргирӣ (Loading Overlay) */}
              <AnimatePresence>
                {isSubmitting && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='absolute inset-0 z-20 bg-white/90 dark:bg-[#1E2320]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4'
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className='w-12 h-12 border-4 border-[#22994A]/20 border-t-[#22994A] rounded-full'
                    />
                    <span className='text-[15px] font-medium text-gray-700 dark:text-gray-200'>
                      {t('contact.sending', 'Отправка...')}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Аниматсияи Муваффақият (Success View) */}
              <AnimatePresence>
                {isSuccess ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className='flex flex-col items-center justify-center text-center p-6 gap-4'
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1 }}
                      className='w-20 h-20 bg-[#22994A]/10 dark:bg-[#22994A]/20 text-[#22994A] rounded-full flex items-center justify-center text-4xl font-bold'
                    >
                      ✓
                    </motion.div>

                    <h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                      {t('contact.successTitle', 'Успешно отправлено!')}
                    </h3>

                    <p className='text-sm text-gray-600 dark:text-gray-300 max-w-[320px]'>
                      {t('contact.successSubtitle', 'Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время.')}
                    </p>

                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleResetSuccess}
                      className='mt-4 px-8 py-3 rounded-full bg-[#22994A] text-white font-semibold text-sm shadow-md hover:bg-[#1c823e] transition-colors cursor-pointer'
                    >
                      {t('contact.close', 'Отлично')}
                    </motion.button>
                  </motion.div>
                ) : (
                  
                  /* Формаи асосӣ */
                  <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='relative'>
                      <input 
                        type='text'
                        name='name' 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.name', 'Имя')}
                        className='w-full px-[20px] py-[16px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#141816] text-gray-900 dark:text-gray-100 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400 dark:placeholder:text-gray-500' 
                      />
                    </div>

                    <div className='relative'>
                      <input 
                        type='tel'
                        name='phonenumber' 
                        required
                        value={formData.phonenumber}
                        onChange={handleChange}
                        placeholder={t('contact.phoneNumber', 'Телефон')}
                        className='w-full px-[20px] py-[16px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#141816] text-gray-900 dark:text-gray-100 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400 dark:placeholder:text-gray-500' 
                      />
                    </div>

                    <div className='relative'>
                      <input 
                        type='email'
                        name='email' 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.email', 'E-mail*')}
                        className='w-full px-[20px] py-[16px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#141816] text-gray-900 dark:text-gray-100 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400 dark:placeholder:text-gray-500' 
                      />
                    </div>

                    <div className='relative'>
                      <input 
                        type='text'
                        name='company' 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t('contact.company', 'Компания')}
                        className='w-full px-[20px] py-[16px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#141816] text-gray-900 dark:text-gray-100 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400 dark:placeholder:text-gray-500' 
                      />
                    </div>

                    <div className='relative'>
                      <textarea 
                        rows={4} 
                        name='message' 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.message', 'Сообщение')}
                        className='w-full px-[20px] py-[16px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#141816] text-gray-900 dark:text-gray-100 mdMUI:text-[16px] text-[14px] rounded-[20px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none' 
                      />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[18px] text-[16px] bg-gradient-to-r from-[#2F9E56] to-[#0F682E] shadow-lg shadow-[#2F9E56]/25 dark:shadow-none hover:shadow-xl hover:shadow-[#2F9E56]/40 transition-all duration-300 mt-2 cursor-pointer'
                    >
                      {t('contact.send', 'ОТПРАВИТЬ')}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>

            </motion.div>
          </Grid>

        </Grid>
      </div>
    </div>
  )
}

export default AboutCompanySection4