import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function AboutCompanySection4() {
  const { t } = useTranslation()

  // Танзимоти аниматсияҳо барои пайдошавии мулоим
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <div className='w-full mdMUI:min-h-[787px] mdMUI:bg-white bg-[rgba(242,242,242,1)] transition-colors duration-300'>
      <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto mdMUI:pt-[72px] pt-[40px] pb-[40px]'>
        <Grid container spacing={4} alignItems="center">
          
          {/* Қисми чап: Сарлавҳа ва Матн */}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <motion.div 
              className='text-[rgba(73,73,73,1)] pr-5 mdMUI:pb-0 pb-[24px]'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h1 className='font-[700] mdMUI:text-[48px] text-[30px] max-w-[434px] mdMUI:leading-[58px] leading-[38px] mdMUI:pb-[40px] pb-[24px] tracking-tight'>
                {t('aboutCompany.aboutCompanySection4.title1')}{' '}
                <span className='text-[rgba(34,153,74,1)] relative inline-block'>
                  {t('aboutCompany.aboutCompanySection4.title2')}
                </span>
              </h1>
              <p className='mdMUI:text-[16px] text-[14px] font-[400] mdMUI:leading-[26px] leading-[22px] max-w-[473px] text-gray-600'>
                {t('aboutCompany.aboutCompanySection4.description')}
              </p>
            </motion.div>
          </Grid>

          {/* Қисми рост: Форма */}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <motion.div 
              className='lgMUI:mr-[10%] mdMUI:mr-[5%] bg-white/80 backdrop-blur-sm p-6 mdMUI:p-8 rounded-[24px] shadow-xl border border-gray-100'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4'>
                <div className='relative'>
                  <input 
                    className='w-full px-[20px] py-[16px] border border-gray-300 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400' 
                    name='name' 
                    placeholder={t('contact.name')}
                  />
                </div>

                <div className='relative'>
                  <input 
                    className='w-full px-[20px] py-[16px] border border-gray-300 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400' 
                    name='phonenumber' 
                    placeholder={t('contact.phoneNumber')}
                  />
                </div>

                <div className='relative'>
                  <input 
                    type='email'
                    className='w-full px-[20px] py-[16px] border border-gray-300 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400' 
                    name='email' 
                    placeholder={t('contact.email')}
                  />
                </div>

                <div className='relative'>
                  <input 
                    className='w-full px-[20px] py-[16px] border border-gray-300 mdMUI:text-[16px] text-[14px] rounded-[100px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400' 
                    name='company' 
                    placeholder={t('contact.company')}
                  />
                </div>

                <div className='relative'>
                  <textarea 
                    rows={5} 
                    className='w-full px-[20px] py-[16px] border border-gray-300 mdMUI:text-[16px] text-[14px] rounded-[20px] outline-none transition-all duration-300 focus:border-[#22994A] focus:ring-4 focus:ring-[#22994A]/10 placeholder:text-gray-400 resize-none' 
                    name='message' 
                    placeholder={t('contact.message')}
                  />
                </div>

                {/* Тугма бо аниматсияи hover ва press */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'
                  style={{ background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)' }} 
                  className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[18px] text-[16px] shadow-lg shadow-[#2F9E56]/30 hover:shadow-xl hover:shadow-[#2F9E56]/40 transition-shadow duration-300 mt-2'
                >
                  {t('contact.send') || 'ОТПРАВИТЬ'}
                </motion.button>
              </form>
            </motion.div>
          </Grid>

        </Grid>
      </div>
    </div>
  )
}

export default AboutCompanySection4