'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import translations from '../translations';
import { LangContext } from '../context/langContext';

export default function NotFound() {
    const { langValue, setLangValue } = useContext(LangContext);

    return (
        <div className="h-screen w-screen grid place-items-center notFound relative">
            <div className="w-[80%] max-w-[40rem] grid place-items-center">
                <img
                    src="/mexicoloco_logo.png"
                    alt="logo_img"
                    className="absolute top-[15vh] w-[10rem]"
                />
                <div className="flex flex-col gap-8 items-center justify-center">
                    <span className="font-secondary text-4xl text-center">
                        404. {translations[langValue]?.notFound.txt}
                    </span>
                    <Link
                        href={'/'}
                        className="font-primary text-2xl px-6 py-2 text-white bg-[#d1406b] hover:bg-[#F4A01B] transition-all"
                    >
                        {translations[langValue]?.notFound.btn}
                    </Link>
                </div>
            </div>
        </div>
    );
}
