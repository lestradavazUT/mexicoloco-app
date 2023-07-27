'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getPosition } from '../lib/client';

const GoTop = () => {
    const [hide, setHide] = useState(true);
    const [change, setChange] = useState(false);
    const btn = useRef(null);

    useEffect(() => {
        window.scrollY > 800 ? setHide(false) : setHide(true);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                setHide(false);
            } else {
                setHide(true);
            }
        });
    });

    return (
        <div
            className={`goTop ${hide ? 'hide' : 'animation'}`}
            ref={btn}
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            <i className="ri-arrow-up-s-line"></i>
        </div>
    );
};

export default GoTop;
