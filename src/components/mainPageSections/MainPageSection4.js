import { useEffect, useState } from "react";
import icon_all from "../../images/fi_list (1).png";
import icon_shield from "../../images/u_shield.png";
import icon_briefcase from "../../images/u_briefcase-alt.png";
import icon_graduation from "../../images/u_graduation-cap.png";
import icon_all_white from "../../images/fi_list.png";
import icon_shield_white from "../../images/u_shield (1).png";
import icon_briefcase_white from "../../images/u_briefcase-alt (1).png";
import icon_graduation_white from "../../images/u_graduation-cap (1).png";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setProjectItem } from "../../Redux/reducers/LocallhostStateIct";
import { getProjects } from "../../const/projects";

function MainPageSection4() {
  const [career_state, setCareerState] = useState(1);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [projectCardsFilter, setProjectCardsFilter] = useState([]);

  const projectsCards = () => {
    const cardArray = getProjects(t);
    if (career_state === 1) {
      setProjectCardsFilter(cardArray);
    } else if (career_state === 2) {
      setProjectCardsFilter(
        cardArray.filter((e) => {
          return (
            e.category === "Госсектор" ||
            e.category === "Public sector" ||
            e.category === "Сектори давлатӣ"
          );
        })
      );
    } else if (career_state === 3) {
      setProjectCardsFilter(
        cardArray.filter((e) => {
          return (
            e.category === "Бизнес" ||
            e.category === "Business" ||
            e.category === "Корчалонӣ"
          );
        })
      );
    } else {
      setProjectCardsFilter(
        cardArray.filter((e) => {
          return (
            e.category === "Образование" ||
            e.category === "Education" ||
            e.category === "Таҳсил"
          );
        })
      );
    }
  };

  useEffect(() => {
    projectsCards();
  }, [t, career_state]);

  return (
    <div className="w-full bg-[rgba(242,242,242,1)] min-h-[1245px] mdMUI:pt-[150px] pt-[72px]">
      <div className="">
        <div className="w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[56px] md-[16px]">
          <h1 className="text-[rgba(73,73,73,1)]">{t("project.title")}</h1>
        </div>
        <div className="w-full overflow-x-auto">
          <div
            className={`flex flex-row ${
              t("project.text1") === "Все"
                ? "max-w-[820px] min-w-[450px]"
                : t("project.text1") === "All"
                ? "max-w-[810px] min-w-[450px]"
                : "max-w-[900px] min-w-[498px]"
            }  mx-auto mb-[20px] mdMUI:text-[22px] text-[12px] font-[500] mdMUI:leading-[26.82px] leading-[14.63px]`}
          >
            {career_state === 1 ? (
              <button
                onClick={() => setCareerState(1)}
                style={{
                  background:
                    "linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)",
                }}
                className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[16px]"
              >
                <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                  <img
                    src={icon_all_white}
                    alt="icon_all_white"
                    width="100%"
                    height="auto"
                  />
                </div>
                {/* Все */}
                {t("project.text1")}
              </button>
            ) : (
              <div className="button_project">
                <button
                  onClick={() => setCareerState(1)}
                  className="button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_all_white}
                      alt="icon_all_white"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Все */}
                  {t("project.text1")}
                </button>
                <button
                  onClick={() => setCareerState(1)}
                  className="button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_all}
                      alt="icon_all"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Все */}
                  {t("project.text1")}
                </button>
              </div>
            )}
            {career_state === 2 ? (
              <button
                onClick={() => setCareerState(2)}
                style={{
                  background:
                    "linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)",
                }}
                className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
              >
                <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                  <img
                    src={icon_shield_white}
                    alt="icon_shield_white"
                    width="100%"
                    height="auto"
                  />
                </div>
                {/* Госсектор */}

                {t("project.text2")}
              </button>
            ) : (
              <div className="button_project">
                <button
                  onClick={() => setCareerState(2)}
                  className="button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_shield_white}
                      alt="icon_shield_white"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Госсектор */}

                  {t("project.text2")}
                </button>
                <button
                  onClick={() => setCareerState(2)}
                  className="button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_shield}
                      alt="icon_shield"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Госсектор */}

                  {t("project.text2")}
                </button>
              </div>
            )}
            {career_state === 3 ? (
              <button
                onClick={() => setCareerState(3)}
                style={{
                  background:
                    "linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)",
                }}
                className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
              >
                <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                  <img
                    src={icon_briefcase_white}
                    alt="icon_briefcase_white"
                    width="100%"
                    height="auto"
                  />
                </div>
                {/* Бизнес */}
                {t("project.text3")}
              </button>
            ) : (
              <div className="button_project">
                <button
                  onClick={() => setCareerState(3)}
                  className="button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_briefcase_white}
                      alt="icon_briefcase_white"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Бизнес */}
                  {t("project.text3")}
                </button>
                <button
                  onClick={() => setCareerState(3)}
                  className="button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_briefcase}
                      alt="icon_briefcase"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Бизнес */}
                  {t("project.text3")}
                </button>
              </div>
            )}
            {career_state === 4 ? (
              <button
                onClick={() => setCareerState(4)}
                style={{
                  background:
                    "linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)",
                }}
                className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
              >
                <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                  <img
                    src={icon_graduation_white}
                    alt="icon_graduation_white"
                    width="100%"
                    height="auto"
                  />
                </div>
                {/* Образование */}
                {t("project.text4")}
              </button>
            ) : (
              <div className="button_project">
                <button
                  onClick={() => setCareerState(4)}
                  className="button_project_image mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_graduation_white}
                      alt="icon_graduation_white"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Образование */}
                  {t("project.text4")}
                </button>
                <button
                  onClick={() => setCareerState(4)}
                  className="button_project_image2 mdMUI:mt-[-58.81px] mt-[-40px] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]"
                >
                  <div className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px] w-[16px] h-[16px]">
                    <img
                      src={icon_graduation}
                      alt="icon_graduation"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  {/* Образование */}
                  {t("project.text4")}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mdMUI:mt-[64px] mt-[16px] text-[rgba(73,73,73,1)]          2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto">
          <Grid container spacing={{ lg: 4, md: 3, sm: 3, xs: 3 }}>
            {projectCardsFilter.map((e) => {
              return (
                <Grid key={e.id} item lg="3" md="4" sm="6" xs="12">
                  <Link
                    to={`/project/${e.id}`}
                    onClick={() => dispatch(setProjectItem(e))}
                    className="project_card_hover hover:shadow hover:shadow-green-400"
                  >
                    <div className="project_card_hovet w-full lgMUI:min-h-[439px] mdMUI:min-h-[505px] min-h-[470px] bg-white rounded-[16px]">
                      <div className="">
                        <img
                          src={e.image}
                          alt={`e.${e.id}`}
                          width="100%"
                          className=" my-auto rounded-t-[16px]"
                        />
                      </div>
                      <div className="p-[16px] ">
                        <h4 className="textLimitProject font-[600] mdMUI:text-[16px] smMUI:text-[14px] text-[16px] mdMUI:leading-[19.5px] smMUI:leading-[17.07px] leading-[19.5px]">
                          {e.title}
                          <p className="mdMUI:mt-[16px] smMUI:mt-[8px] mt-[16px] font-[500] mdMUI:text-[14px] smMUI:text-[12px] text-[14px] mdMUI:leading-[17.07px] smMUI:leading-[15.5px] leading-[17.07px]">
                            {e.description}
                          </p>
                        </h4>
                      </div>
                    </div>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MainPageSection4;
