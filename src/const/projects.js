import image_mvd1 from "./../images/мвд.webp";
import image_edonish from "./../images/image edonish.webp";
import image_mvd2 from "./../images/photo_2023-02-24_17-23-40.webp";
import image_mvd3 from "./../images/photo_2023-02-24_16-44-18.webp";
import image_mm from "./../images/photo_2023-02-24_01-42-40.webp";
import image_edonishmarket from "./../images/marketEdonish.webp";
import image_sistem from "./../images/image sistem.webp";
import image_mmt from "./../images/image _ mmt.webp";
import image_kolej from "./../images/image.jpg";
import image_agenti from "./../images/logo-agenti.png";

export function getProjects(t) {
  const cardArray = [
    {
      id: 1,
      image: image_mvd1,
      title: t("project.card1.title"),
      description: (
        <>
          <p>{t("project.card1.text1")}</p>
          <p>{t("project.card1.text2")}</p>
          <p>{t("project.card1.text3")}</p>
          <p>{t("project.card1.text4")}</p>
          <p>{t("project.card1.text5")}</p>
          <p>{t("project.card1.text6")}</p>
        </>
      ),
      customer: t("project.card1.customer"),
      year: 2021,
      category: t("project.text2"),
      link: "",
    },
    {
      id: 2,
      image: image_edonish,
      title: t("project.card2.title"),
      description: (
        <>
          <p>{t("project.card2.text1")}</p>
          <p>{t("project.card2.text2")}</p>
          <p>{t("project.card2.text3")}</p>
          <p>{t("project.card2.text4")}</p>
          <p>{t("project.card2.text5")}</p>
          <p>{t("project.card2.text6")}</p>
        </>
      ),
      customer: t("project.card2.customer"),
      year: 2020,
      category: t("project.text4"),
      link: "https://edonish.tj/",
    },
    {
      id: 3,
      image: image_mvd2,
      title: t("project.card3.title"),
      description: (
        <>
          <p>{t("project.card3.text1")}</p>
          <p>{t("project.card3.text2")}</p>
          <p>{t("project.card3.text3")}</p>
          <p>{t("project.card3.text4")}</p>
          <p>{t("project.card3.text5")}</p>
          <p>{t("project.card3.text6")}</p>
        </>
      ),
      customer: t("project.card3.customer"),
      year: 2023,
      category: t("project.text2"),
      link: "",
    },
    {
      id: 4,
      image: image_mvd3,
      title: t("project.card4.title"),
      description: (
        <>
          <p>{t("project.card4.text1")}</p>
          <p>{t("project.card4.text2")}</p>
          <p>{t("project.card4.text3")}</p>
          <p>{t("project.card4.text4")}</p>
          <p>{t("project.card4.text5")}</p>
          <p>{t("project.card4.text6")}</p>
        </>
      ),
      customer: t("project.card4.customer"),
      year: 2023,
      category: t("project.text2"),
      link: "",
    },
    {
      id: 5,
      image: image_mm,
      title: t("project.card5.title"),
      description: (
        <>
          <p>{t("project.card5.text1")}</p>
          <p>{t("project.card5.text2")}</p>
          <p>{t("project.card5.text3")}</p>
          <p>{t("project.card5.text4")}</p>
          <p>{t("project.card5.text5")}</p>
          <p>{t("project.card5.text6")}</p>
        </>
      ),
      customer: t("project.card5.customer"),
      year: 2015,
      category: t("project.text2"),
      link: "",
    },
    {
      id: 6,
      image: image_edonishmarket,
      title: t("project.card6.title"),
      description: (
        <>
          <p>{t("project.card6.text1")}</p>
          <p>{t("project.card6.text2")}</p>
          <p>{t("project.card6.text3")}</p>
          <p>{t("project.card6.text4")}</p>
          <p>{t("project.card6.text5")}</p>
          <p>{t("project.card6.text6")}</p>
        </>
      ),
      customer: t("project.card6.customer"),
      year: 2023,
      category: t("project.text3"),
      link: "",
    },
    {
      id: 7,
      image: image_sistem,
      title: t("project.card7.title"),
      description: (
        <>
          <p>{t("project.card7.text1")}</p>
          <p>{t("project.card7.text2")}</p>
          <p>{t("project.card7.text3")}</p>
          <p>{t("project.card7.text4")}</p>
          <p>{t("project.card7.text5")}</p>
          <p>{t("project.card7.text6")}</p>
        </>
      ),
      customer: t("project.card7.customer"),
      year: 2022,
      category: t("project.text4"),
      link: "",
    },
    {
      id: 8,
      image: image_mmt,
      title: t("project.card8.title"),
      description: (
        <>
          <p>{t("project.card8.text1")}</p>
          <p>{t("project.card8.text2")}</p>
          <p>{t("project.card8.text3")}</p>
          <p>{t("project.card8.text4")}</p>
          <p>{t("project.card8.text5")}</p>
          <p>{t("project.card8.text6")}</p>
        </>
      ),
      customer: t("project.card8.customer"),
      year: 2023,
      category: t("project.text2"),
      link: "",
    },
    {
      id: 9,
      image: image_kolej,
      title: t("project.card9.title"),
      description: (
        <>
          <p>{t("project.card9.text1")}</p>
          <p>{t("project.card9.text2")}</p>
          <p>{t("project.card9.text3")}</p>
          <p>{t("project.card9.text4")}</p>
          <p>{t("project.card9.text5")}</p>
          <p>{t("project.card9.text6")}</p>
        </>
      ),
      customer: t("project.card9.customer"),
      year: 2025,
      category: t("project.text4"),
      link: "https://platform.kvkd.tj",
    },
    {
      id: 10,
      image: image_agenti,
      title: t("project.card10.title"),
      description: (
        <>
          <p>{t("project.card10.text1")}</p>
          <p>{t("project.card10.text2")}</p>
          <p>{t("project.card10.text3")}</p>
          <p>{t("project.card10.text4")}</p>
          <p>{t("project.card10.text5")}</p>
          <p>{t("project.card10.text6")}</p>
        </>
      ),
      customer: t("project.card10.customer"),
      year: 2025,
      category: t("project.text2"),
      link: "",
    },
  ];
  return cardArray;
}
