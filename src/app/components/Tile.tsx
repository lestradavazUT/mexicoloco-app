import React, { useContext } from 'react';
import translations from '../translations';
import { LangContext } from '../context/langContext';

const Tile = () => {
    const { langValue, setLangValue } = useContext(LangContext);

    return (
        <div className="tile px-[12.5%] py-[5rem] flex items-center justify-center">
            <span className="font-secondary text-5xl text-white">
                {translations[langValue]?.tile}
            </span>
        </div>
    );
};

export default Tile;
