import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { getProjects } from "../../const/projects";

function ProjectCard() {
  const [projectItem, setProjectItem] = useState(null);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const cardArray = getProjects(t);
    const found = cardArray?.find((elem) => String(elem.id) === String(id));
    setProjectItem(found);
  }, [id, t]);

  // Матни тавсифро ба параграфҳо ҷудо мекунем (агар text1, text2 бошанд)
  const paragraphs = projectItem?.descriptions || [projectItem?.description];

  return (
    <div className="w-full bg-[#F5F7F6] dark:bg-[#0A0F0D] min-h-screen text-[#111827] dark:text-gray-100 transition-colors duration-300">
      
      {/* Upper Hero Section */}
      <div className="mdMUI:pt-[140px] pt-[100px] bg-white dark:bg-[#131916] transition-colors duration-300 border-b border-gray-200/60 dark:border-gray-800">
        <div className="2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto pb-12">
          <Grid container spacing={4} alignItems="center">
            
            {/* Mobile Image (Appears first on small screens) */}
            <Grid
              item
              xs={12}
              sx={{ display: { lg: "none", md: "none", sm: "block", xs: "block" } }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <img
                  src={projectItem?.image}
                  alt={projectItem?.title || "Project"}
                  className="w-full h-auto object-cover max-h-[350px]"
                />
              </motion.div>
            </Grid>

            {/* Title & Info */}
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between h-full pr-0 mdMUI:pr-6"
              >
                <div>
                  {/* Breadcrumb Navigation */}
                  <div className="font-medium text-[16px] mdMUI:text-[18px] text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-4">
                    <Link
                      to="/projects"
                      className="hover:text-[#22994A] dark:hover:text-[#25b558] transition-colors"
                    >
                      {t("project.title")}
                    </Link>
                    <span>/</span>
                    <span className="text-gray-800 dark:text-gray-200 truncate max-w-[200px]">
                      {projectItem?.title}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="font-bold text-[24px] sm:text-[32px] mdMUI:text-[38px] leading-tight text-gray-900 dark:text-gray-50 mt-2">
                    {projectItem?.title}
                  </h1>
                </div>

                {/* Optional Link Button */}
                {projectItem?.link && (
                  <a
                    target="_blank"
                    href={projectItem.link}
                    rel="noreferrer"
                    className="mt-6 inline-block text-[#22994A] dark:text-[#25b558] hover:underline font-semibold text-[18px]"
                  >
                    {projectItem.link}
                  </a>
                )}
              </motion.div>
            </Grid>

            {/* Desktop Image */}
            <Grid
              item
              lg={6}
              md={6}
              sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
            >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800"
              >
                <img
                  src={projectItem?.image}
                  alt={projectItem?.title || "Project"}
                  className="w-full h-auto object-cover max-h-[450px]"
                />
              </motion.div>
            </Grid>

          </Grid>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-[60px] mdMUI:py-[90px]">
        <div className="2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto">
          
          {/* Description Paragraphs with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6 text-[16px] mdMUI:text-[20px] leading-relaxed text-gray-700 dark:text-gray-300 max-w-[1100px]"
          >
            {paragraphs?.map((text, idx) => (
              text && <p key={idx}>{text}</p>
            ))}
          </motion.div>

          {/* Project Details Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-[50px] mdMUI:mt-[80px] pt-8 border-t border-gray-300 dark:border-gray-800"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px] bg-white dark:bg-[#131916] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                  {t("project.customerText")}
                </span>
                <span className="font-semibold text-[16px] mdMUI:text-[18px] text-gray-900 dark:text-gray-100">
                  {projectItem?.client || projectItem?.customer || "—"}
                </span>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                  {t("project.category")}
                </span>
                <span className="font-semibold text-[16px] mdMUI:text-[18px] text-[#22994A] dark:text-[#25b558]">
                  {projectItem?.category || "—"}
                </span>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                  {t("project.year")}
                </span>
                <span className="font-semibold text-[16px] mdMUI:text-[18px] text-gray-900 dark:text-gray-100">
                  {projectItem?.year || "—"}
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}

export default ProjectCard;