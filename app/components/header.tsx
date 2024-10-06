"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { dancingScript, marckScr } from '../fonts/fonts';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-[#F5F5F5] bg-opacity-90' : 'bg-[#F5F5F5] bg-opacity-100'}`}>
            <div className='flex justify-between items-center max-w-[1440px] m-auto py-2 px-2'>
                <h1 className={`${dancingScript.className} text-5xl`}>S.Tet.Hair</h1>
                <a
                    href="https://www.instagram.com/s.tet.hair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-200 "
                >
                    <i className="fab fa-instagram text-6xl"></i>
                </a>
                <div>
                    <Link href="#contacts_anchor" className={`${marckScr.className} text-2xl`}>Контакти</Link>
                </div>
            </div>
        </div>
    )
}
