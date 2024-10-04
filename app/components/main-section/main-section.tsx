"use client"
import React, { useEffect, useState } from 'react'
import Card from './card/card';

const cards = [
    { id: 1, title: 'Card 1', description: 'This is the description for Card 1' },
    { id: 2, title: 'Card 2', description: 'This is the description for Card 2' },
    { id: 3, title: 'Card 3', description: 'This is the description for Card 3' },
    { id: 4, title: 'Card 4', description: 'This is the description for Card 4' },
    { id: 5, title: 'Card 5', description: 'This is the description for Card 5' },
    { id: 6, title: 'Card 6', description: 'This is the description for Card 6' },
];

export default function MainSection() {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        // Set a timeout to trigger visibility after component mounts
        const timer = setTimeout(() => {
            setVisible(true);
        }, 100); // Adjust timing as necessary

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <div>
            <div className='flex flex-col items-center m-auto pt-[76px]'>
                <section id="hero" className='w-full mb-[80px] text-center'>
                    <img src="/assets/nature.jpg" alt="hero section image" className="w-full h-[400px] object-cover shadow-lg shadow-gray-800" />
                    <div className='pt-6 max-w-[1440px] m-auto px-4'>
                        <h2 className='font-bold text-5xl mb-6'>Our Services</h2>
                        <p className='mb-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque laudantium harum, laborum inventore rem consectetur rerum. Repellat ea culpa nihil adipisci laudantium? Veniam, ipsam iure natus officiis tenetur adipisci cupiditate corrupti! Praesentium maxime accusantium quasi fuga mollitia eveniet corrupti?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`transition-transform duration-500 ${visible
                                            ? index < 3
                                                ? 'transform translate-x-0 opacity-100'
                                                : 'transform translate-x-0 opacity-100'
                                            : index < 3
                                                ? '-translate-x-20 opacity-0'
                                                : 'translate-x-20 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`, // Stagger the transition for each card
                                    }}
                                >
                                    <Card title={card.title} description={card.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className='mb-[40px] max-w-[1440px] m-auto px-4'>
                    <h2 className='font-bold text-5xl text-center'>Our works</h2>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4 pt-8">
                        {/* Card 1 */}
                        <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/girl.jpg"
                                alt="Card 1"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/girl.jpg"
                                alt="Card 2"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/girl.jpg"
                                alt="Card 3"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/girl.jpg"
                                alt="Card 4"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        </div>

                        {/* Card 5 */}
                        <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/girl.jpg"
                                alt="Card 5"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        </div>

                        {/* Card 6 */}
                        <div className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/assets/girl.jpg"
                                alt="Card 6"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        </div>
                    </div>
                </section>

                <section id="contact" className='mb-[40px] max-w-[1440px] m-auto px-4'>
                    <h2 className='font-bold text-5xl text-center mb-5'>Contact Us</h2>
                    <p id='contacts_anchor'>Book an appointment today. Call us at (123) 456-7890 or visit us at 123 Beauty Street.</p>
                </section>
            </div>
        </div>
    )
}
