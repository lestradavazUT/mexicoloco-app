import Head from 'next/head';
import './globals.css';
import Link from 'next/link';

import 'remixicon/fonts/remixicon.css';

import {
    Roboto,
    Open_Sans,
    Poppins,
    Montserrat,
    Raleway,
    Noto_Sans,
    Nunito_Sans,
    Inter,
    Roboto_Slab,
    Merriweather,
    Noto_Serif,
    Bitter,
    Arvo,
    Domine,
    Frank_Ruhl_Libre
} from 'next/font/google';
import { LangContextProvider } from './context/langContext';

const font = Roboto_Slab({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata = {
    title: 'Mexico Loco Restaurant',
    description: 'Mexico Loco - Main site'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <Head>
                <a
                    href={
                        'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css'
                    }
                    rel="stylesheet"
                ></a>
            </Head>
            <body className={`${font.className}`}>
                <LangContextProvider>{children}</LangContextProvider>
            </body>
        </html>
    );
}
