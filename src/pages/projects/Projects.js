import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import icon_all from "../../images/fi_list (1).png";
import icon_shield from "../../images/u_shield.png";
import icon_briefcase from "../../images/u_briefcase-alt.png";
import icon_graduation from "../../images/u_graduation-cap.png";
import icon_all_white from "../../images/fi_list.png";
import icon_shield_white from "../../images/u_shield (1).png";
import icon_briefcase_white from "../../images/u_briefcase-alt (1).png";
import icon_graduation_white from "../../images/u_graduation-cap (1).png";

import { setProjectItem } from "../../Redux/reducers/LocallhostStateIct";
import { getProjects } from "../../const/projects";

// SVG тирча барои "Подробнее →"
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

function Projects() {
  const [career_state, setCareerState] = useState(1);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const tabs = [
    {
      id: 1,
      label: t("project.text1") || "Все",
      iconActive: icon_all_white,
      iconInactive: icon_all,
      categories: [],
    },
    {
      id: 2,
      label: t("project.text2") || "Госсектор",
      iconActive: icon_shield_white,
      iconInactive: icon_shield,
      categories: ["Госсектор", "Public sector", "Сектори давлатӣ"],
    },
    {
      id: 3,
      label: t("project.text3") || "Бизнес",
      iconActive: icon_briefcase_white,
      iconInactive: icon_briefcase,
      categories: ["Бизнес", "Business", "Корчалонӣ"],
    },
    {
      id: 4,
      label: t("project.text4") || "Образование",
      iconActive: icon_graduation_white,
      iconInactive: icon_graduation,
      categories: ["Образование", "Education", "Таҳсил"],
    },
  ];

  const filteredProjects = useMemo(() => {
    const cardArray = getProjects(t) || [];
    if (career_state === 1) return cardArray;

    const currentTab = tabs.find((tab) => tab.id === career_state);
    if (!currentTab) return cardArray;

    return cardArray.filter((item) =>
      currentTab.categories.includes(item.category)
    );
  }, [t, career_state]);

  return (
    <div className="w-full bg-[#F5F7F6] dark:bg-[#0A0F0D] min-h-screen pt-[120px] pb-[100px] transition-colors duration-300">
      <Helmet>
        <title>Vatan ICT - Проекты</title>
      </Helmet>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="w-full text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t("project.title") || "Проекты"}
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = career_state === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCareerState(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-[#22994A] dark:bg-[#25b558] text-white shadow-md shadow-green-600/20"
                    : "bg-white dark:bg-[#1E2320] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#252B28] border border-gray-200 dark:border-gray-800"
                  }`}
              >
                <img
                  src={isActive ? tab.iconActive : tab.iconInactive}
                  alt={tab.label}
                  className="w-4 h-4 object-contain"
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <Grid container spacing={3} alignItems="stretch">
          <AnimatePresence>
            {filteredProjects.map((e) => (
              <Grid key={e.id} item xs={12} sm={6} md={4} className="flex">
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex"
                >
                  <Link
                    to={`/project/${e.id}`}
                    onClick={() => dispatch(setProjectItem(e))}
                    className="group flex flex-col justify-between w-full h-[460px] bg-white dark:bg-[#1E2320] rounded-[24px] border border-gray-200/80 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                  >

                    {/* Upper Section: Image + Title + Description */}
                    <div className="flex flex-col overflow-hidden">
                      {/* Image Container */}
                      <div className="relative w-full h-[190px] bg-gray-100 dark:bg-gray-900 shrink-0 overflow-hidden">
                        {e.image ? (
                          <img
                            src={e.image}
                            alt={e.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-400 text-xs">
                            No Image
                          </div>
                        )}

                        {/* Category Badge */}
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-black/80 text-[#22994A] dark:text-[#25b558] backdrop-blur-sm">
                          {e.category || "Госсектор"}
                        </span>
                      </div>

                      {/* Content Box */}
                      <div className="p-5 flex flex-col gap-2">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base leading-snug line-clamp-2 group-hover:text-[#22994A] dark:group-hover:text-[#25b558] transition-colors">
                          {e.title}
                        </h3>

                        {/* Матни тавсиф бо ду хат ва нуқтаҳо ба танзим дароварда шуд */}
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {e.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section: Client & "Подробнее →" Button */}
                    <div className="p-5 pt-0 flex items-center justify-between border-t border-transparent mt-auto">
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-500 truncate max-w-[130px]">
                        {e.client || "МВД РТ"}
                      </span>

                      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#22994A] dark:text-[#25b558]">
                        <span>{t("project.more")}</span>                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                  </Link>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

      </div>
    </div>
  );
}

export default Projects;