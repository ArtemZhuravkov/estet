"use client"
import React, { useState } from 'react'
import { premiumMaterialCards } from './helpers';
import { IMaterialCard } from '../interface';
import { marckScr } from '@/app/fonts/fonts';
import { ImageCard } from '../image-card/image-card';
import { ImageModal } from '../../image-modal/image-modal';

export default function PremiumMaterials() {
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
            <h1 className='font-bold text-3xl text-center mb-8'>Для справжніх поціновувачів ми також маємо: преміальні, одноголові пасма для нарощування.</h1>
            <h3 className={`font-bold text-3xl text-center mb-6 ${marckScr.className}`}>Чому цей тип волосся вважається найкращим по якості у світі? </h3>
            <p className='text-lg font-medium text-center'>
                Одоголові зрізи збираються з однієї донорської голови, що забезпечує повну відсутність змішування з іншим волоссям.
                Це означає, що всі волоски мають однакову текстуру, довжину і напрямок росту. <br />
                У процесі виробництва наші українські технологи використовують <strong>техніку холодного фарбування</strong>, яка мінімізує вплив високих температур на волосся,що безперечно зберігає цілісність кутикули
                і залишає його блискучим і здоровим.
                Після фарбування волосся - м'яке і гладке, а колір насичений і стійкий.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4 pt-8">
                {premiumMaterialCards.map((card: IMaterialCard) => (
                    <ImageCard key={card.id} card={card} onImageClick={openModal} />
                ))}
            </div>
            {selectedImage && (
                <ImageModal img={selectedImage} alt={selectedAlt || ''} onClose={closeModal} />
            )}
        </section>
    )
}
