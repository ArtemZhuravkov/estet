import React from 'react'
import { dancingScript } from '../fonts/fonts'

export default function Footer() {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='flex max-w-[1440px] m-auto justify-between py-5 px-4'>
                <h3 className={`${dancingScript.className} text-2xl`}>S.Tet.Hair</h3>
                <div className='flex items-center'>
                    <p className='uppercase'>Ми в соцмережах:</p>
                    <a
                        href="https://www.instagram.com/s.tet.hair"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 ml-3"
                    >
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
