import React from 'react';
import "./style.css";
interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="rounded-lg shadow-lg h-full card">
            <div className='bg-white p-5 h-full rounded'>
                <div className='flex items-center justify-center'>
                    <i className="fa fa-thin fa-heart text-2xl" style={{color: "red"}}></i>
                    <h3 className="text-xl font-semibold ml-2">{title}</h3>
                </div>
                <p className="mt-2 text-gray-600 text-base text-center">{description}</p>
            </div>
        </div>
    );
};

export default Card;