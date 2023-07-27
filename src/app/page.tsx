'use client';

import loadComponent from './lib/server';
import { GoTop } from './components';
import { useContext, useEffect } from 'react';
import { LangContext } from './context/langContext';

const Navbar = loadComponent('Navbar');
const Hero = loadComponent('Hero');
const About = loadComponent('About');
const Menu = loadComponent('Menu');
const Tile = loadComponent('Tile');
const Testimonials = loadComponent('Testimonials');
const Contact = loadComponent('Contact');
const Footer = loadComponent('Footer');

export default function Home() {
    const { langValue, setLangValue } = useContext(LangContext);

    return (
        <>
            <GoTop />
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Tile />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}
