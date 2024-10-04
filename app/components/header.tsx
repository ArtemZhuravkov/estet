"use client"
import React, { useEffect, useState } from 'react'
import { Dancing_Script } from "next/font/google";
import Link from 'next/link'

const dancingScript = Dancing_Script({
    weight: ['400', '700'],
    subsets: ['latin'],
});

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
                <h1 className={`${dancingScript.className} text-5xl`}>S.Tet.Net</h1>
                <a
                    href="https://www.instagram.com/your_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-200 "
                >
                    <i className="fab fa-instagram text-6xl"></i>
                </a>
                <Link href="#contacts_anchor">Контакти</Link>
            </div>
        </div>
    )
}
