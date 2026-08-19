import React from 'react'
import { useTranslation } from 'react-i18next'
import { QRCode } from 'antd'

// Icons & Images
import phone_white from '../../images/Vector_phone.png'
import email_white from '../../images/fi_mail.png'
import map_white from '../../images/u_location-point (1).png'
import logo_light from '../../images/logo_vatan ict 1.png'
import icon_facebook from '../../images/facebook.png'
import icon_instagram from '../../images/instagram.png'
import icon_linkedin from '../../images/linkedin.png'

// Documents
import document_сertificate_vatan from '../../images/document_footer/1-Шаходатнома Ватан.PDF'
import document_inn from '../../images/document_footer/3-ИНН Ватан.PDF'

const WEBSITE_URL = 'https://maps.app.goo.gl/7TknopfX4vTGF1Po9'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative w-full border-t border-emerald-600/30 dark:border-white/10 bg-gradient-to-br from-[#1E8A42] via-[#22994A] to-[#176B34] text-white dark:bg-[#0A0F0D] dark:from-[#0A0F0D] dark:to-[#0A0F0D] dark:text-gray-200 transition-colors duration-300 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl dark:bg-[#22994A]/15" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-[#22994A]/15" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        
        {/* Top Logo & Description Section */}
        <div className="mb-10 flex flex-col items-start justify-between border-b border-white/20 dark:border-white/10 pb-8 sm:flex-row sm:items-center">
          <div className="mb-4 sm:mb-0">
            {/* Light mode = pure white, Dark mode = original green logo */}
            <img 
              src={logo_light} 
              alt="Vatan ICT Logo" 
              className="h-10 w-auto sm:h-12 brightness-0 invert dark:brightness-100 dark:invert-0 transition-all duration-300 hover:scale-105"
            />
          </div>
          <p className="max-w-md text-sm font-medium text-emerald-50 dark:text-gray-400">
            ООО "Vatan ICT" — Разработка цифровых решений и IT-консалтинг в Таджикистане.
          </p>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Contacts (5 cols) */}
          <div className="space-y-5 lg:col-span-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-200 dark:text-[#32A55C]">
              Контакты
            </h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:+992446400023" 
                className="group flex items-center gap-3 transition-colors hover:text-emerald-200 dark:hover:text-[#32A55C]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 dark:bg-[#22994A]/10 border border-white/30 dark:border-[#22994A] transition-all group-hover:scale-105">
                  <img src={phone_white} alt="Phone" className="h-4 w-4 brightness-0 invert" />
                </div>
                <span className="text-base font-semibold">+992 44 640 0023</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:vatanict.info@gmail.com" 
                className="group flex items-center gap-3 transition-colors hover:text-emerald-200 dark:hover:text-[#32A55C]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 dark:bg-[#22994A]/10 border border-white/30 dark:border-[#22994A] transition-all group-hover:scale-105">
                  <img src={email_white} alt="Email" className="h-4 w-4 brightness-0 invert" />
                </div>
                <span className="text-base font-semibold">vatanict.info@gmail.com</span>
              </a>

              {/* Location */}
              <div className="group flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 dark:bg-[#22994A]/10 border border-white/30 dark:border-[#22994A] transition-all group-hover:scale-105">
                  <img src={map_white} alt="Map Location" className="h-4 w-4 brightness-0 invert" />
                </div>
                <div className="text-sm font-medium leading-relaxed">
                  <p className="font-semibold text-white">{t('contact.address1', 'Таджикистан, г. Душанбе')}</p>
                  <p className="text-emerald-100 dark:text-gray-400">{t('contact.address2', 'улица Мирзо Турсунзода 27А')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Documents (4 cols) */}
          <div className="space-y-5 lg:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-200 dark:text-[#32A55C]">
              Документы
            </h4>
            
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <a 
                href={document_inn} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-white dark:text-gray-300 hover:text-emerald-200 dark:hover:text-[#32A55C] underline hover:no-underline transition-all"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-[#22994A]" />
                {t('layout.layoutFooter.text1', 'ИНН')}
              </a>
              <a 
                href={document_сertificate_vatan} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-white dark:text-gray-300 hover:text-emerald-200 dark:hover:text-[#32A55C] underline hover:no-underline transition-all"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-[#22994A]" />
                {t('layout.layoutFooter.text2', 'Свидетельство о регистрации')}
              </a>
            </div>
          </div>

          {/* Column 3: QR Code & Social Links (3 cols) */}
          <div className="flex flex-col items-start space-y-5 sm:items-end lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-200 dark:text-[#32A55C]">
              Локация & Соцсети
            </h4>

            {/* QR Code Container */}
            <div className="rounded-2xl border border-white/30 dark:border-[#22994A]/50 bg-white p-2.5 shadow-md transition-all">
              <QRCode 
                value={WEBSITE_URL} 
                size={110} 
                bordered={false} 
                color="#0A0F0D" 
                bgColor="#FFFFFF"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/company/79980009/admin/"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 dark:bg-[#22994A]/10 border border-white/30 dark:border-[#22994A] transition-all hover:scale-110 hover:bg-white/25 dark:hover:bg-[#22994A]/30"
              >
                <img src={icon_linkedin} alt="LinkedIn" className="h-5 w-5 object-contain brightness-0 invert" />
              </a>

              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.facebook.com/vatanict.tj"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 dark:bg-[#22994A]/10 border border-white/30 dark:border-[#22994A] transition-all hover:scale-110 hover:bg-white/25 dark:hover:bg-[#22994A]/30"
              >
                <img src={icon_facebook} alt="Facebook" className="h-5 w-5 object-contain brightness-0 invert" />
              </a>

              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.instagram.com/vatanict.tj/"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 dark:bg-[#22994A]/10 border border-white/30 dark:border-[#22994A] transition-all hover:scale-110 hover:bg-white/25 dark:hover:bg-[#22994A]/30"
              >
                <img src={icon_instagram} alt="Instagram" className="h-5 w-5 object-contain brightness-0 invert" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 border-t border-white/20 dark:border-white/10 pt-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs font-mono text-emerald-100 dark:text-gray-400">
            © {new Date().getFullYear()} ООО "Vatan ICT". Все права защищены.
          </p>
          <p className="mt-2 text-xs font-mono text-emerald-200 dark:text-gray-500 sm:mt-0">
            Dushanbe, Tajikistan
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer