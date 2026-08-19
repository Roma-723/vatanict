import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import image1 from '../../images/Rectangle 19.png'
import image2 from '../../images/Rectangle 19 (1).png'
import image3 from '../../images/Rectangle 19 (2).png'
import arrow_right from '../../images/Arrow 1.png'
import { Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function News() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    
    const [cardsArray] = useState([
        {id:1, image: image1},
        {id:2, image: image2},
        {id:3, image: image3},
        {id:4, image: image1},
        {id:5, image: image2},
        {id:6, image: image3},
        {id:7, image: image1},
        {id:8, image: image2},
        {id:9, image: image3},
        {id:10, image: image1},
        {id:11, image: image2},
        {id:12, image: image3},
    ])

  return (
    // Ислоҳи ҷои холии боло: pt-[40px] ва mdMUI:pt-[80px] карда шуд
    <div className='w-full bg-[rgba(242,242,242,1)] dark:bg-[#0A0F0D] 2xl:min-h-[80.8vh] mdMUI:pt-[80px] pt-[40px] mdMUI:pb-[153px] pb-[120px] transition-colors duration-300'>
        <Helmet>
          <title>Новости - Vatan ICT</title>
          <meta name="description" content="Последние новости и технологии от компании Vatan ICT" />
        </Helmet>

        <div className=''>
            {/* Header Animation */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[40px] mb-[24px]'
            >
                <h1 className='text-[rgba(73,73,73,1)] dark:text-white'>Новости</h1>
            </motion.div>

            <div className='w-full overflow-x-auto 2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
                <Grid container spacing={{lg:4, md:3, sm:3, xs:2}}>
                    {
                        cardsArray.map((e, index)=>{
                            return (
                                <Grid key={e.id} item lg={4} md={4} sm={6} xs={12}>
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                        onClick={()=>navigate(`/news/${e.id}`)} 
                                        className='cursor-pointer w-full min-h-[565px] rounded-[16px] bg-white dark:bg-[#131916] border border-[rgba(230,230,230,1)] dark:border-gray-800 hover:border-[rgba(34,153,74,0.5)] dark:hover:border-[#22994a] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_30px_rgba(34,153,74,0.15)] dark:hover:shadow-[0_12px_30px_rgba(34,153,74,0.25)] flex flex-col justify-between overflow-hidden transition-all duration-300'
                                    >
                                        <div>
                                            <div className='overflow-hidden'>
                                                <img src={e.image} className='w-full object-cover hover:scale-105 transition-transform duration-500' alt="news" />
                                            </div>
                                            <div className='py-[16px] px-[26px]'>
                                                <h4 className='text-[rgba(123,123,123,1)] dark:text-gray-400 text-[14px] leading-[17.07px] font-[600] mb-[16px]'>
                                                    Технологии | Февраль 2023
                                                </h4>
                                                <h2 className='mb-[19px] text-[20px] leading-[24.38px] font-[600] text-slate-900 dark:text-white'>
                                                    Ученые из Великобритании создали алгоритм
                                                </h2>
                                                <p className='font-[400] text-[12px] leading-[14.63px] mb-[29px] text-slate-600 dark:text-gray-300'>
                                                    Среди мер, которые обсуждаются с компаниями, не только бронь от призыва или оплата билета, но и повышение НДФЛ для работающих из-за рубежа, пишет издание.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className='py-[16px] px-[26px] pt-0'>
                                            <Link to={`/news/${e.id}`} className='text-[12px] font-[400] leading-[14.63px] flex items-center text-[rgba(34,153,74,1)] dark:text-[#25b558] hover:opacity-80 transition-opacity'>
                                                Подробнее <img src={arrow_right} className='ml-[8px] w-[36px] dark:brightness-0 dark:invert' alt="arrow" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default News