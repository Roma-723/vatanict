import React from 'react'
import { useTranslation } from 'react-i18next'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded'

function MainPageSection3() {
    const { t } = useTranslation()
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const statsData = [
        { 
            id: '01', 
            end: 11, 
            suffix: '+', 
            textKey: 'mainPage.mainPageSection3.text1',
            icon: <AccessTimeRoundedIcon className="text-[#22994A] !text-[26px]" />
        },
        { 
            id: '02', 
            end: 2020, 
            isYear: true, 
            textKey: 'mainPage.mainPageSection3.text2',
            icon: <CalendarTodayRoundedIcon className="text-[#22994A] !text-[26px]" />
        },
        { 
            id: '03', 
            end: 13, 
            suffix: '+', 
            textKey: 'mainPage.mainPageSection3.text3',
            icon: <RocketLaunchRoundedIcon className="text-[#22994A] !text-[26px]" />
        },
        { 
            id: '04', 
            end: 6, 
            suffix: '', 
            textKey: 'mainPage.mainPageSection3.text4',
            icon: <MedicalServicesRoundedIcon className="text-[#22994A] !text-[26px]" />
        },
    ]

    return (
        <section 
            ref={ref} 
            className="relative w-full bg-[#F8FAF9] dark:bg-[#0D120F] py-16 lg:py-24 transition-colors duration-300"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {statsData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-[24px] bg-white dark:bg-[#131915] p-7 sm:p-8 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-2 border border-[#22994A]/25 dark:border-[#22994A]/35 hover:border-[#22994A] dark:hover:border-[#22994A] shadow-[0_10px_25px_rgba(34,153,74,0.06)] hover:shadow-[0_20px_40px_rgba(34,153,74,0.18)] dark:shadow-none dark:hover:shadow-[0_15px_35px_rgba(34,153,74,0.2)] overflow-hidden"
                        >
                            {/* Top Accent Line on Hover */}
                            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#22994A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Top Row: Icon + Badge */}
                            <div className="w-full flex items-center justify-between mb-8">
                                <div className="w-13 h-13 rounded-2xl bg-[#22994A]/10 dark:bg-[#22994A]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold text-[#22994A] bg-[#22994A]/10 dark:bg-[#22994A]/20 px-3 py-1 rounded-full font-mono">
                                    #{item.id}
                                </span>
                            </div>

                            {/* Center Number */}
                            <div className="mb-4">
                                <h2 className="text-4xl sm:text-5xl font-black text-[#188A42] dark:text-white tracking-tight font-mono">
                                    {inView ? (
                                        item.isYear ? (
                                            item.end
                                        ) : (
                                            <CountUp end={item.end} duration={2.5} suffix={item.suffix} />
                                        )
                                    ) : (
                                        `0${item.suffix || ''}`
                                    )}
                                </h2>
                            </div>

                            {/* Bottom Text */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-relaxed">
                                {t(item.textKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainPageSection3