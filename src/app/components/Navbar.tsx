'use client';

import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import constants from '../constants';
import { LangContext } from '../context/langContext';
import translations from '../translations';

const Navbar = () => {
    const { langValue, setLangValue } = useContext(LangContext);

    const header = useRef(null);
    const nav = useRef(null);

    const [reached, setReach] = useState(false);
    const [animation, setAnimation] = useState('');
    const [state, setState] = useState('');
    const [show, setShow] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const languages: { code: string; txt: string }[] = [
        {
            code: 'es',
            txt: translations[langValue]?.languages.es || 'Spanish'
        },
        {
            code: 'en',
            txt: translations[langValue]?.languages.en || 'English'
        }
    ];

    const changeLang = (code) => {
        localStorage.setItem('lang', code);
        setLangValue(localStorage.getItem('lang'));
        return setIsOpen(false);
    };

    useEffect(() => {
        function check() {
            if (window.scrollY < 275) {
                setState('normal');
                setReach(false);
                return;
            }
            setReach(true);

            if (window.scrollY < 550) {
                setState('ready');
                return;
            }

            if (window.scrollY < 800) {
                setState('ready set');
                return;
            }

            setState('ready set show');
            return;
        }

        check();

        window.addEventListener('scroll', () => {
            check();
        });

        const l = localStorage.getItem('lang');
        if (!l) localStorage.setItem('lang', 'es');

        setLangValue(localStorage.getItem('lang'));

        // header.current.style.filter = 'drop-shadow(0 0 40px #00000025)';
    }, [reached]);

    return (
        <header
            className={`w-full transition ${state} ${animation}`}
            ref={header}
        >
            <div className="header_container">
                <a href="/" className={`logo header-logo ${reached && 'mini'}`}>
                    <img src="/mexicoloco-logo-negativo.webp" alt="logo" />
                </a>
                <i
                    className={`${
                        show ? 'ri-close-fill' : 'ri-menu-4-fill'
                    } menu-i`}
                    onClick={() => {
                        if (!show) {
                            setShow(true);
                            return;
                        }
                        setShow(false);
                    }}
                ></i>
                <nav
                    ref={nav}
                    className={`${show ? 'flex' : 'none'} ${reached && 'rosa'}`}
                >
                    <a
                        href="#nosotros"
                        className={` ${!reached ? '' : ''} font-primary`}
                        onClick={() => {
                            if (show) {
                                setShow(false);
                            }
                        }}
                    >
                        {translations[langValue]?.navbar.about}
                    </a>
                    <a
                        href="#ubicacion"
                        className={` ${!reached ? '' : ''} font-primary`}
                        onClick={() => {
                            if (show) {
                                setShow(false);
                            }
                        }}
                    >
                        {translations[langValue]?.navbar.location}
                    </a>
                    <a href="/" className={`logo ${reached && 'mini'}`}>
                        <img src="/mexicoloco-logo-negativo.webp" alt="logo" />
                    </a>
                    <a
                        href="#opiniones"
                        className={` ${!reached ? '' : ''} font-primary`}
                        onClick={() => {
                            if (show) {
                                setShow(false);
                            }
                        }}
                    >
                        {translations[langValue]?.navbar.opinions}
                    </a>
                    <a
                        href="#contacto"
                        className={` ${!reached ? '' : ''} font-primary`}
                        onClick={() => {
                            if (show) {
                                setShow(false);
                            }
                        }}
                    >
                        {translations[langValue]?.navbar.contact}
                    </a>
                </nav>
                {langValue && (
                    <button
                        type="button"
                        className="bg-transparent text-white lang-selector font-primary text-2xl mb-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {langValue.toUpperCase()}
                        <i className="ri-arrow-drop-down-line"></i>
                    </button>
                )}
                {isOpen && (
                    <div className="languages">
                        {languages?.map((language, index) => (
                            <button
                                type="button"
                                key={index}
                                className="lang_option capitalize font-bold"
                                onClick={() => changeLang(language.code)}
                            >
                                {language.txt}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div
                className={`pleca w-full h-[10rem] ${
                    reached ? 'block' : 'hidden'
                }`}
            ></div>
        </header>
    );
};

export default Navbar;
