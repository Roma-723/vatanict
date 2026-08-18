import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import icon_location from '../../images/u_location-point - Copy (2).png'
import image1 from '../../images/Rectangle 19 (3).png'
import image2 from '../../images/Rectangle 19 (1).png'
import image3 from '../../images/Rectangle 19 (2).png'
import arrow_right from '../../images/Arrow 1.png'
import icon_send from '../../images/fi_share-2.png'

function NewsCard() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [cardsArray, setCardsArray] = useState([
        {id:1,image: image3},
        {id:2,image: image2},
        {id:3,image: image3},
    ])
    const [cardsArray2, setCardsArray2] = useState([
        {id:1,image: image2},
        {id:2,image: image3},
    ])

  return (
    <div className='w-full bg-[rgba(242,242,242,1)] 2xl:min-h-[80.8vh]'>
        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto    mdMUI:pt-[192px] pt-[36px] mdMUI:pb-[150px] pb-[120px]'>
            <div className=''>
                <h3 className='text-[rgba(123,123,123,1)] mdMUI:text-[20px] text-[12px] mdMUI:leading-[24.38px] leading-[14.63px] font-[600] mdMUI:mb-[34px] mb-[8px]'>Технологии | Февраль 2023</h3>
                <h1 className='mdMUI:hidden block text-[18px] leading-[21.94px] font-[600] mb-[33px]'>Ученые из Великобритании создали алгоритм</h1>
                <Grid container spacing={4}>
                    <Grid item lg='8' md='8' sm='12' xs='12'>
                        <div className=' text-[rgba(73,73,73,1)]'>
                            <div className='w-full '>
                                <img src={image1} className='w-full'/>
                            </div>
                            <h1 className='mdMUI:block hidden text-[30px] leading-[36.57px] font-[600] mt-[37px] mb-[46px]'>Ученые из Великобритании создали алгоритм</h1>
                            <div className='text-[16px] font-[400] mdMUI:mt-0 mt-[22px]'>
                                <p className=' leading-[19.5px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
                                <p className='mt-[19.5px] leading-[19.5px]'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                <p className='mt-[19.5px] leading-[19.5px]'>1914 translation by H. Rackham</p>
                                <p className='mt-[19.5px] leading-[19.5px]'>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
                                <p className='mt-[19.5px] leading-[19.5px]'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                            </div>
                            <div className='mdMUI:mt-[105px] mt-[48px] mdMUI:mb-0 mb-[72px] flex items-center'>
                                <img src={icon_send} className='mr-[4px]'/>
                                <h5 className='mdMUI:text-[20px] text-[16px] font-[600] mdMUI:leading-[24.38px] leading-[19.5px] text-[rgba(34,153,74,1)]'>Поделиться</h5>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg='4' md='4' sm='12' xs='12' sx={{display:{lg:'grid',md:'grid',sm:'none',xs:'none'}}}>
                        <div className='w-full'>
                            <Grid container spacing={{lg:4,md:3,sm:3,xs:2}}>
                                {
                                    cardsArray.map((e)=>{
                                        return (
                                            <Grid key={e.id} item lg='12' md='12' sm='6' xs='12'>
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
                    </Grid>
                    <Grid item lg='4' md='4' sm='12' xs='12' sx={{display:{lg:'none',md:'none',sm:'grid',xs:'grid'}}}>
                        <div className='w-full'>
                            <Grid container spacing={{lg:4,md:3,sm:3,xs:2}}>
                                {
                                    cardsArray2.map((e)=>{
                                        return (
                                            <Grid key={e.id} item lg='12' md='12' sm='6' xs='12'>
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
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default NewsCard