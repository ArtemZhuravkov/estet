import React from 'react'

export default function Contacts() {
    return (
        <section className='mb-10 md:mb-20 max-w-[1440px] w-full m-auto px-4'>
            <h1 className='font-bold text-3xl text-center mb-8'>Контакти</h1>
            <div className='flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-8'>
                <h3 className='font-bold mb-3 sm:mb-0 text-left'>Ви можете зв'язатись з нами будь-яким зручним способом:</h3>
                <div className='flex mb-8 sm:mb-0 sm:ml-2 items-center'>
                    <a
                        href="https://t.me/stethair"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 cursor-pointer mr-3"
                    >
                        <i className="fa-brands fa-telegram text-4xl"></i>
                    </a>
                    <a
                        href="viber://chat?number=+380955340437"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 cursor-pointer mr-3"
                    >
                        <i className="fa-brands fa-viber text-4xl"></i>
                    </a>
                    <a
                        href="https://wa.me/+380955340437"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 cursor-pointer"
                    >
                        <i className="fa-brands fa-whatsapp text-4xl"></i>
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-[30%]'>
                    <div className='mb-3'>
                        <h3 className='font-bold'>Телефон:</h3>
                        <a href='tel:+380955340437' className='font-bold text-lg'>+38 (095) 534 04 37</a>
                    </div>
                    <div>
                        <h3 className='font-bold'>Ми знаходимось за адресою:</h3>
                        <p className='font-bold text-lg'>вул. Хорива 22/28, метро Контрактова площа</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.54518071539!2d30.518722!3d50.4681936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce156e570231%3A0x366ec70825b05c34!2z0LLRg9C70LjRhtGPINCl0L7RgNC40LLQsCwgMjIvMjgsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1730122432570!5m2!1suk!2sua"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={undefined}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}
