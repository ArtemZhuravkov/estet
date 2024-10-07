"use client"
import React, { useState } from 'react'
import { ourWorks } from './helpers'
import { IMaterialCard } from '../interface'
import { ImageModal } from '../../image-modal/image-modal';

export default function OurWorks() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedAlt, setSelectedAlt] = useState<string | null>(null);

    const openModal = (img: string, alt: string) => {
        setSelectedImage(img);
        setSelectedAlt(alt);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedAlt(null);
    };

    return (
        <section className='mb-10 md:mb-20 max-w-[1440px] m-auto px-4'>
            <h2 className='font-bold text-3xl text-center'>Неперевершені роботи майстрів з нашим волоссям</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-8">
                {ourWorks.map((card: IMaterialCard) => (
                    <div className="group relative w-full md:w-[49%] h-[450px] overflow-hidden shadow-lg cursor-pointer" key={card.id}  onClick={(e) => openModal(card.img, card.alt)}>
                        <img
                            src={card.img}
                            alt={card.alt}
                            title={card.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ImageModal img={selectedImage} alt={selectedAlt || ''} onClose={closeModal} />
            )}
        </section>
    )
}
