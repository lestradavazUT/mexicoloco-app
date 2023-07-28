'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { LangContext } from '../context/langContext';
import translations from '../translations';

const Hero = () => {
    const { langValue, setLangValue } = useContext(LangContext);

    return (
        <div className="hero min-h-screen flex relative">
            <div className="container mx-auto flex items-center justify-center flex-col gap-6">
                <h3
                    className={`font-secondary text-white text-center max-w-[505px] w-[90%]`}
                >
                    {translations[langValue]?.hero.frase}
                </h3>
                <a
                    className={`px-8 py-4 bg-[#d1406b] text-[#ffffff] hover:bg-[#F4A01B] hover:border-[#F4A01B] transition
                                border-2 border-[#d1406b] border-solid font-[700]`}
                    href="#menu"
                >
                    {translations[langValue]?.hero.btn}
                </a>
                {/* <video autoPlay muted loop id="myVideo">
                    <source src="/videoMexicoLoco.mp4" type="video/mp4" />
                </video> */}
            </div>
        </div>
    );
};

export default Hero;
