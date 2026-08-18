import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutCompanySection1 from '../../components/aboutCompanySections/AboutCompanySection1'
import AboutCompanySection2 from '../../components/aboutCompanySections/AboutCompanySection2'
import AboutCompanySection3 from '../../components/aboutCompanySections/AboutCompanySection3'
import AboutCompanySection4 from '../../components/aboutCompanySections/AboutCompanySection4'
import AboutCompanySection5 from '../../components/aboutCompanySections/AboutCompanySection5'
import MainPageSection5 from '../../components/mainPageSections/MainPageSection5'
import './AboutCompany.css'

function AboutCompany() {
  return (
    <div>
        <Helmet>
          <title>Vatan ICT</title>
          <meta name="description" content="Компания по разработке цифровых платформ ООО ”Ватан ИКТ”" />
        </Helmet>
        <AboutCompanySection1/>
        <AboutCompanySection2/>
        <AboutCompanySection3/>
        <AboutCompanySection4/>
        <MainPageSection5/>
        <AboutCompanySection5/>
    </div>
  )
}

export default AboutCompany