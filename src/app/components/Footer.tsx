'use client';
import React, { useEffect, useRef, useState } from 'react';
import { isInViewport } from '../lib/client';
import Link from 'next/link';

const Footer = () => {
    const box = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener(
            'scroll',
            () => {
                isInViewport(box.current, 100)
                    ? setVisible(true)
                    : setVisible(false);
            },
            {
                passive: true
            }
        );
    }, []);

    return (
        <footer
            className={`footer w-full py-[2.5rem] bg-white text-black px-[12.5%] ${
                visible && 'isVisible'
            }`}
            ref={box}
        >
            <div className="flex w-full flex-col items-center justify-center gap-8">
                <img
                    src="/mexicoloco-logo.webp"
                    alt="logo"
                    className="w-[8rem] opacity-60"
                />
                <div className="socials flex items-center gap-6">
                    <Link
                        href={'https://www.instagram.com/somosmexicoloco/'}
                        target="_blank"
                        className="social flex items-center justify-center h-[2rem] w-[2rem] text-[#d1406b] hover:text-[#F4A01B] transition-all"
                    >
                        <i className="ri-instagram-fill text-[1.95rem]"></i>
                    </Link>
                    <Link
                        href={
                            'https://www.facebook.com/miMexicoLoco/?locale=es_LA'
                        }
                        target="_blank"
                        className="social flex items-center justify-center h-[2rem] w-[2rem] text-[#d1406b] hover:text-[#F4A01B] transition-all"
                    >
                        <i className="ri-facebook-box-fill text-[2rem]"></i>
                    </Link>
                </div>
                {/* <Link href={'/aviso'} className="text-[.9rem] hover:underline">
                    Politicas de privacidad
                </Link> */}
            </div>
        </footer>
    );
};

export default Footer;
