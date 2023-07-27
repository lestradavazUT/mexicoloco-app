'use client';

import React, {
    createRef,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import { isInViewport } from '../lib/client';
import ReCAPTCHA from 'react-google-recaptcha';
import constants from '../constants';
import emailjs from '@emailjs/browser';
import translations from '../translations';
import { LangContext } from '../context/langContext';

const Contact = () => {
    const box = useRef(null);
    const [visible, setVisible] = useState(false);
    const [passed, setPassed] = useState(false);

    const { langValue, setLangValue } = useContext(LangContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const recaptchaRef = useRef();

    const onReCAPTCHAChange = (captchaCode) => {
        if (!captchaCode) {
            return setPassed(false);
        }
        return setPassed(true);
    };

    const sendEmail = (data) => {
        return emailjs
            .send(
                constants.emailjs.serviceId,
                constants.emailjs.templateId,
                { name: data.name, email: data.email, message: data.message },
                constants.emailjs.publicKey
            )
            .then((resp) => {
                return true;
            })
            .catch((error) => {
                return false;
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!passed) {
            return alert('Completa el captcha');
        }

        const data = Object.entries(form);

        for (const [key, value] of data) {
            if (!value) return alert('Complete your ' + key);
        }

        const send = sendEmail(JSON.parse(JSON.stringify(form)));

        if (!send) return alert('Error. Intente nuevamente');

        alert('Email enviado!');

        const captcha: any = recaptchaRef?.current;

        if (captcha) captcha?.reset();

        setPassed(false);
        setForm({
            name: '',
            email: '',
            message: ''
        });
    };

    const keys = constants.recaptcha;

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

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
        <div
            className={`contact py-[5rem] px-[12.5%] ${visible && 'isVisible'}`}
            ref={box}
            id="contacto"
        >
            <form
                className="flex flex-col w-full max-w-[36rem] gap-8 items-center justify-center text-white mx-auto"
                onSubmit={handleSubmit}
            >
                <span className="font-secondary text-white text-center mx-auto text-[2rem]">
                    {translations[langValue]?.contact.title}
                </span>
                <div className="form-group w-full block">
                    <label htmlFor="name" className="block">
                        {translations[langValue]?.contact.name.label}
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={
                            translations[langValue]?.contact.name.placeholder
                        }
                        className="block w-full"
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>
                <div className="form-group w-full block">
                    <label htmlFor="email" className="block">
                        {translations[langValue]?.contact.email.label}
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={
                            translations[langValue]?.contact.name.placeholder
                        }
                        className="block w-full"
                        onChange={handleChange}
                        value={form.email}
                    />
                </div>
                <div className="form-group w-full block">
                    <label htmlFor="message" className="block">
                        {translations[langValue]?.contact.message.label}
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="block w-full"
                        placeholder={
                            translations[langValue]?.contact.name.placeholder
                        }
                        onChange={handleChange}
                        value={form.message}
                    ></textarea>
                </div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="normal"
                    sitekey={keys.site}
                    onChange={onReCAPTCHAChange}
                />
                <button
                    className={`px-16 py-4 bg-[#ffffff] text-[#d1406b] hover:bg-transparent hover:text-[#ffffff] transition
                                border-2 border-[#ffffff] border-solid font-[700] w-full`}
                    type="submit"
                >
                    {translations[langValue]?.contact.btn}
                </button>
            </form>
        </div>
    );
};

export default Contact;
