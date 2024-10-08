import apple from '/images/apple.png'
import agency from '/images/agency.png'
import goshop from '/images/goshop.png'
import iptracker from '/images/iptracker.png'
import pokedex from '/images/pokedex.png'
import html5Svg from '/images/html5.svg'
import css3Svg from '/images/css3.svg'
import jsSvg from '/images/js.svg'
import gsapSvg from '/images/gsap.svg'
import threejsSvg from '/images/threejs.svg'
import tailwindcssSvg from '/images/tailwindcss.svg'
import bootstrap5Svg from '/images/bootstrap5.svg'
import sassSvg from '/images/sass.svg'
import reactjsSvg from '/images/reactjs.svg'
import vuejsSvg from '/images/vuejs.svg'
import nodejsSvg from '/images/nodejs.svg'

export const projects = [
    {
        title: 'Apple Website Clone', 
        description: [html5Svg, css3Svg, jsSvg, gsapSvg, threejsSvg, tailwindcssSvg, reactjsSvg],
        link: 'https://iphone-clone-site-jsmastery.netlify.app/',
        screenshot: apple
    },
    {
        title: 'IP Address Tracker', 
        description: [html5Svg, css3Svg, jsSvg, sassSvg, reactjsSvg],
        link: 'https://ip-address-tracker-fementor.netlify.app/',
        screenshot: iptracker
    },
    {
        title: 'Agency Landing Page', 
        description: [html5Svg, css3Svg, jsSvg],
        link: 'https://agency-landing-page-fementor.netlify.app/',
        screenshot: agency
    },
    {
        title: 'Pokedex', 
        description: [html5Svg, css3Svg, jsSvg, tailwindcssSvg, vuejsSvg],
        link: 'https://pokedex-nougat.netlify.app/',
        screenshot: pokedex
    },
    {
        title: 'Go Shop', 
        description: [html5Svg, css3Svg, jsSvg, bootstrap5Svg, nodejsSvg, reactjsSvg],
        link: 'https://go-shop-mini.netlify.app/',
        screenshot: goshop
    },
]