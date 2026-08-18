import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setOrderService } from '../../Redux/reducers/GlobalState'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import TerminalIcon from '@mui/icons-material/Terminal'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

function MainPageSection1() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gray-50 via-white to-gray-100 text-gray-900 dark:bg-[#0A0F0D] dark:text-white pt-28 pb-16 lg:py-24 transition-colors duration-300">
      
      {/* Background Mesh Gradients */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#22994A]/10 dark:bg-[#22994A]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#1b7a3a]/10 dark:bg-[#1b7a3a]/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-[#22994A]/5 dark:bg-[#22994A]/10 blur-[100px]" />

      {/* Cyber Grid Lines Effect */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#22994A 1px, transparent 1px), linear-gradient(90px, #22994A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Hero Section */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Glassmorphic Cyber Badge */}
            <div className="group mb-8 inline-flex items-center gap-3 rounded-2xl border border-[#22994A]/30 bg-[#22994A]/10 px-4 py-2 backdrop-blur-xl transition-all hover:border-[#22994A]/60">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22994A] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#22994A]" />
              </span>
              <span className="text-xs font-mono font-semibold tracking-widest text-[#22994A] uppercase">
                IT & Digital Solutions Partner
              </span>
            </div>

            {/* Typography */}
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
              {t('mainPage.mainPageSection1.title1', 'WE DEVELOP')}{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#22994A] via-[#32A55C] to-[#1b7a3a] dark:to-[#80E2A3]">
                {t('mainPage.mainPageSection1.title2', 'DIGITAL')}
              </span>{' '}
              {t('mainPage.mainPageSection1.title3', '')}{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#22994A] to-[#32A55C]">
                {t('mainPage.mainPageSection1.title4', 'SOLUTIONS')}
              </span>
            </h1>

            {/* Subtitles */}
            <div className="mt-6 space-y-2 text-lg text-gray-600 dark:text-gray-300 sm:text-xl font-light">
              <p className="border-l-2 border-[#22994A] pl-4">
                {t('mainPage.mainPageSection1.text1', 'Digital platform development company')}
              </p>
              <p className="text-[#22994A] dark:text-[#32A55C] font-semibold pl-4">
                {t('mainPage.mainPageSection1.text2', 'ООО "Vatan ICT"')}
              </p>
            </div>

            {/* Interactive Call To Action */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={() => dispatch(setOrderService(true))}
                className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#22994A] to-[#1b7a3a] px-9 py-4 text-base font-bold text-white shadow-[0_4px_20px_rgba(34,153,74,0.3)] dark:shadow-[0_0_30px_rgba(34,153,74,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_30px_rgba(34,153,74,0.5)] dark:hover:shadow-[0_0_45px_rgba(34,153,74,0.6)] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10">{t('mainPage.mainPageSection1.button', 'Заказать разработку')}</span>
                <ArrowOutwardIcon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#32A55C] to-[#22994A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-gray-200 dark:border-white/10 pt-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircleOutlineIcon className="text-[#22994A]" fontSize="small" />
                <span>Индивидуальный подход</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleOutlineIcon className="text-[#22994A]" fontSize="small" />
                <span>Современный стек</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card Section */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Card Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#22994A] to-transparent opacity-20 dark:opacity-40 blur-2xl transition duration-500" />

              {/* Main Futuristic Card Container */}
              <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#121915]/80 p-3 backdrop-blur-2xl shadow-xl dark:shadow-2xl transition-colors duration-300">
                
                {/* Mock Code Header Bar */}
                <div className="flex items-center justify-between rounded-t-2xl bg-gray-100 dark:bg-[#0A0F0D] px-4 py-3 border-b border-gray-200 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
                    <TerminalIcon fontSize="inherit" className="text-[#22994A]" />
                    <span>vatan_ict_core.config.ts</span>
                  </div>
                </div>

                {/* Main Visual Frame */}
                <div className="relative mt-3 h-[360px] sm:h-[420px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
                    alt="Digital Development"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105 opacity-90 dark:opacity-80 dark:mix-blend-luminosity dark:hover:mix-blend-normal"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-[#0A0F0D] via-transparent to-transparent" />

                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 left-4 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-[#0A0F0D]/80 p-3 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22994A]/20 text-[#22994A]">
                        <RocketLaunchIcon fontSize="small" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase">Performance</p>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">High Efficiency</p>
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphic Floating Overlay Footer */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/85 dark:bg-[#0A0F0D]/80 p-4 backdrop-blur-xl shadow-md">
                    <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#22994A]">
                      ООО "Vatan ICT"
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                      Трансформация вашего бизнеса в цифровую эпоху
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MainPageSection1