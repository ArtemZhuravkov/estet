import React from 'react'
import { materialCards } from './helpers'
import { IMaterialCard } from '../interface'

export default function Materials() {
    return (
        <section className='mb-10 md:mb-20 max-w-[1440px] m-auto px-4'>
            <h2 className='font-bold text-5xl text-center'>У наявності маємо різноманітну кольорову палітру</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4 pt-8">
                {materialCards.map((card: IMaterialCard) => (
                    <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg" key={card.id}>
                        <img
                            src={card.img}
                            alt={card.alt}
                            title={card.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
