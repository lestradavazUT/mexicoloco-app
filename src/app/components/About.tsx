import React, { useContext } from 'react';
import constants from '../constants';
import translations from '../translations';
import { LangContext } from '../context/langContext';

const About = () => {
    const { langValue, setLangValue } = useContext(LangContext);
    return (
        <div
            className="about w-full bg-[#d1406b] text-white flex flex-col items-center justify-center py-[2.5rem] gap-4"
            id="nosotros"
        >
            <h4 className={`font-secondary text-[2rem]`}>
                {translations[langValue]?.about.title}
            </h4>
            <p className={`w-1/2 text-center font-[400]`}>
                {translations[langValue]?.about.txt}
            </p>
        </div>
    );
};

export default About;
