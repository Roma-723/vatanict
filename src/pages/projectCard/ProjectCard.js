import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import { getProjects } from "../../const/projects";

function ProjectCard() {
  const [project_item, setProject_item] = useState({});
  const { id } = useParams();
  const { t } = useTranslation();

  console.log(project_item);

  const projectsCards = () => {
    const cardArray = getProjects(t);
    setProject_item(cardArray?.find((elem) => elem.id + "" === id));
  };

  useEffect(() => {
    projectsCards();
  }, [t]);

  return (
    <div className="w-full bg-[rgba(242,242,242,1)] 2xl:min-h-[80.8vh]">
      <div className="">
        <div className="mdMUI:pt-[157px] pt-[24px] mdMUI:bg-white">
          <div className="       2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto">
            <Grid container>
              <Grid
                item
                lg="6"
                md="6"
                sm="12"
                xs="12"
                sx={{
                  display: { lg: "none", md: "none", sm: "block", xs: "block" },
                }}
              >
                <div className="w-full h-full">
                  <img
                    src={project_item?.image}
                    alt="project_item"
                    className="w-full h-full"
                  />
                </div>
              </Grid>
              <Grid item lg="6" md="6" sm="12" xs="12">
                <div className="pr-5 flex flex-col w-full h-full justify-between">
                  <a
                    href={project_item?.link !== "" ? project_item?.link : "#"}
                    className="text-[rgba(34,153,74,1)] text-[20px] leading-[24.38px] font-[600] mt-[8px] block mdMUI:hidden"
                  >
                    {project_item?.link}
                  </a>
                  <div>
                    <div className="font-[500] text-[22px] leading-[26.82px] text-[rgba(123,123,123,1)] mdMUI:block flex">
                      <Link to="/projects">{t("project.title")} / </Link>
                      <Link></Link>
                    </div>
                    <h3 className="max-w-[497px] font-[600] mdMUI:text-[30px] text-[18px] mdMUI:leading-[36.57px] leading-[21.94px] mdMUI:mt-[67px] mt-[16px]">
                      {project_item?.title}
                    </h3>
                  </div>
                  <a
                    target="_blank"
                    href={project_item?.item}
                    rel="noreferrer"
                    className="cursor-pointer hover:text-[rgba(34,153,74,0.5)] active:text-[rgba(34,153,74,0.8)] text-[rgba(34,153,74,1)] text-[20px] leading-[24.38px] font-[600] mdMUI:mb-[34px] mdMUI:block hidden"
                  >
                    {project_item?.link}
                  </a>
                </div>
              </Grid>
              <Grid
                item
                lg="6"
                md="6"
                sm="12"
                xs="12"
                sx={{
                  display: { lg: "block", md: "block", sm: "none", xs: "none" },
                }}
              >
                <div className="w-full h-full pt-[68px]">
                  <img
                    src={project_item?.image}
                    alt="project_item"
                    className="w-full h-full"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="mdMUI:pt-[120px] pt-[16px] mdMUI:pb-[219px] pb-[105px] text-[rgba(73,73,73,1)]">
          <div className="    2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto">
            <div>
              <h1 className="font-[400] mdMUI:text-[24px] text-[16px] mdMUI:leading-[29.26px] leading-[19.5px] flex flex-col gap-5">
                {project_item?.description}
              </h1>
            </div>
            <div className="mdMUI:pt-[72px] pt-[36px]">
              {/* <Grid container>
                    <Grid item lg='12' md='12' sm='12' xs='12'>
                      <div className='mdMUI:border-r-[2px] mdMUI:border-t-[0] border-t-[2px] border-[rgba(124,124,124,1)]'>
                        <h3 className='font-[400] mdMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px] leadinf-[19.5px] mb-[12px]'>{t('project.customerText')}: <span className='font-[600]'>{project_item?.customer}</span></h3>
                        <h3 className='font-[400] mdMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px] leadinf-[19.5px] mb-[12px]'>{t('project.category')}: <span className='font-[600]'>{project_item?.category}</span></h3>
                        <h3 className='font-[400] mdMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px] leadinf-[19.5px] mb-[12px]'>{t("project.year")}: <span className='font-[600]'>{project_item?.year}</span></h3>
                      </div>
                    </Grid>
                  </Grid> */}
              <div className="grid grid-cols-[auto_1fr]">
                <div className="mdMUI:border-r-[2px] pr-5 mdMUI:border-t-[0] border-t-[2px] border-[rgba(124,124,124,1)]">
                  <h3 className="font-[400] mdMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px] leadinf-[19.5px] mb-[12px]">
                    {t("project.customerText")}:{" "}
                    <span className="font-[600]">{project_item?.customer}</span>
                  </h3>
                  <h3 className="font-[400] mdMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px] leadinf-[19.5px] mb-[12px]">
                    {t("project.category")}:{" "}
                    <span className="font-[600]">{project_item?.category}</span>
                  </h3>
                  <h3 className="font-[400] mdMUI:text-[20px] text-[16px] mdMUI:leading-[24.38px] leadinf-[19.5px] mb-[12px]">
                    {t("project.year")}:{" "}
                    <span className="font-[600]">{project_item?.year}</span>
                  </h3>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
