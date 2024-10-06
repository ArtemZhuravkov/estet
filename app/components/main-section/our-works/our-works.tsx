import React from 'react'
import { ourWorks } from './helpers'
import { IMaterialCard } from '../interface'

export default function OurWorks() {
    return (
        <section className='mb-10 md:mb-20 max-w-[1440px] m-auto px-4'>
            <h2 className='font-bold text-5xl text-center'>Неперевершені роботи майстрів з нашим волоссям</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-8">
                {ourWorks.map((card: IMaterialCard) => (
                    <div className="group relative w-full md:w-[49%] h-[450px] overflow-hidden shadow-lg" key={card.id}>
                        <img
                            src={card.img}
                            alt={card.alt}
                            title={card.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
