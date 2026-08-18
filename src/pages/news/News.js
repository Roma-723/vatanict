import React, { useState } from 'react'
import image1 from '../../images/Rectangle 19.png'
import image2 from '../../images/Rectangle 19 (1).png'
import image3 from '../../images/Rectangle 19 (2).png'
import arrow_right from '../../images/Arrow 1.png'
import { Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function News() {
    const navigate = useNavigate()
    const [cardsArray, setCardsArray] = useState([
        {id:1,image: image1},
        {id:2,image: image2},
        {id:3,image: image3},
        {id:4,image: image1},
        {id:5,image: image2},
        {id:6,image: image3},
        {id:7,image: image1},
        {id:8,image: image2},
        {id:9,image: image3},
        {id:10,image: image1},
        {id:11,image: image2},
        {id:12,image: image3},
    ])

  return (
    <div className='w-full bg-[rgba(242,242,242,1)] 2xl:min-h-[80.8vh] mdMUI:pt-[192px] pt-[36px] mdMUI:pb-[153px] pb-[120px]'>
        <div className=''>
            <div className='w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[56px] md-[24px]'>
                <h1 className='text-[rgba(73,73,73,1)]'>Новости</h1>
            </div>
            <div className='w-full overflow-x-auto    2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
                <Grid container spacing={{lg:4,md:3,sm:3,xs:2}}>
                    {
                        cardsArray.map((e)=>{
                            return (
                                <Grid key={e.id} item lg='4' md='4' sm='6' xs='12'>
                                    <div onClick={()=>navigate(`/news/${e.id}`)} className='cursor-pointer w-full min-h-[565px] rounded-[8px] bg-white'>
                                        <div><img src={e.image} className='w-full'/></div>
                                        <div className='py-[16px] px-[26px]'>
                                            <h4 className='text-[rgba(123,123,123,1)] text-[14px] leading-[17.07px] font-[600] mb-[16px]'>Технологии | Февраль 2023</h4>
                                            <h2 className='mb-[19px] text-[20px] leading-[24.38px] font-[600]'>Ученые из Великобритании создали алгоритм</h2>
                                            <p className='font-[400] text-[12px] leading-[14.63px] mb-[29px]'> Среди мер, которые обсуждаются с компаниями, не только бронь от призыва или оплата билета, но и повышение НДФЛ для работающих из-за рубежа, пишет издание.не только бронь от призыва или оплата билета, но и повышение НДФЛ для работающих из-за рубежа, пишет издание.</p>
                                            <Link className='text-[12px] font-[400] leading-[14.63px] flex'>Подробнее <img src={arrow_right} className='ml-[8px] w-[36px]'/></Link>
                                        </div>
                                    </div>
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