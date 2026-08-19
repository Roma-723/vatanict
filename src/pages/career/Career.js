import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import icon_all from '../../images/fi_list (1).png';
import icon_back_end from '../../images/u_server.png';
import icon_front_end from '../../images/u_laptop.png';
import icon_modile from '../../images/u_mobile-android.png';
import icon_internship from '../../images/u_users-alt.png';
import icon_education from '../../images/u_book-open (1).png';
import icon_location from '../../images/u_location-point.png';

import icon_all_white from '../../images/fi_list.png';
import icon_back_end_white from '../../images/u_server (1).png';
import icon_front_end_white from '../../images/u_laptop (1).png';
import icon_modile_white from '../../images/u_mobile-android (1).png';
import icon_internship_white from '../../images/u_users-alt (1).png';
import icon_education_white from '../../images/u_book-open.png';

import { Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';

function Career() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [career_state, setCareerState] = useState(5);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false); // ✅ новое состояние для ошибки

    // =========================
    // SEND FORM
    // =========================
    const sendMessage = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const message = {
            name: form.name.value,
            phonenumber: form.phonenumber.value,
            email: form.email.value,
            company: form.company.value,
            message: form.message.value,
        };

        const config = {
            SecureToken: 'YOUR_SECURE_TOKEN',

            To: 'xbox.series.s@yopmail.com',

            From: message.email,

            Subject: `Hello we ${message.company} want say ${message.message}`,

            Body: `
                Name: ${message.name}
                Phone: ${message.phonenumber}
                Email: ${message.email}
                Company: ${message.company}

                Message:
                ${message.message}
            `,
        };

        try {
            if (!window.Email) {
                throw new Error('Email library is not loaded');
            }

            await window.Email.send(config);

            // Open success modal
            setIsSuccess(true);

            // Clear form
            form.reset();
        } catch (error) {
            console.error('Хатогӣ дар вақти фиристодан:', error);
            setIsError(true); // ✅ вместо alert показываем модалку ошибки
        }
    };

    return (
        <div className="w-full bg-[rgba(242,242,242,1)] dark:bg-[#121212] 2xl:min-h-[80.8vh] mdMUI:pt-[192px] pt-[36px] transition-colors duration-300">
            {/* =========================
                SEO
            ========================= */}
            <Helmet>
                <title>Vatan ICT</title>
                <meta
                    name="description"
                    content="Мы предоставляем возможность поработать в команде с ведущими разработчиками и пройти стажировку в интересных проектах."
                />
            </Helmet>

            {/* =========================
                PAGE TITLE
            ========================= */}
            <div className="w-full text-center mdMUI:text-[48px] text-[24px] leading-[58.5px] font-[600] mdMUI:mb-[45px] mb-[24px]">
                <h1 className="text-[rgba(73,73,73,1)] dark:text-white">
                    {t('career.title')}
                </h1>
            </div>

            {/* =========================
                CAREER FILTERS
            ========================= */}
            <div className="w-full overflow-x-auto mdMUI:mb-[58px] mb-[30px]">
                <div
                    className={`
                        flex
                        ${
                            t('project.text1') === 'Все'
                                ? 'mdMUI:min-w-[1240px] min-w-[690px] max-w-[1240px]'
                                : t('project.text1') === 'All'
                                ? 'mdMUI:min-w-[1250px] min-w-[694px] max-w-[1150px]'
                                : 'mdMUI:min-w-[1430px] min-w-[791px] max-w-[1430px]'
                        }
                        mb-[10px]
                        mdMUI:text-[22px]
                        text-[12px]
                        font-[500]
                        mdMUI:leading-[26.82px]
                        leading-[14.63px]
                        mx-auto
                        pl-[16px]
                    `}
                >
                    {/* ALL */}
                    {career_state === 1 ? (
                        <button
                            type="button"
                            onClick={() => setCareerState(1)}
                            style={{
                                background:
                                    'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                            }}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[16px]"
                        >
                            <img
                                src={icon_all_white}
                                alt="icon_all_white"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            {t('project.text1')}
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setCareerState(1)}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white dark:bg-[#1E1E1E] flex items-center justify-center text-[rgba(73,73,73,1)] dark:text-gray-200 ml-[16px]"
                        >
                            <img
                                src={icon_all}
                                alt="icon_all"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            {t('project.text1')}
                        </button>
                    )}

                    {/* BACK-END */}
                    {career_state === 2 ? (
                        <button
                            type="button"
                            onClick={() => setCareerState(2)}
                            style={{
                                background:
                                    'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                            }}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
                        >
                            <img
                                src={icon_back_end_white}
                                alt="icon_back_end_white"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            Back-end
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setCareerState(2)}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white dark:bg-[#1E1E1E] flex items-center justify-center text-[rgba(73,73,73,1)] dark:text-gray-200 ml-[4px]"
                        >
                            <img
                                src={icon_back_end}
                                alt="icon_back_end"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            Back-end
                        </button>
                    )}

                    {/* FRONT-END */}
                    {career_state === 3 ? (
                        <button
                            type="button"
                            onClick={() => setCareerState(3)}
                            style={{
                                background:
                                    'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                            }}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
                        >
                            <img
                                src={icon_front_end_white}
                                alt="icon_front_end_white"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            Front-end
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setCareerState(3)}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white dark:bg-[#1E1E1E] flex items-center justify-center text-[rgba(73,73,73,1)] dark:text-gray-200 ml-[4px]"
                        >
                            <img
                                src={icon_front_end}
                                alt="icon_front_end"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            Front-end
                        </button>
                    )}

                    {/* MOBILE */}
                    {career_state === 4 ? (
                        <button
                            type="button"
                            onClick={() => setCareerState(4)}
                            style={{
                                background:
                                    'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                            }}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
                        >
                            <img
                                src={icon_modile_white}
                                alt="icon_modile_white"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            Mobile
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setCareerState(4)}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white dark:bg-[#1E1E1E] flex items-center justify-center text-[rgba(73,73,73,1)] dark:text-gray-200 ml-[4px]"
                        >
                            <img
                                src={icon_modile}
                                alt="icon_modile"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            Mobile
                        </button>
                    )}

                    {/* INTERNSHIP */}
                    {career_state === 5 ? (
                        <button
                            type="button"
                            onClick={() => setCareerState(5)}
                            style={{
                                background:
                                    'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                            }}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
                        >
                            <img
                                src={icon_internship_white}
                                alt="icon_internship_white"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            {t('career.text5')}
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setCareerState(5)}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white dark:bg-[#1E1E1E] flex items-center justify-center text-[rgba(73,73,73,1)] dark:text-gray-200 ml-[4px]"
                        >
                            <img
                                src={icon_internship}
                                alt="icon_internship"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            {t('career.text5')}
                        </button>
                    )}

                    {/* EDUCATION */}
                    {career_state === 6 ? (
                        <button
                            type="button"
                            onClick={() => setCareerState(6)}
                            style={{
                                background:
                                    'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                            }}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]"
                        >
                            <img
                                src={icon_education_white}
                                alt="icon_education_white"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            {t('career.text6')}
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setCareerState(6)}
                            className="mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white dark:bg-[#1E1E1E] flex items-center justify-center text-[rgba(73,73,73,1)] dark:text-gray-200 ml-[4px]"
                        >
                            <img
                                src={icon_education}
                                alt="icon_education"
                                className="mdMUI:mr-[10px] mr-[4px] mdMUI:w-[24px] mdMUI:h-[24px]"
                                width="16"
                                height="16"
                            />
                            {t('career.text6')}
                        </button>
                    )}
                </div>
            </div>

            {/* =========================
                CONTENT
            ========================= */}
            <div>
                {/* JOBS */}
                {[1, 2, 3, 4].includes(career_state) ? (
                    <div className="2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto mdMUI:pb-[150px] pb-[120px]">
                        <Grid container>
                            <Grid item lg={10} md={10} sm={12} xs={12}>
                                <div
                                    onClick={() => navigate('/career/1')}
                                    className="cursor-pointer rounded-[8px] mdMUI:mb-[24px] mb-[8px] w-full border-[0px_4px_6px] border-[rgba(118,118,118,0.25)] dark:border-[#333] min-h-[275px] bg-white dark:bg-[#1E1E1E] mdMUI:px-[49px] px-[24px] mdMUI:py-[18px] py-[16px] text-[rgba(73,73,73,1)] dark:text-gray-200"
                                >
                                    <div className="mdMUI:mb-[18px] mb-[16px] mdMUI:flex items-center">
                                        <h1 className="font-[600] mdMUI:text-[24px] text-[18px] leading-[48.49px] mdMUI:leading-[64.66px] mr-[20px] dark:text-white">
                                            Android-разработчик
                                        </h1>
                                        <div className="text-[rgba(139,139,139,1)] dark:text-gray-400 flex items-center">
                                            <img
                                                src={icon_location}
                                                alt="icon_location"
                                                width="24"
                                                height="24"
                                                className="mr-[4px]"
                                            />
                                            <h3 className="mdMUI:text-[20px] text-[14px] mdMUI:leading-[58.88px] leading-[37.72px]">
                                                Душанбе
                                            </h3>
                                        </div>
                                    </div>
                                    <h5 className="font-[400] mdMUI:text-[16px] text-[14px] mdMUI:leading-[19.5px] leading-[17.07px] mdMUI:mb-[24px] mb-[16px] mdMUI:hidden block textLimit2">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                                    </h5>
                                    <Link
                                        to="/career/1"
                                        onClick={(event) => event.stopPropagation()}
                                        className="decoration-solid underline text-[rgba(34,153,74,1)] dark:text-[#4ade80] font-[500] mdMUI:text-[16px] text-[14px] mdMUI:leading-[21.66px] leading-[18.96px]"
                                    >
                                        Подробнее
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                ) : career_state === 5 ? (
                    /* INTERNSHIP FORM */
                    <div className="mdMUI:bg-white dark:mdMUI:bg-[#121212]">
                        <div className="w-full mdMUI:pt-[75px] pt-[0px] mdMUI:pb-[150px] pb-[120px] 2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto">
                            <Grid container>
                                {/* LEFT */}
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <div className="text-[rgba(73,73,73,1)] dark:text-gray-200 pr-5 mdMUI:pb-0 pb-[24px]">
                                        <h1 className="font-[600] mdMUI:text-[48px] text-[30px] mdMUI:leading-[58.51px] leading-[36.57px] mdMUI:pb-[54px] pb-[36px] mdMUI:max-w-[320px] max-w-[200px] dark:text-white">
                                            {t('career.card5.title1')}
                                            <span className="text-[rgba(34,153,74,1)] dark:text-[#4ade80]">
                                                {t('career.card5.title2')}
                                            </span>
                                        </h1>
                                        <p className="mdMUI:text-[16px] text-[12px] font-[400] mdMUI:leading-[23.66px] leading-[17.75px] max-w-[472px]">
                                            {t('career.card5.text')}.
                                        </p>
                                    </div>
                                </Grid>

                                {/* RIGHT FORM */}
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <div className="lgMUI:mr-[18%] mdMUI:mr-[25%]">
                                        <form onSubmit={sendMessage}>
                                            <input
                                                required
                                                name="name"
                                                placeholder={t('contact.name')}
                                                className="w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] dark:border-[#444] dark:bg-[#1E1E1E] dark:text-white mdMUI:mb-[24px] mb-[8px] rounded-[100px]"
                                            />
                                            <InputMask
                                                name="phonenumber"
                                                mask="99 999 9999"
                                                placeholder={t('contact.phoneNumber')}
                                            >
                                                {(inputProps) => (
                                                    <input
                                                        required
                                                        {...inputProps}
                                                        className="w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] dark:border-[#444] dark:bg-[#1E1E1E] dark:text-white mdMUI:mb-[24px] mb-[8px] rounded-[100px]"
                                                    />
                                                )}
                                            </InputMask>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder={t('contact.email')}
                                                className="w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] dark:border-[#444] dark:bg-[#1E1E1E] dark:text-white mdMUI:mb-[24px] mb-[8px] rounded-[100px]"
                                            />
                                            <input
                                                required
                                                name="company"
                                                placeholder={t('contact.company')}
                                                className="w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] dark:border-[#444] dark:bg-[#1E1E1E] dark:text-white mdMUI:mb-[24px] mb-[8px] rounded-[100px]"
                                            />
                                            <textarea
                                                rows="8"
                                                required
                                                name="message"
                                                placeholder={t('contact.message')}
                                                className="w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] dark:border-[#444] dark:bg-[#1E1E1E] dark:text-white mdMUI:mb-[24px] mb-[8px] rounded-[20px]"
                                            />
                                            <button
                                                type="submit"
                                                style={{
                                                    background:
                                                        'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)',
                                                }}
                                                className="w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[20px] text-[18px] mdMUI:leading-[24.38px] leading-[21.94px] transition-all duration-300 hover:scale-[1.01]"
                                            >
                                                {t('contact.send')}
                                            </button>
                                        </form>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                ) : (
                    /* EDUCATION */
                    <div className="mdMUI:bg-white dark:mdMUI:bg-[#121212]">
                        <div className="w-full mdMUI:pt-[75px] pt-[0px] mdMUI:pb-[150px] pb-[120px] 2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto">
                            <Grid container>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <div className="text-[rgba(73,73,73,1)] dark:text-gray-200 pr-5 mdMUI:pb-0 pb-[24px]">
                                        <h1 className="font-[600] mdMUI:text-[48px] text-[30px] mdMUI:leading-[58.51px] leading-[36.57px] mdMUI:pb-[54px] pb-[36px] mdMUI:max-w-[320px] max-w-[200px] dark:text-white">
                                            {t('career.card6.title1')}
                                            <span className="text-[rgba(34,153,74,1)] dark:text-[#4ade80]">
                                                {t('career.card6.title2')}
                                            </span>
                                        </h1>
                                        <p className="mdMUI:text-[16px] text-[12px] font-[400] mdMUI:leading-[23.66px] leading-[17.75px] max-w-[472px]">
                                            {t('career.card6.text')}
                                        </p>
                                    </div>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <div className="lgMUI:mr-[18%] mdMUI:mr-[25%]"></div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                )}
            </div>

            {/* ==================================================
                SUCCESS MODAL
            ================================================== */}
            {isSuccess && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[8px] px-[20px]"
                    onClick={() => setIsSuccess(false)}
                >
                    <div
                        onClick={(event) => event.stopPropagation()}
                        className="w-full max-w-[675px] rounded-[34px] bg-[#18181c] px-[40px] py-[55px] text-center shadow-2xl max-[600px]:px-[24px] max-[600px]:py-[40px]"
                    >
                        {/* Успех – зелёная иконка */}
                        <div className="mx-auto mb-[32px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#22a34a] shadow-[0_0_30px_rgba(34,163,74,0.35)] max-[600px]:h-[70px] max-[600px]:w-[70px]">
                            <svg
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 12.5L9.5 17L19 7"
                                    stroke="white"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h2 className="mb-[12px] text-[38px] font-[700] leading-[1.2] text-white max-[600px]:text-[28px]">
                            {t('contact.successTitle')}
                        </h2>
                        <p className="mx-auto mb-[40px] max-w-[500px] text-[20px] font-[400] leading-[1.5] text-[#aeb0bd] max-[600px]:text-[16px]">
                            {t('contact.successSubtitle')}
                        </p>
                        <button
                            type="button"
                            onClick={() => setIsSuccess(false)}
                            className="mx-auto block w-full max-w-[250px] rounded-[16px] bg-[#22a34a] px-[30px] py-[17px] text-[20px] font-[600] text-white shadow-[0_10px_25px_rgba(34,163,74,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#249b4a] active:scale-[0.98] max-[600px]:text-[18px]"
                        >
                            {t('contact.close')}
                        </button>
                    </div>
                </div>
            )}

            {/* ==================================================
                ERROR MODAL (НОВОЕ)
            ================================================== */}
            {isError && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[8px] px-[20px]"
                    onClick={() => setIsError(false)}
                >
                    <div
                        onClick={(event) => event.stopPropagation()}
                        className="w-full max-w-[675px] rounded-[34px] bg-[#18181c] px-[40px] py-[55px] text-center shadow-2xl max-[600px]:px-[24px] max-[600px]:py-[40px]"
                    >
                        {/* Ошибка – красная иконка */}
                        <div className="mx-auto mb-[32px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#e53e3e] shadow-[0_0_30px_rgba(229,62,62,0.35)] max-[600px]:h-[70px] max-[600px]:w-[70px]">
                            <svg
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                    stroke="white"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h2 className="mb-[12px] text-[38px] font-[700] leading-[1.2] text-white max-[600px]:text-[28px]">
                            {t('contact.errorTitle')}
                        </h2>
                        <p className="mx-auto mb-[40px] max-w-[500px] text-[20px] font-[400] leading-[1.5] text-[#aeb0bd] max-[600px]:text-[16px]">
                            {t('contact.errorSubtitle')}
                        </p>
                        <button
                            type="button"
                            onClick={() => setIsError(false)}
                            className="mx-auto block w-full max-w-[250px] rounded-[16px] bg-[#e53e3e] px-[30px] py-[17px] text-[20px] font-[600] text-white shadow-[0_10px_25px_rgba(229,62,62,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c53030] active:scale-[0.98] max-[600px]:text-[18px]"
                        >
                            {t('contact.close')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Career;