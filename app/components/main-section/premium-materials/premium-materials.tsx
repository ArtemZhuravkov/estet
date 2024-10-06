import React from 'react'
import { premiumMaterialCards } from './helpers';
import { IMaterialCard } from '../interface';

export default function PremiumMaterials() {
    return (
        <section className='mb-10 md:mb-20 max-w-[1440px] m-auto px-4'>
            <h1 className='font-bold text-5xl text-center mb-8'>Для справжніх поціновувачів ми також маємо: преміальні, одноголові пасма для нарощування.</h1>
            <h3 className='font-bold text-2xl text-center mb-6'>Чому цей тип волосся вважається найкращим по якості у світі? </h3>
            <p className='text-lg font-medium'>
                Одоголові зрізи збираються з однієї донорської голови, що забезпечує повну відсутність змішування з іншим волоссям.
                Це означає, що всі волоски мають однакову текстуру, довжину і напрямок росту. <br />
                У процесі виробництва наші українські технологи використовують техніку холодного фарбування, яка мінімізує вплив високих температур на волосся,що безперечно зберігає цілісність кутикули
                і залишає його блискучим і здоровим.
                Після фарбування волосся - м'яке і гладке, а колір насичений і стійкий.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4 pt-8">
                {premiumMaterialCards.map((card: IMaterialCard) => (
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
