import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import document_mvd from '../../images/document_images/Рекомендательное письмо МВД.pdf'
import document_mm from '../../images/document_images/Рекомендательное_письмо_Маджлиси_милли.pdf'
import document_seforworld from '../../images/document_images/Рекомендательное_письмо_Сефорворлд.pdf'
import document_smartcity from '../../images/document_images/Рекомендательное_письмо_Смарт_Сити.pdf'

import { setPdfModel } from '../../Redux/reducers/GlobalState'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-6-6 6 6-6 6"
    />
  </svg>
)

const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
    />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
)

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const PdfCard = ({ item, onOpen }) => {
  const { t } = useTranslation()

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onClick={onOpen}
      className="
        group relative cursor-pointer overflow-hidden
        rounded-[24px] border border-[#E7E7E7] dark:border-gray-800
        bg-white dark:bg-[#1E2320]
        shadow-sm transition-all duration-300
        hover:border-[#22994A]/40 dark:hover:border-[#22994A]/60
        hover:shadow-[0_20px_45px_rgba(34,153,74,0.12)] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]
      "
    >
      {/* Number Badge */}
      <div
        className="
          absolute left-5 top-5 z-20 flex h-9 min-w-9
          items-center justify-center rounded-full bg-white/90 dark:bg-[#141816]/90 px-3.5
          text-xs font-bold text-[#22994A] shadow-md backdrop-blur-md
          transition-transform duration-300 group-hover:scale-105
        "
      >
        {item.id}
      </div>

      {/* PDF Container */}
      <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-[#F7F8F7] dark:bg-[#141816] p-5 transition-colors duration-300">
        <div
          className="
            relative h-full overflow-hidden rounded-xl bg-white dark:bg-gray-900
            shadow-[0_8px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)]
            transition-transform duration-500 group-hover:scale-[1.03]
          "
        >
          <Document
            file={item.file}
            loading={
              <div className="flex h-[320px] w-[240px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 dark:border-gray-700 border-t-[#22994A]" />
              </div>
            }
          >
            <Page
              pageNumber={1}
              height={320}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0 z-10 flex items-center justify-center
            bg-[#22994A]/70 dark:bg-[#22994A]/80 opacity-0 backdrop-blur-[4px]
            transition-all duration-300 group-hover:opacity-100
          "
        >
          <div
            className="
              flex translate-y-4 items-center gap-2 rounded-full bg-white dark:bg-gray-900
              px-6 py-3 text-sm font-semibold text-[#22994A] dark:text-[#25b558] shadow-xl
              transition-all duration-300 group-hover:translate-y-0
            "
          >
            <EyeIcon />
            {t('aboutCompany.aboutCompanySection5.viewBtn')}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="truncate text-lg font-bold text-[#2D2D2D] dark:text-gray-100 transition-colors group-hover:text-[#22994A] dark:group-hover:text-[#25b558]">
            {item.title}
          </h3>

          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-[#F1F8F3] dark:bg-[#141816] text-[#22994A] dark:text-[#25b558]
              transition-all duration-300 group-hover:bg-[#22994A] group-hover:text-white dark:group-hover:bg-[#22994A] dark:group-hover:text-white
            "
          >
            <ArrowIcon />
          </div>
        </div>

        <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

function AboutCompanySection5() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const documents = [
    {
      id: '01',
      file: document_mvd,
      title: t('aboutCompany.aboutCompanySection5.docs.mvd'),
      description: t('aboutCompany.aboutCompanySection5.docType'),
    },
    {
      id: '02',
      file: document_mm,
      title: t('aboutCompany.aboutCompanySection5.docs.mm'),
      description: t('aboutCompany.aboutCompanySection5.docType'),
    },
    {
      id: '03',
      file: document_seforworld,
      title: t('aboutCompany.aboutCompanySection5.docs.seforworld'),
      description: t('aboutCompany.aboutCompanySection5.docType'),
    },
    {
      id: '04',
      file: document_smartcity,
      title: t('aboutCompany.aboutCompanySection5.docs.smartcity'),
      description: t('aboutCompany.aboutCompanySection5.docType'),
    },
  ]

  const openPdf = (file) => {
    dispatch(
      setPdfModel({
        open: true,
        image: file,
      })
    )
  }

  return (
    <section className="relative overflow-hidden bg-[#F5F7F6] dark:bg-[#0A0F0D] py-[70px] mdMUI:py-[100px] transition-colors duration-300">
      {/* Background Decorative Blob */}
      <div
        className="
          pointer-events-none absolute -right-[150px] -top-[150px]
          h-[450px] w-[450px] rounded-full bg-[#22994A]/[0.05] dark:bg-[#22994A]/[0.1] blur-3xl
        "
      />

      <div
        className="
          relative mx-auto max-w-[1440px] px-[16px]
          max-[1200px]:px-[4%] 2xl:px-[100px]
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="
            mb-12 flex flex-col justify-between gap-6
            mdMUI:mb-[60px] mdMUI:flex-row mdMUI:items-end
          "
        >
          <div className="max-w-[650px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#22994A]" />
              <span className="text-sm font-semibold uppercase tracking-[3px] text-[#22994A] dark:text-[#25b558]">
                {t('aboutCompany.aboutCompanySection5.subtitle')}
              </span>
            </div>

            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#303030] dark:text-gray-100 mdMUI:text-[48px]">
              {t('aboutCompany.aboutCompanySection5.title')}
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-gray-500 dark:text-gray-300 mdMUI:text-base">
              {t('aboutCompany.aboutCompanySection5.description')}
            </p>
          </div>

          {/* Counter */}
          <div className="flex items-center gap-4">
            <div>
              <span className="block text-4xl font-bold text-[#22994A] dark:text-[#25b558]">
                04
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {t('aboutCompany.aboutCompanySection5.subtitle')}
              </span>
            </div>

            <div className="h-12 w-px bg-gray-200 dark:bg-gray-800" />

            <p className="max-w-[130px] text-sm leading-5 text-gray-400 dark:text-gray-400">
              {t('aboutCompany.aboutCompanySection5.badgeSubtitle')}
            </p>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {documents.map((item) => (
            <PdfCard
              key={item.id}
              item={item}
              onOpen={() => openPdf(item.file)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCompanySection5