'use client';

import { useEffect, useState } from 'react';

export function isInViewport(element, offset) {
    const rect = element?.getBoundingClientRect();

    const size = offset ? window.innerHeight - offset : window.innerHeight;
    return rect?.top <= size || false;
}

export function getPosition(element, offset) {
    const rect = element?.getBoundingClientRect();

    const size = offset ? window.innerHeight - offset : window.innerHeight;
    return rect || false;
}

const createCarousel = (array) => {
    array.index = 0;
    array.current = function () {
        this.index = this.index % array.length;
        return array[this.index];
    };
    array.next = function () {
        this.index++;
        return this.current();
    };
    array.previous = function () {
        this.index += array.length - 1;
        return this.current();
    };
    array.reset = function () {
        this.index = 0;
        return array[0];
    };
};

export const Carrousel = ({ list }) => {
    const [isMobile, setMobile] = useState(false);
    const [counter, setCounter] = useState(0);

    function prev() {
        list.previous();
        setCounter(list.index);
    }
    function next() {
        list.next();
        setCounter(list.index);
    }

    useEffect(() => {
        createCarousel(list);

        window.innerWidth < 1200 ? setMobile(true) : setMobile(false);

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1200) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        });
    }, []);

    return (
        <>
            {!isMobile ? (
                <div className="flex items-center justify-center gap-20 select-none md:flex-row flex-col relative w-full h-full">
                    <button
                        className="p-6 text-white text-4xl hover:scale-125 transition-all desktopBtn"
                        onClick={() => prev()}
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <div className="max-w-[880px] w-[90%] h-full flex items-center justify-center">
                        <img
                            src={list[counter]}
                            alt="image"
                            className="max-w-[800px] w-full max-h-full"
                        />
                    </div>
                    <button
                        className="p-6 text-white text-4xl hover:scale-125 transition-all desktopBtn"
                        onClick={() => next()}
                    >
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                    <div className="gap-12 items-center mobButtons">
                        <button
                            className="p-6 text-white text-4xl hover:scale-125 transition-all mobBtn"
                            onClick={() => prev()}
                        >
                            <i className="ri-arrow-left-s-line"></i>
                        </button>
                        <button
                            className="p-6 text-white text-4xl hover:scale-125 transition-all mobBtn"
                            onClick={() => next()}
                        >
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="slider">
                    {list?.map((img, index) => (
                        <img src={img} alt="image" key={index} />
                    ))}
                </div>
            )}
        </>
    );
};
