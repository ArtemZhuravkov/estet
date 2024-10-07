"use client"
import React, { useState } from 'react'
import { materialCards } from './helpers'
import { IMaterialCard } from '../interface'
import { ImageCard } from '../image-card/image-card'
import { ImageModal } from '../../image-modal/image-modal'

export default function Materials() {
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
            <h2 className='font-bold text-3xl text-center'>У наявності маємо різноманітну кольорову палітру</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4 pt-8">
                {materialCards.map((card: IMaterialCard) => (
                    <ImageCard key={card.id} card={card} onImageClick={openModal} />
                ))}
                {selectedImage && (
                    <ImageModal img={selectedImage} alt={selectedAlt || ''} onClose={closeModal} />
                )}
            </div>
        </section>
    )
}
