import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import MainPageSection1 from '../../components/mainPageSections/MainPageSection1'
import MainPageSection2 from '../../components/mainPageSections/MainPageSection2'
import MainPageSection3 from '../../components/mainPageSections/MainPageSection3'
import MainPageSection4 from '../../components/mainPageSections/MainPageSection4'
import MainPageSection5 from '../../components/mainPageSections/MainPageSection5'
import './MainPageStyle.css'
import main_image from '../../images/tg_image_4237473623 1.png'
import Loading from '../../components/loading/Loading'

function MainPage() {
  const [imageLoading, setImageLoading] = useState(false)

  
  useEffect(()=>{
    const image_1 = new Image()
    image_1.src = main_image
    image_1.onload = () => {
        setImageLoading(true)
    }
  },[])

if(!imageLoading){
    return <Loading/>
}

  return (
    <div className=''>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content='МЫ РАЗРАБАТЫВАЕМ ЦИФРОВЫЕ РЕШЕНИЯ Компания по разработке цифровых платформ ООО ”Ватан ИКТ”' />
        </Helmet>
        <MainPageSection1/>
        <MainPageSection2/>
        <MainPageSection3/>
        {/* <MainPageSection4/> */}
        <MainPageSection5/>
    </div>
  )
}

export default MainPage