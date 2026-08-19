import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CountUp from 'react-countup'

// ✅ ДУРУСТ:
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupsIcon from '@mui/icons-material/Groups'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const AnimatedNumber = ({ end, decimals = 0, prefix = '', suffix = '' }) => {
  return (
    <CountUp
      start={0}
      end={end}
      duration={2.5}
      separator=","
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
    />
  )
}

function AboutCompanySection1() {
  const { t } = useTranslation()
  const [activeCard, setActiveCard] = useState(null)

  const stats = [
    {
      id: 1,
      icon: TrendingUpIcon,
      value: 11,
      suffix: '+',
      title: t('aboutCompany.aboutCompanySection1.text1'),
      description: 'Years of experience',
    },
    {
      id: 2,
      icon: GroupsIcon,
      value: 2020,
      suffix: '',
      title: t('aboutCompany.aboutCompanySection1.text3'),
      description: 'Company founded',
    },
    {
      id: 3,
      icon: PersonIcon,
      value: 19,
      suffix: '+',
      title: t('aboutCompany.aboutCompanySection1.text2'),
      description: 'Team members',
    },
    {
      id: 4,
      icon: WorkIcon,
      value: 13,
      suffix: '+',
      title: t('aboutCompany.aboutCompanySection1.text6'),
      description: 'Completed projects',
    },
    {
      id: 5,
      icon: HandshakeOutlinedIcon,
      value: 5,
      suffix: '',
      title: t('aboutCompany.aboutCompanySection1.text5'),
      description: 'Business partners',
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#0D120F] py-12 px-4 sm:py-16 md:px-8 lg:py-28 transition-colors duration-300">

      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#22994A]/10 dark:bg-[#22994A]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#22994A]/10 dark:bg-[#22994A]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* ================= HERO ================= */}
        <div className="mb-12 lg:mb-20">
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            {/* Left Column */}
            <Grid item xs={12} lg={8}>
              <div className="max-w-[780px]">
                {/* Badge */}
                <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#22994A]/25 dark:border-[#22994A]/40 bg-[#22994A]/10 dark:bg-[#22994A]/15 px-3.5 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22994A] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#22994A]" />
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#22994A] dark:text-[#32B25B]">
                    {t(
                      'aboutCompany.aboutCompanySection1.subtitle',
                      'О компании'
                    )}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl font-black leading-[0.95] text-[#22994A] dark:text-[#32B25B] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[82px] drop-shadow-sm">
                  VATAN
                  <span className="text-[#191C1A] dark:text-white"> ICT</span>
                </h1>

                {/* Subtitle */}
                <h2 className="mt-4 sm:mt-7 max-w-[650px] text-xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-3xl md:text-4xl">
                  {t('aboutCompany.aboutCompanySection1.title')}
                </h2>

                {/* Description */}
                <p className="mt-4 sm:mt-6 max-w-[680px] text-sm leading-6 sm:text-base sm:leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
                  {t('aboutCompany.aboutCompanySection1.text')}
                </p>
              </div>
            </Grid>

            {/* Right Featured Hero Box */}
            <Grid item xs={12} lg={4}>
              <div className="relative group">
                <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#22994A]/20 dark:border-[#22994A]/30 bg-[#F7FAF8] dark:bg-[#131915] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(34,153,74,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_rgba(34,153,74,0.18)] transition-all duration-500">
                  <div className="absolute -right-16 -top-16 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[#22994A]/10 dark:bg-[#22994A]/20 blur-xl" />

                  <div className="relative z-10">
                    <div className="mb-6 sm:mb-8 flex items-center justify-between">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#22994A] text-white shadow-lg shadow-[#22994A]/30">
                        <TrendingUpIcon fontSize="small" />
                      </div>
                      <ArrowOutwardIcon
                        className="text-[#22994A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        fontSize="medium"
                      />
                    </div>

                    <div className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                      <span className="text-[#22994A] dark:text-[#32B25B]">
                        <AnimatedNumber
                          end={11}
                          suffix="+"
                        />
                      </span>
                    </div>

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                      {t('aboutCompany.aboutCompanySection1.text1')}
                    </p>

                    <div className="mt-6 sm:mt-8 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                      <div className="h-full w-[85%] rounded-full bg-[#22994A] dark:bg-[#32B25B] shadow-[0_0_12px_rgba(34,153,74,0.8)]" />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* ================= STATS HEADER ================= */}
        <div className="mb-6 sm:mb-8 flex flex-col justify-between gap-2 sm:gap-4 md:flex-row md:items-end">
          <div />
          <p className="max-w-[420px] text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 dark:text-gray-400">
            {t(
              'aboutCompany.aboutCompanySection1.statsDescription',
              'Наш опыт, команда и результаты говорят сами за себя.'
            )}
          </p>
        </div>

        {/* ================= STATS CARDS ================= */}
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {stats.map((item, index) => {
            const isActive = activeCard === item.id
            const Icon = item.icon

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={index < 3 ? 4 : 6}
                lg={index < 3 ? 4 : 6}
                key={item.id}
              >
                <div
                  onClick={() => setActiveCard(item.id)}
                  className={`
                    group relative h-full cursor-pointer overflow-hidden
                    rounded-[20px] sm:rounded-[28px] border p-4 sm:p-6 lg:p-7
                    transition-all duration-500
                    ${
                      isActive
                        ? 'border-[#22994A] bg-[#22994A] text-white shadow-[0_15px_35px_rgba(34,153,74,0.35)] dark:shadow-[0_15px_35px_rgba(34,153,74,0.25)]'
                        : 'border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#131915] hover:-translate-y-2 hover:border-[#22994A]/40 dark:hover:border-[#22994A]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_rgba(34,153,74,0.12)]'
                    }
                  `}
                >
                  {/* Big Number in background */}
                  <div
                    className={`
                      pointer-events-none absolute -right-2 -top-6 sm:-right-4 sm:-top-8
                      text-[70px] sm:text-[90px] lg:text-[120px] font-black leading-none
                      transition-all duration-500 select-none
                      ${
                        isActive
                          ? 'text-white/10'
                          : 'text-gray-200/50 dark:text-gray-800/30 group-hover:text-[#22994A]/15'
                      }
                    `}
                  >
                    0{item.id}
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row */}
                      <div className="mb-6 sm:mb-8 lg:mb-10 flex items-start justify-between">
                        <div
                          className={`
                            flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center
                            rounded-xl sm:rounded-2xl transition-all duration-300
                            ${
                              isActive
                                ? 'bg-white text-[#22994A] shadow-md'
                                : 'bg-[#22994A]/10 dark:bg-[#22994A]/20 text-[#22994A] dark:text-[#32B25B] group-hover:bg-[#22994A] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#22994A]/30'
                            }
                          `}
                        >
                          <Icon className="text-[20px] sm:text-[24px] lg:text-[28px]" />
                        </div>

                        <ArrowOutwardIcon
                          className={`
                            transition-all duration-300 text-[18px] sm:text-[22px]
                            ${
                              isActive
                                ? 'text-white'
                                : 'text-gray-400 dark:text-gray-600 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#22994A] dark:group-hover:text-[#32B25B]'
                            }
                          `}
                        />
                      </div>

                      {/* Number */}
                      <div
                        className={`
                          text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight transition-colors duration-300
                          ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}
                        `}
                      >
                        <span className={isActive ? 'text-white' : 'text-[#22994A] dark:text-[#32B25B]'}>
                          <AnimatedNumber
                            end={item.value}
                            suffix={item.suffix}
                          />
                        </span>
                      </div>

                      {/* Title */}
                      <p
                        className={`
                          mt-2 sm:mt-3 text-sm sm:text-base font-bold transition-colors duration-300
                          ${isActive ? 'text-white' : 'text-gray-800 dark:text-gray-200'}
                        `}
                      >
                        {item.title}
                      </p>

                      {/* Description */}
                      <p
                        className={`
                          mt-0.5 sm:mt-1 text-xs sm:text-sm transition-colors duration-300
                          ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}
                        `}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Progress Line */}
                    <div
                      className={`
                        mt-5 sm:mt-7 h-[2px] w-full overflow-hidden rounded-full
                        ${isActive ? 'bg-white/30' : 'bg-gray-100 dark:bg-gray-800'}
                      `}
                    >
                      <div
                        className={`
                          h-full rounded-full transition-all duration-700
                          ${
                            isActive
                              ? 'w-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                              : 'w-0 bg-[#22994A] dark:bg-[#32B25B] group-hover:w-full'
                          }
                        `}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
            )
          })}
        </Grid>

      </div>
    </section>
  )
}

export default AboutCompanySection1