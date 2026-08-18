import { Image } from '@mui/icons-material'
import { Grid, MenuItem } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import RichTextEditor from '../../components/richTextEditor/RichTextEditro'
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =   () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function AdminProject() {
    const {t} = useTranslation()
    const [languageInput, setLanguageInput] = useState(1)
    const inputFileRef = useRef(null)
    const [inputImage, setInputImage] = useState(null)

    const handleChangImage = async (event) => {
        if(event.target.files){
            setInputImage(event.target.files[0])
            console.log(inputImage)
        }
    }

    const handleClickFile = () => {
        // console.log(inputFileRef.current)
        inputFileRef.current.click()
    }


    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
      console.log(`file:`,file)
    //   console.log(file.url || file.preview)
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
      <div className=''>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </div>
    );

    
    const postNewProject = (e) => {
        e.preventDefault()
        const category = e.target['category'].value

        const category_tj = 
        category == 'Госсектор' ? 'Сектори давлатӣ' 
        : category == 'Public sector' ? "Сектори давлатӣ"
        : category == 'Сектори давлатӣ' ? 'Сектори давлатӣ'
        : category == 'Бизнес' ? 'Корчалонӣ' 
        : category == 'Business' ? "Корчалонӣ" 
        : category == 'Корчалонӣ' ? 'Корчалонӣ'
        : category == 'Образование' ? 'Таҳсил' 
        : category == 'Education' ? "Таҳсил" 
        : category == 'Таҳсил' ? 'Таҳсил' : '444444444'
        
        const category_ru = 
        category == 'Сектори давлатӣ' ? 'Госсектор' 
        : category == 'Public sector' ? "Госсектор"
        : category == 'Госсектор' ? 'Госсектор'
        : category == 'Корчалонӣ' ? 'Бизнес' 
        : category == 'Business' ? "Бизнес" 
        : category == 'Бизнес' ? 'Бизнес'
        : category == 'Таҳсил' ? 'Образование' 
        : category == 'Education' ? "Образование"  
        : category == 'Образование' ? 'Образование' : '444444444'

        const category_en = 
        category == 'Сектори давлатӣ' ? 'Public sector' 
        : category == 'Госсектор' ? "Public sector"
        : category == 'Public sector' ? 'Public sector'
        : category == 'Корчалонӣ' ? 'Business' 
        : category == 'Бизнес' ? "Business" 
        : category == 'Business' ? 'Business'
        : category == 'Таҳсил' ? 'Education' 
        : category == 'Образование' ? "Education" 
        : category == 'Education' ? 'Education' : '444444444'

        const body = {
            item_year: e.target['year'].value,
            item_name: e.target['name'].value,
            item_url: e.target['url'].value,
            language_tj: {
                title: e.target['title_tj'].value,
                description_1: e.target['description_1_tj'].value,
                description_2: e.target['description_2_tj'].value,
                description_3: e.target['description_3_tj'].value,
                description_4: e.target['description_4_tj'].value,
                description_5: e.target['description_5_tj'].value,
                description_6: e.target['description_6_tj'].value,
                castomer: e.target['castomer_tj'].value,
                category: category_tj
            },
            language_ru: {
                title: e.target['title_ru'].value,
                description_1: e.target['description_1_ru'].value,
                description_2: e.target['description_2_ru'].value,
                description_3: e.target['description_3_ru'].value,
                description_4: e.target['description_4_ru'].value,
                description_5: e.target['description_5_ru'].value,
                description_6: e.target['description_6_ru'].value,
                castomer: e.target['castomer_ru'].value,
                category: category_ru
            },
            language_en: {
                title: e.target['title_en'].value,
                description_1: e.target['description_1_en'].value,
                description_2: e.target['description_2_en'].value,
                description_3: e.target['description_3_en'].value,
                description_4: e.target['description_4_en'].value,
                description_5: e.target['description_5_en'].value,
                description_6: e.target['description_6_en'].value,
                castomer: e.target['castomer_en'].value,
                category: category_en
            },
        }
        console.log(body)
    }


  return (
    <div className='mdMUI:bg-white mdMUI:pt-10 pt-5 mdMUI:pb-20 pb-10'>
        <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] max-[1150px]:px-[3%] px-[9.17%] max-w-[1440px] mx-auto'>
            <div className='w-full text-center mdMUI:text-[40px] text-[20px] mdMUI:leading-[58.5px] font-[600] mdMUI:mb-[28px] mb-[8px]'>
                <h1 className='text-[rgba(73,73,73,1)]'>{t('project.title')}</h1>
            </div>
            <div className='w-full overflow-x-auto'>
                <form onSubmit={postNewProject}>
                    <div className={`flex flex-row mdMUI:max-w-[700px] ${t('project.text1') == 'Все' ? 'min-w-[300px]': t('project.text1') == 'All' ? "min-w-[300px]" : 'min-w-[300px]'} mb-[20px] mdMUI:text-[22px] text-[12px] font-[500] mdMUI:leading-[26.82px] leading-[14.63px] my-5`}>
                        {
                            languageInput == 1 ? (
                                <button 
                                onClick={()=>setLanguageInput(1)}
                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                className='border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[16px]'>
                                    TJ
                                </button>
                            ) : (
                                <div className='button_project'>
                                <button
                                onClick={()=>setLanguageInput(1)}
                                 className='button_project_image border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]'>
                                    TJ
                                </button>
                                <button
                                onClick={()=>setLanguageInput(1)}
                                 className='button_project_image2 mdMUI:mt-[-59.81px] mt-[-40px] border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[16px]'>
                                    TJ
                                </button>
                                </div>
                            )
                        }
                        {
                            languageInput == 2 ? (
                                <button 
                                onClick={()=>setLanguageInput(2)}
                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                className='border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                    RU
                                </button>
                            ) : (
                                <div className='button_project'>
                                <button
                                onClick={()=>setLanguageInput(2)}
                                 className='button_project_image border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    RU
                                </button>
                                <button
                                onClick={()=>setLanguageInput(2)}
                                 className='button_project_image2 mdMUI:mt-[-59.81px] mt-[-40px] border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    RU
                                </button>
                                </div>
                            )
                        }
                        {
                            languageInput == 3 ? (
                                <button 
                                onClick={()=>setLanguageInput(3)}
                                style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                                className='border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] text-white flex items-center justify-center ml-[4px]'>
                                    EN
                                </button>
                            ) : (
                                <div className='button_project'>
                                <button
                                onClick={()=>setLanguageInput(3)}
                                 className='button_project_image border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    EN
                                </button>
                                <button
                                onClick={()=>setLanguageInput(3)}
                                 className='button_project_image2 mdMUI:mt-[-59.81px] mt-[-40px] border border-[rgba(34,153,74,1)] mdMUI:px-[24px] mdMUI:py-[16px] p-[12px] mdMUI:mr-[16px] mr-[8px] rounded-[44px] bg-white flex items-center justify-center text-[rgba(73,73,73,1)] ml-[4px]'>
                                    EN
                                </button>
                                </div>
                            )
                        }
                    </div>
                    <Grid container spacing={3}>
                        <Grid item lg='6' md='6' sm='12' xs='12'>
                            <div>
                                <Grid container spacing={0}>
                                    <Grid item lg='12' md='12' sm='12' xs='12' sx={languageInput != 1 ? {display:'none'} : {}}>
                                        <div className=''>
                                            <div className='style_editor'>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Заказчик</label>
                                                <input name='castomer_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='customer_tj'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Заголовак</label>
                                                <input name='title_tj' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='title_tj'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Описание</label>
                                                {/* <textarea name='description_tj' rows='5' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' placeholder='description_tj'/> */}
                                                <RichTextEditor/>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg='12' md='12' sm='12' xs='12' sx={languageInput != 2 ? {display:'none'} : {}}>
                                        <div className=''>
                                            <div className=''>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Заказчик</label>
                                                <input name='castomer_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='customer_ru'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Заголовак</label>
                                                <input name='title_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='title_ru'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Описание</label>
                                                {/* <textarea name='description_ru' rows='5' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' placeholder='description_ru'/> */}
                                                <input name='description_1_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_1_ru'/>
                                                <input name='description_2_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_2_ru'/>
                                                <input name='description_3_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_3_ru'/>
                                                <input name='description_4_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_4_ru'/>
                                                <input name='description_5_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_5_ru'/>
                                                <input name='description_6_ru' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_6_ru'/>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg='12' md='12' sm='12' xs='12' sx={languageInput != 3 ? {display:'none'} : {}}>
                                        <div className=''>
                                            <div className=''>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Заказчик</label>
                                                <input name='castomer_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='customer_en'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Заголовак</label>
                                                <input name='title_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='title_en'/>
                                                <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Описание</label>
                                                {/* <textarea name='description_en' rows='5' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[20px]' placeholder='description_en'/> */}
                                                <input name='description_1_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_1_en'/>
                                                <input name='description_2_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_2_en'/>
                                                <input name='description_3_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_3_en'/>
                                                <input name='description_4_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_4_en'/>
                                                <input name='description_5_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_5_en'/>
                                                <input name='description_6_en' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='description_6_en'/>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg='6' md='6' sm='12' xs='12'>
                            <div className='w-full'>
                                <Grid container spacing={3}>
                                    <Grid item lg='12' md='12' sm='12' xs='12'>
                                        <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Фотография</label>
                                        <Upload
                                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                          listType="picture-card"
                                          fileList={fileList}
                                          onPreview={handlePreview}
                                          onChange={handleChange}
                                          className='upload_none_style_error'
                                        >
                                          {fileList.length >= 1 ? null : uploadButton}
                                        </Upload>
                                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                          <img
                                            alt="example"
                                            style={{
                                              width: '100%',
                                            }}
                                            src={previewImage}
                                          />
                                        </Modal>
                                    </Grid>
                                    <Grid item lg='12' md='12' sm='12' xs='12'>
                                        <div className=''>
                                            <Grid container columnSpacing={3}>
                                                <Grid item lg='12' md='12' sm='12' xs='12'>
                                                    <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Сылка сайта</label>
                                                    <input name='url' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='url'/>
                                                </Grid>
                                                <Grid item lg='12' md='12' sm='12' xs='12'>
                                                    <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Нозвание проекта</label>
                                                    <input name='name' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder='name'/>
                                                </Grid>
                                                <Grid item lg='6' md='6' sm='6' xs='12'>
                                                    <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Котегория</label>
                                                    <select name='category' className='w-full bg-white p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]'>
                                                        <option>{t('project.text2')}</option>
                                                        <option>{t('project.text3')}</option>
                                                        <option>{t('project.text4')}</option>
                                                    </select>
                                                </Grid>
                                                <Grid item lg='6' md='6' sm='6' xs='12'>
                                                    <label className='mdMUI:text-[24px] text-[16px] font-[600] ml-[20px]'>Год</label>
                                                    <input name='year' className='w-full p-[16px] border-[1px] mdMUI:text-[18px] text-[14px] mdMUI:leading-[21.94px] leading-[17.07px] border-[rgba(123,123,123,1)] mdMUI:mb-[24px] mb-[8px] rounded-[100px]' placeholder={t('project.year')} type='number'/>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg='6' md='6' sm='12' xs='12'>
                            <button 
                            type='submit'
                            style={{background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)'}} 
                            className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] mdMUI:text-[20px] text-[18px] mdMUI:leading-[24.38px] leading-[21.94px]'>
                                ОТПРАВИТЬ
                            </button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminProject