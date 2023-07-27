import React from 'react';
import constants from '../constants';

const Testimonials = () => {
    const testimonials = constants.testimonials;
    return (
        <div
            className="testimonials py-[5rem] px-[12.5%] w-full flex items-center justify-center gap-[2.5rem] flex-wrap"
            id="opiniones"
        >
            {testimonials?.map((testimonial) => (
                <div
                    className="testimonial w-full max-w-[360px] min-h-[200px] flex items-center justify-center p-10 bg-[#d1406b]"
                    key={testimonial.id}
                >
                    <p className="text-white text-center">{testimonial.txt}</p>
                    <i className="ri-double-quotes-l icon"></i>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
