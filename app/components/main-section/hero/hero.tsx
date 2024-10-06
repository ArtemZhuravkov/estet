import React from 'react'
import { dancingScript, marckScr } from '@/app/fonts/fonts';
import Card from '../card/card';
import { cards } from './helpers';

export default function Hero() {
    return (
        <section id="hero" className='w-full mb-10 md:mb-20 text-center'>
            <img src="/assets/hero.webp" alt="hero section image" className="w-full h-[400px] object-cover shadow-lg shadow-gray-800" />
            <div className='pt-16 max-w-[1440px] m-auto px-4'>
                <h1 className={`font-bold text-5xl mb-6 ${marckScr.className}`}> <span className={`${dancingScript.className} text-5xl font-bold`}>S.Tet.Hair</span>  <br /> Ваш надійний партнер у світі натурального волосся </h1>
                <p className='mb-8 text-2xl font-semibold'>
                    Ласкаво просимо в наш магазин, де якість поєднується з красою! Ми спеціалізуємося на продажу  волосся і пишаємося тим, що надаємо лише найкращі продукти для наших клієнтів.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                    {cards.slice(0,3).map((card) => (
                        <Card title={card.title} description={card.description} key={card.id}/>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-10 justify-center">
                    {cards.slice(3,5).map((card) => (
                        <Card title={card.title} description={card.description} key={card.id}/>
                    ))}
                </div>
                <h3 className={`font-bold text-4xl mb-6 ${marckScr.className}`}>Приєднуйтесь до нашої сім'ї задоволених клієнтів і подаруйте своєму волоссю шанс сяяти! Почніть свою трансформацію разом з нами вже сьогодні!</h3>
            </div>
        </section>
    )
}
