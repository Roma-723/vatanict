import React from 'react';
import { useTranslation } from 'react-i18next';

import { 
  SiReact as ReactIcon, 
  SiNextdotjs as NextIcon, 
  SiTypescript as TsIcon, 
  SiNuxt as NuxtIcon, 
  SiFlutter as FlutterIcon, 
  SiSwift as SwiftIcon, 
  SiKotlin as KotlinIcon, 
  SiNodedotjs as NodeIcon, 
  SiNestjs as NestIcon, 
  SiPython as PythonIcon, 
  SiFastapi as FastApiIcon, 
  SiGo as GoIcon, 
  SiSpringboot as SpringIcon, 
  SiGraphql as GraphqlIcon, 
  SiPostgresql as PostgresIcon, 
  SiMongodb as MongoIcon, 
  SiRedis as RedisIcon, 
  SiElasticsearch as ElasticIcon, 
  SiApachekafka as KafkaIcon, 
  SiRabbitmq as RabbitIcon, 
  SiApachespark as SparkIcon 
} from 'react-icons/si';

function AboutCompanySection3() {
  const { t } = useTranslation();

  const categories = [
    {
      titleKey: 'aboutCompany.aboutCompanySection3.text1',
      defaultTitle: 'Frontend and Mobile Development',
      items: [
        { name: 'React', icon: <ReactIcon className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <NextIcon className="text-black dark:text-white" /> },
        { name: 'TypeScript', icon: <TsIcon className="text-[#3178C6]" /> },
        { name: 'Nuxt', icon: <NuxtIcon className="text-[#00DC82]" /> },
        { name: 'Flutter', icon: <FlutterIcon className="text-[#02569B]" /> },
        { name: 'Swift', icon: <SwiftIcon className="text-[#F05138]" /> },
        { name: 'Kotlin', icon: <KotlinIcon className="text-[#7F52FF]" /> },
      ],
    },
    {
      titleKey: 'aboutCompany.aboutCompanySection3.text2',
      defaultTitle: 'Backend and Microservices',
      items: [
        { name: 'Node.js', icon: <NodeIcon className="text-[#339933]" /> },
        { name: 'NestJS', icon: <NestIcon className="text-[#E0234E]" /> },
        { name: 'Python', icon: <PythonIcon className="text-[#3776AB]" /> },
        { name: 'FastAPI', icon: <FastApiIcon className="text-[#009688]" /> },
        { name: 'Go', icon: <GoIcon className="text-[#00ADD8]" /> },
        { name: 'Spring Boot', icon: <SpringIcon className="text-[#6DB33F]" /> },
        { name: 'GraphQL', icon: <GraphqlIcon className="text-[#E10098]" /> },
      ],
    },
    {
      titleKey: 'aboutCompany.aboutCompanySection3.text3',
      defaultTitle: 'DATA AND PROCESSING',
      items: [
        { name: 'PostgreSQL', icon: <PostgresIcon className="text-[#4169E1]" /> },
        { name: 'MongoDB', icon: <MongoIcon className="text-[#47A248]" /> },
        { name: 'Redis', icon: <RedisIcon className="text-[#DC382D]" /> },
        { name: 'Elasticsearch', icon: <ElasticIcon className="text-[#005571]" /> },
        { name: 'Apache Kafka', icon: <KafkaIcon className="text-black dark:text-white" /> },
        { name: 'RabbitMQ', icon: <RabbitIcon className="text-[#FF6600]" /> },
        { name: 'Apache Spark', icon: <SparkIcon className="text-[#E25A1C]" /> },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] dark:bg-[#0A0F0D] py-12 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        
        {/* Сарлавҳаи асосӣ */}
        <h1 className="text-center text-2xl md:text-4xl font-semibold text-[#494949] dark:text-gray-100 mb-4">
          {t('aboutCompany.aboutCompanySection3.title', 'Technologies and platforms.')}
        </h1>

        {/* Категорияҳо */}
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            
            {/* Сарлавҳаи динамикӣ ва хат */}
            <div className="flex items-center gap-4">
              <h2 className="text-sm md:text-base font-bold text-[#22994A] tracking-wider uppercase whitespace-nowrap">
                {t(cat.titleKey, cat.defaultTitle)}
              </h2>
              <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
            </div>

            {/* Секцияи карточкаҳо */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white dark:bg-[#1E2320] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-200 min-h-[120px]"
                >
                  <div className="text-4xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default AboutCompanySection3;