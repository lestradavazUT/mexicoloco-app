import React, { useContext, useEffect, useRef, useState } from 'react';

import { Carattere } from 'next/font/google';
import constants from '../constants';
import Link from 'next/link';
import translations from '../translations';

import Image from 'next/image';
import { LangContext } from '../context/langContext';
import { Carrousel } from '../lib/client';

const Menu = () => {
    const features = constants.featured;
    const { langValue, setLangValue } = useContext(LangContext);

    const [imgs, setImgs] = useState([]);

    const imageSlideShow = useRef<HTMLDialogElement>(null);

    const showImageSlideShow = (list) => {
        setImgs(list);
        imageSlideShow.current.showModal();
    };

    const hideImageSlideShow = () => {
        setImgs([]);
        imageSlideShow.current.close();
    };

    return (
        <>
            <dialog
                ref={imageSlideShow}
                className="imageSlideShow h-screen w-screen bg-transparent"
            >
                <div className="h-full w-full flex items-center justify-center relative">
                    <button
                        onClick={hideImageSlideShow}
                        className="absolute top-[2vh] right-[5vh] text-white text-4xl hover:scale-125 transition-all close-btn"
                    >
                        <i className="ri-close-fill"></i>
                    </button>
                    {imgs?.length > 0 && <Carrousel list={imgs} />}
                </div>
            </dialog>
            <div
                className="menu w-full flex flex-col items-center justify-center gap-20 px-[12.5%] py-[5rem]"
                id="menu"
            >
                <div className="featured flex w-full items-center justify-center gap-[2.5rem] flex-wrap">
                    {features?.map((feat, index) => (
                        <div
                            className="feature flex flex-col items-center justify-center flex-[1] min-w-[320px] max-w-[360px] min-h-[580px]"
                            key={index}
                        >
                            <div
                                className={`feature_img bg-[#aaaaaa] flex items-center justify-center text-center w-full relative overflow-hidden feature${
                                    index + 1
                                }`}
                            ></div>
                            <div className="feature_body flex flex-col px-[2.5rem] py-[3.5rem] gap-[1rem] items-center justify-start text-white bg-[#d1406b] flex-1">
                                <h6
                                    className={`font-primary text-[1.5rem] leading-[1]`}
                                >
                                    {
                                        translations[langValue]?.features[
                                            +feat.id
                                        ].name
                                    }
                                </h6>
                                <p className="text-center w-[90%] mb-8">
                                    {
                                        translations[langValue]?.features[
                                            +feat.id
                                        ].desc
                                    }
                                </p>
                                <button
                                    className="px-12 py-4 bg-[#ffffff] text-[#d1406b] hover:bg-[#dfdfdf] hover:border-[#dfdfdf] transition
                border-2 border-[#ffffff] border-solid font-[700] mt-auto"
                                    type="button"
                                    onClick={() =>
                                        showImageSlideShow(feat?.imgList)
                                    }
                                >
                                    {translations[langValue]?.features.btn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    className={`px-8 py-4 bg-[#d1406b] text-[#ffffff] hover:bg-[#F4A01B] hover:border-[#F4A01B] transition
                border-2 border-[#d1406b] border-solid font-[700]`}
                    href={translations[langValue]?.features.menuFile}
                    download
                >
                    {translations[langValue]?.features.menuBtn}
                </a>
                <div
                    className="map flex flex-col items-center justify-center gap-8"
                    id="ubicacion"
                >
                    <h4 className={`font-secondary text-[2rem] text-[#d1406b]`}>
                        {translations[langValue]?.visitUs}
                    </h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.76976642914525!2d-87.07523211761556!3d20.622410318242782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e433a2b47217f%3A0x3bacf1f0c8129c4e!2sMexico%20Loco!5e0!3m2!1ses-419!2smx!4v1690299438857!5m2!1ses-419!2smx"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="frame"
                    ></iframe>
                    {/* <a
                    className="frame"
                    href={
                        'https://www.google.com/maps/place/Mexico+Loco/@20.622503,-87.075022,21z/data=!4m6!3m5!1s0x8f4e433a2b47217f:0x3bacf1f0c8129c4e!8m2!3d20.6224103!4d-87.075011!16s%2Fg%2F11bwy_rvwy?hl=es-419&entry=ttu'
                    }
                    target="_blank"
                ></a> */}
                </div>
            </div>
        </>
    );
};

export default Menu;
