import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import icon_1_1 from '../../images/Group (2).png';
import icon_2_1 from '../../images/Group (3).png';
import icon_3_1 from '../../images/Group (4).png';
import icon_4_1 from '../../images/Group (5).png';
import icon_5_1 from '../../images/Group (6).png';
import  './services.css';
import icon_1_2 from '../../images/Group (7).png';
import icon_2_2 from '../../images/Group (8).png';
import icon_3_2 from '../../images/Group (9).png';
import icon_4_2 from '../../images/Group (10).png';
import icon_5_2 from '../../images/Group (11).png';

import icon_arrow_right from '../../images/Frame 2046.png';

function Services() {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();

  const servicesData = [
    { id: 1, icon1: icon_1_1, icon2: icon_1_2, key: 'card1' },
    { id: 2, icon1: icon_2_1, icon2: icon_2_2, key: 'card2' },
    { id: 3, icon1: icon_3_1, icon2: icon_3_2, key: 'card3' },
    { id: 4, icon1: icon_4_1, icon2: icon_4_2, key: 'card4' },
    { id: 5, icon1: icon_5_1, icon2: icon_5_2, key: 'card5' },
  ];

  const activeServiceData = servicesData.find((s) => s.id === activeTab);

  return (
    // Никаких фиксированных высот – всё по содержимому
    <div className="w-full bg-[#FAFAFB] dark:bg-[#0A0F0D] pt-[40px] mdMUI:pt-[60px] pb-[80px] transition-colors duration-300">
      <Helmet>
        <title>{t('servicesPage.title')} - Vatan ICT</title>
        <meta name="description" content={t('servicesPage.description')} />
      </Helmet>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 mdMUI:mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#22994A]/10 text-[#22994A] dark:bg-[#25b558]/20 dark:text-[#25b558] font-semibold text-xs mdMUI:text-sm tracking-wider uppercase mb-3">
            {t('servicesPage.subtitle')}
          </span>
          <h1 className="text-3xl mdMUI:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('servicesPage.title')}
          </h1>
          <p className="text-slate-600 dark:text-gray-300 text-base mdMUI:text-lg leading-relaxed">
            {t('servicesPage.description')}
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden mdMUI:block">
          {/* Navigation Tabs Header */}
          <div className="bg-white dark:bg-[#131916] border border-slate-200/90 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden p-2.5">
            <div className="grid grid-cols-5 gap-2">
              {servicesData.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex flex-col items-center justify-center py-6 px-4 rounded-xl transition-all duration-300 outline-none ${
                      isActive
                        ? 'bg-[#F4F9F5] dark:bg-[#1A231F] text-[#22994A] dark:text-[#25b558] shadow-sm border border-[#22994A]/30 scale-[1.01]'
                        : 'text-slate-600 dark:text-gray-400 hover:text-[#22994A] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="w-14 h-14 flex items-center justify-center mb-3">
                      <img
                        src={isActive ? item.icon2 : item.icon1}
                        alt={t(`servicesPage.cards.${item.key}.title`)}
                        style={{
                          filter:
                            'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(452%) hue-rotate(94deg) brightness(95%) contrast(91%)',
                        }}
                        className="w-full h-full object-contain transition-transform duration-300"
                      />
                    </div>
                    <span
                      className={`text-base font-semibold text-center transition-colors ${
                        isActive
                          ? 'text-[#22994A] dark:text-[#25b558]'
                          : 'text-slate-700 dark:text-gray-300'
                      }`}
                    >
                      {t(`servicesPage.cards.${item.key}.title`)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Content Card */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {activeServiceData && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white dark:bg-[#131916] border border-slate-200/90 dark:border-gray-800 rounded-2xl p-6 lg:p-10 shadow-sm grid grid-cols-12 gap-8 items-start"
                >
                  {/* Текст */}
                  <div className="col-span-12 lg:col-span-7 space-y-4 text-slate-700 dark:text-gray-200 text-base lg:text-lg leading-relaxed">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-3">
                      {t(`servicesPage.cards.${activeServiceData.key}.title`)}
                    </h3>
                    <p>{t(`servicesPage.cards.${activeServiceData.key}.p1`)}</p>
                    <p>{t(`servicesPage.cards.${activeServiceData.key}.p2`)}</p>
                  </div>

                  {/* Буллет-поинты */}
                  <div className="col-span-12 lg:col-span-5 bg-[#F8FAFB] dark:bg-[#1A231F] border border-slate-200/70 dark:border-[#22994A]/20 rounded-xl p-5 lg:p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#22994A] dark:text-[#25b558] mb-3">
                      {t('servicesPage.whatIncludes')}
                    </h4>
                    <ul className="space-y-3">
                      {[1, 2, 3].map((num) => (
                        <li key={num} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#22994A]/10 dark:bg-[#25b558]/20 text-[#22994A] dark:text-[#25b558] font-bold text-xs mr-3 shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-slate-800 dark:text-gray-200 text-sm lg:text-base font-medium">
                            {t(
                              `servicesPage.cards.${activeServiceData.key}.item${num}`
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View (Accordion) */}
        <div className="block mdMUI:hidden space-y-3">
          {servicesData.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#131916] transition-all"
              >
                <button
                  onClick={() => setActiveTab(isActive ? 0 : item.id)}
                  className={`w-full p-4 flex items-center justify-between text-left transition-colors ${
                    isActive
                      ? 'bg-[#F4F9F5] dark:bg-[#1A231F] text-slate-900 dark:text-white border-b border-slate-200 dark:border-gray-800'
                      : 'hover:bg-slate-50/60 dark:hover:bg-gray-800/50 text-slate-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={isActive ? item.icon2 : item.icon1}
                      alt={t(`servicesPage.cards.${item.key}.title`)}
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(452%) hue-rotate(94deg) brightness(95%) contrast(91%)',
                      }}
                      className="w-8 h-8 object-contain"
                    />
                    <span
                      className={`font-bold text-sm sm:text-base ${
                        isActive ? 'text-[#22994A] dark:text-[#25b558]' : ''
                      }`}
                    >
                      {t(`servicesPage.cards.${item.key}.title`)}
                    </span>
                  </div>
                  <img
                    src={icon_arrow_right}
                    alt="arrow"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'rotate-90 filter invert dark:invert-0' : 'dark:invert'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-gray-200 leading-relaxed">
                        <p>{t(`servicesPage.cards.${item.key}.p1`)}</p>
                        <p>{t(`servicesPage.cards.${item.key}.p2`)}</p>

                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-gray-800/60 bg-[#F4F9F5] dark:bg-[#1A231F] -mx-4 -mb-4 p-4">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-[#22994A] dark:text-[#25b558] mb-2">
                            {t('servicesPage.whatIncludes')}
                          </h5>
                          <ul className="space-y-2">
                            {[1, 2, 3].map((num) => (
                              <li
                                key={num}
                                className="flex items-start text-xs font-medium text-slate-800 dark:text-gray-200"
                              >
                                <span className="text-[#22994A] dark:text-[#25b558] font-bold mr-2">
                                  ✓
                                </span>
                                {t(`servicesPage.cards.${item.key}.item${num}`)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;